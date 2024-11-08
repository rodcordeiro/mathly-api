import { Module } from '@nestjs/common';

import { questionsController } from '@/modules/questions/controllers/questions.controller';
import { questionsService } from '@/modules/questions/services/questions.service';
import { questionsProviders } from './providers/questions.provider';

@Module({
  imports: [],
  controllers: [questionsController],
  providers: [...questionsProviders, questionsService],
  exports: [questionsService],
})
export class questionsModule {}
