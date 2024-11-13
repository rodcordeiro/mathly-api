import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { BaseService } from '@/common/services/base.service';

import { QuestionsEntity } from '@/modules/questions/entities/questions.entity';

@Injectable()
export class QuestionsService extends BaseService {
  override repository = this._repository;
  constructor(
    @Inject('QUESTIONS_REPOSITORY')
    private _repository: Repository<QuestionsEntity>,
  ) {
    super();
  }
}
