import {
  QuestionSelectDto,
  QuestionSolveDto,
  QuestionTrueFalseDto,
  QuestionFillDto,
  QuestionMatchDto,
  QuestionOrderDto,
} from './question.dto';

export class LessonDto {
  metadata: LessonMetadataDto;
  blocks: LessonSectionDto[];
}

export class LessonContentDto {
  type = 'content' as const;
  content: string;
}

export class LessonSummaryDto {
  type = 'summary' as const;
  content: string;
}

export type LessonSectionDto =
  | LessonContentDto
  | LessonSummaryDto
  | QuestionSelectDto
  | QuestionSolveDto
  | QuestionTrueFalseDto
  | QuestionFillDto
  | QuestionMatchDto
  | QuestionOrderDto;

export class LessonMetadataDto {
  lesson_id: number;
  title: string;
  level: number;
  tags: string[];
  estimated_time: number;
  prerequisites: string[];
}
