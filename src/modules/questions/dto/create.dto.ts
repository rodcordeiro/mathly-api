import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';
import { ApiProperty } from '@nestjs/swagger';

const Createquestionschema = z.object({
  name: z.string(),
  difficulty: z.string(),
  current_score: z.number(),
  answering_time: z.number(),
  question: z.string(),
  answer: z.number(),
  correct_answer: z.number(),
  is_correct: z.boolean(),
  has_multiplication: z.boolean(),
  has_division: z.boolean(),
  steps: z.number(),
  user: z.string(),
});

export class CreateQuestionDTO extends createZodDto(Createquestionschema) {
  @ApiProperty()
  name: string;

  @ApiProperty()
  difficulty: string;

  @ApiProperty()
  current_score: number;

  @ApiProperty()
  answering_time: number;

  @ApiProperty()
  question: string;

  @ApiProperty()
  answer: number;

  @ApiProperty()
  correct_answer: number;

  @ApiProperty()
  is_correct: boolean;

  @ApiProperty()
  has_multiplication: boolean;

  @ApiProperty()
  has_division: boolean;

  @ApiProperty()
  steps: number;

  @ApiProperty()
  user: string;
}
