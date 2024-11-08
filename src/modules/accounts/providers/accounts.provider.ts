import { DataSource } from 'typeorm';
import { questionsEntity } from '../entities/questions.entity';

export const questionsProviders = [
  {
    provide: 'questions_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(questionsEntity),
    inject: ['DATA_SOURCE'],
  },
];
