import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  describe('/phonewords', () => {
    it('gets phonewords suggestions with 23 param', async () => {
      const response = await request(app.getHttpServer())
        .get('/phonewords/23')
        .expect(200)

      const data = response.body
      expect(data.number).toEqual('23') 
    })
  })
});
