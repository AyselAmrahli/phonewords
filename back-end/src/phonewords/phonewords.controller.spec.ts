import { BadRequestException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { PhonewordsController } from './phonewords.controller';
import { PhonewordsService } from './phonewords.service';

describe('PhonewordsController', () => {
  let phonewordController: PhonewordsController;
  let phonewordsService: PhonewordsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PhonewordsController],
      providers: [PhonewordsService],
    }).compile();

    phonewordController = module.get<PhonewordsController>(PhonewordsController);
    phonewordsService = module.get<PhonewordsService>(PhonewordsService);
  });

  describe('getPhonewords', () => {
    it('should throw an error', async () => {
      const param = '*';

      try {
        await phonewordController.getPhonewords(param)
      } catch (e) {
        expect(e).toBeInstanceOf(BadRequestException);
        expect(e.message).toBe('Invalid number');
      }
    });

    it('should return valid data according to param 23', async () => {
      const param = '23';

      const result = await phonewordController.getPhonewords(param);
      expect(result.number).toEqual(param)
      expect(result.words).toEqual([
        "cd",
        "bd",
        "ad",
        "ce",
        "be",
        "ae",
        "cf",
        "bf",
        "af"
      ])
    });

  })
});
