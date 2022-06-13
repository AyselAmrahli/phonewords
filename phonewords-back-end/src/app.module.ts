import { Module } from '@nestjs/common';
import { PhonewordsModule } from './phonewords/phonewords.module';

@Module({
  imports: [PhonewordsModule],
})
export class AppModule {}
