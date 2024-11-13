import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

import { RabbitMQService } from '@/core/rabbitmq/services/rabbitmq.service';

/**
 * **Uncategorized**
 * List all transactions that received the inbound categories and are pending categorization
 */
@Injectable()
export class UncategorizedService {
  private readonly _logger = new Logger(UncategorizedService.name);

  constructor(private readonly _rabbitService: RabbitMQService) {
    this._logger.log('UncategorizedService Initialized');
  }

  // @Cron('0/30 * * * * *')
  @Cron('0 0 0 * * *')
  async notifyUncategorized() {
    this._logger.verbose('Starting Uncategorized service');

    this._rabbitService.sendMessage('mathly', {
      type: 'notification',
      title: 'Uncategorized Transactions',
      description: `x transactions pending categorization.`,
    });
  }
}
