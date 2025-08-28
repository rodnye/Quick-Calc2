import { Test, TestingModule } from '@nestjs/testing';
import { InterpreterService } from './interpreter.service';
import { QuestionFillDto } from '@/dto/question.dto';
import { readFileSync } from 'fs';
import { LessonDto } from '@/dto/lesson.dto';
import path from 'path';
import { ConfigService } from '@nestjs/config';
import { AppModule } from '@/app.module';
import { Logger } from '@nestjs/common';

describe('InterpreterService', () => {
  let service: InterpreterService;
  let configSrv: ConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InterpreterService],
      imports: [AppModule],
    })
      .setLogger(new Logger())
      .compile();

    service = module.get(InterpreterService);
    configSrv = module.get(ConfigService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(service.getQuestionDtoClass('fill')).toBe(QuestionFillDto);

    const lessonsPath = configSrv.get('lessonsPath');
    expect(lessonsPath).toBeDefined();

    const file = readFileSync(path.join(lessonsPath, '/1_rectas.md'), 'utf-8');
    expect(file).toMatch(service['blockRegex']);
    expect(service.parse(file)).toBeInstanceOf(LessonDto);
  });
});
