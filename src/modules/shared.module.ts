import { Module } from '@nestjs/common';

import { HealthModule } from '@/modules/health/health.module';
import { UsersModule } from '@/modules/users/users.module';
import { AuthModule } from '@/modules/auth/auth.module';
import { questionsModule } from './questions/questions.module';
@Module({
  imports: [
    HealthModule,
    UsersModule,
    AuthModule,
    questionsModule,
  ],
  controllers: [],
  providers: [],
})
export class SharedModule {}
