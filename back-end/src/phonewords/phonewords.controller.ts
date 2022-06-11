import { BadRequestException, Controller, Get, Param } from '@nestjs/common';

import { PhonewordsService } from './phonewords.service';
import { NumberRefers } from './phonewords.interface';

@Controller('phonewords')
export class PhonewordsController {

  constructor(private phonewordsService: PhonewordsService) {}

  @Get(':num')
  async getPhonewords(@Param('num') num: string): Promise<NumberRefers> {
    if (!this.phonewordsService.isWordValid(num)) throw new BadRequestException('Invalid number')
    const words = await this.phonewordsService.generateWords(num);
    return {
      name: 'phonewords',
      number: num,
      words
    }
  }
}
