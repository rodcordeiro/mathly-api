import { Module } from '@nestjs/common';

import { QuestionsController } from '@/modules/questions/controllers/questions.controller';
import { QuestionsService } from '@/modules/questions/services/questions.service';
import { QuestionsProviders } from './providers/questions.provider';

@Module({
  imports: [],
  controllers: [QuestionsController],
  providers: [...QuestionsProviders, QuestionsService],
  exports: [QuestionsService],
})
export class QuestionsModule {}
