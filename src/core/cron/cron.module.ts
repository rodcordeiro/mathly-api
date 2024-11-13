import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';

import { RabbitModule } from '../rabbitmq/rabbitmq.module';

import { UncategorizedService } from './services/uncategorized.services';

@Module({
  imports: [ScheduleModule.forRoot(), RabbitModule],
  providers: [UncategorizedService],
})
export class CronModule {}
