import { DataSource } from 'typeorm';
import { QuestionsEntity } from '../entities/questions.entity';

export const QuestionsProviders = [
  {
    provide: 'QUESTIONS_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(QuestionsEntity),
    inject: ['DATA_SOURCE'],
  },
];
