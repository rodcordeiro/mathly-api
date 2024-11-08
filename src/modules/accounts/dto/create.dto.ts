import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';
import { ApiProperty } from '@nestjs/swagger';

const Createquestionschema = z.object({
  name: z.string(),
  ammount: z.number(),
  paymentType: z.string(),
  threshold: z.number(),
});

export class CreateAccountDTO extends createZodDto(Createquestionschema) {
  /** Account name */
  @ApiProperty()
  name: string;

  /** Account ammount */
  @ApiProperty()
  ammount: number;

  /** Account payment type */
  @ApiProperty()
  paymentType: string;

  /** Account limit threshold */
  @ApiProperty()
  threshold: number;
}
