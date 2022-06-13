import { Module } from '@nestjs/common';
import { PhonewordsController } from './phonewords.controller';
import { PhonewordsService } from './phonewords.service';

@Module({
  controllers: [PhonewordsController],
  providers: [PhonewordsService]
})
export class PhonewordsModule {}
