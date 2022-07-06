import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './httpApi/app.controllerntroller';
import { CommodityService } from './application/commodity.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
        controllers: [AppController],
        providers: [CommodityService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
