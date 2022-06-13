import { Test, TestingModule } from '@nestjs/testing';
import { PhonewordsService } from './phonewords.service';

describe('PhonewordsService', () => {
  let phonewordsService: PhonewordsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PhonewordsService],
    }).compile();

    phonewordsService = module.get<PhonewordsService>(PhonewordsService);
  });

  describe('isWordValid', () => {
    it('should return false', async () => {
      const params = ['*', '0', '1'];

      params.forEach(async param => {
        const result = await phonewordsService.isWordValid(param);
        expect(result).toEqual(false)
      });
    });

    it('should return true', async () => {
      const param = '345';

      const result = await phonewordsService.isWordValid(param);
      expect(result).toEqual(true)
    });
  })

  describe('generateWords', () => {
    const dataOne = ["cd","bd","ad","ce","be","ae","cf","bf","af"];
    const dataTwo = ["fg","eg","dg","fh","eh","dh","fi","ei","di"];

    it('should return dataOne', async () => {
      const param = '23';

      const result = await phonewordsService.generateWords(param);
      expect(result).toEqual(dataOne)
    });

    it('should return dataTwo', async () => {
      const param = '34';

      const result = await phonewordsService.generateWords(param);
      expect(result).toEqual(dataTwo)
    });
  })

});
