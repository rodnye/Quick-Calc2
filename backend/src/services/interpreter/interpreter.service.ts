import { Injectable, Logger } from '@nestjs/common';
import { ClassConstructor, plainToInstance } from 'class-transformer';
import { validateDto } from '@/utils/validator.utils';
import {
  LessonContentDto,
  LessonDto,
  LessonMetadataDto,
  LessonSectionDto,
  LessonSummaryDto,
} from '@/dto/lesson.dto';
import {
  QuestionSelectDto,
  QuestionSolveDto,
  QuestionTrueFalseDto,
  QuestionFillDto,
  QuestionMatchDto,
  QuestionOrderDto,
} from '@/dto/question.dto';

@Injectable()
export class InterpreterService {
  private readonly logger = new Logger(InterpreterService.name);

  private readonly metadataRegex = /^([a-z_]+):\s*(.+)$/;
  private readonly blockRegex =
    /::::(content|summary|question_\w+)\s*\n([\s\S]*?)\n::::/;
  private readonly jsonRegex = /```json\s*\n([\s\S]*?)\n```/;

  async parse(markdown: string): Promise<LessonDto> {
    try {
      const lines = markdown.split('\n');
      let metadata: LessonMetadataDto;
      const partialMetadata: Partial<LessonMetadataDto> = {};
      const blocks: LessonSectionDto[] = [];

      let i = 0;

      //
      // Parse metadata (lines starting with --- and key: value pairs)
      //
      if (lines[i].trim() === '---') {
        i++;
        while (i < lines.length && lines[i].trim() !== '---') {
          const match = lines[i].match(this.metadataRegex);
          if (match) {
            const key = match[1] as keyof LessonMetadataDto;
            const value: string = match[2].trim();

            switch (key) {
              case 'lesson_id':
              case 'level':
              case 'estimated_time':
                partialMetadata[key] = parseInt(value, 10);
                break;
              case 'tags':
              case 'prerequisites':
                partialMetadata[key] = value
                  .replace(/[[\]']/g, '')
                  .split(',')
                  .map((tag: string) => tag.trim());
                break;
              case 'title':
                partialMetadata[key] = value.replace(/'/g, '');
                break;
              default:
                throw new Error(
                  `Unknown metadata key: ${String(key)}\nOn markdown line: ${i + 1}`,
                );
            }
          }
          i++;
        }
        i++; // skip the closing
      }

      metadata = this.validateMetadata(partialMetadata);

      // Parse content blocks
      let remaining = lines.slice(i).join('\n');
      let match: RegExpExecArray | null = null;
      while ((match = this.blockRegex.exec(remaining)) !== null) {
        const type = match[1];
        const content = match[2].trim();

        if (type === 'content' || type === 'summary') {
          const DtoClass: ClassConstructor<
            LessonContentDto | LessonSectionDto
          > = type === 'content' ? LessonContentDto : LessonSummaryDto;

          blocks.push(
            plainToInstance(DtoClass, {
              type,
              content,
            }),
          );
        } else if (type.indexOf('question_') === 0) {
          const questionType = type.replace('question_', '');
          const jsonContent = this.jsonRegex.exec(content)?.[1];

          if (!jsonContent) {
            throw new Error('Oh no, JSON block not found.');
          }

          try {
            const DtoClass = this.getQuestionDtoClass(questionType);
            const questionData = plainToInstance(
              DtoClass,
              JSON.parse(jsonContent),
            );
            blocks.push(questionData);
          } catch (e) {
            this.logger.error(`Error parsing a question block`);
            throw e;
          }
        }

        // remove the processed block
        remaining = remaining.slice(match.index + match[0].length);
      }

      const lesson = plainToInstance(LessonDto, { metadata, blocks });
      this.logger.verbose('Lesson output: ', lesson);

      return lesson;
    } catch (error) {
      this.logger.error('Error parsing markdown content', error);
      throw new Error(`Failed to parse markdown: ${error.message}`);
    }
  }

  getQuestionDtoClass(
    questionType: string,
  ): ClassConstructor<LessonSectionDto> {
    switch (questionType) {
      case 'select':
        return QuestionSelectDto;
      case 'solve':
        return QuestionSolveDto;
      case 'truefalse':
        return QuestionTrueFalseDto;
      case 'fill':
        return QuestionFillDto;
      case 'match':
        return QuestionMatchDto;
      case 'order':
        return QuestionOrderDto;
      default:
        throw new Error(`Unknown question type: ${questionType}`);
    }
  }

  validateMetadata(metadata: Partial<LessonMetadataDto>): LessonMetadataDto {
    const requiredFields = [
      'lesson_id',
      'title',
      'level',
      'tags',
      'estimated_time',
      'prerequisites',
    ];

    for (const field of requiredFields) {
      if (!metadata[field]) {
        throw new Error(`Missing required metadata field: ${field}`);
      }
    }

    return plainToInstance(LessonMetadataDto, metadata);
  }
}
