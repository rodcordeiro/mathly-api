import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { BaseService } from '@/common/services/base.service';

import { questionsEntity } from '@/modules/questions/entities/questions.entity';

@Injectable()
export class questionsService extends BaseService {
  override repository = this._repository;
  constructor(
    @Inject('questions_REPOSITORY')
    private _repository: Repository<questionsEntity>,
  ) {
    super();
  }
}
