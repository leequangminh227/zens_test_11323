import { Test, TestingModule } from '@nestjs/testing';
import { JokesController } from './jokes.controller';
import { JokesService } from './jokes.service';

describe('JokesController', () => {
  let controller: JokesController;
  let provider: JokesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JokesController],
      providers: [JokesService],
    }).compile();

    controller = module.get<JokesController>(JokesController);
    provider = module.get<JokesService>(JokesService);
  });
  describe('Initial', () => {
    it('controller should be defined', () => {
      expect(controller).toBeDefined();
    });
    it('provider should be defined', () => {
      expect(provider).toBeDefined();
    });
  });

  describe('Get all jokes', () => {
    it('should get array of jokes', async () => {
      expect(controller.getAll()).toHaveLength(4);
    });
  });

  describe('Get one joke by id', () => {
    it('should get joke with passed id', async () => {
      expect(controller.getOne(1)).toHaveProperty('id', 1);
    });
    it('should get nothing', async () => {
      expect(controller.getOne(5)).toBeNull;
    });
  });

  describe('Get new joke that is not reacted', () => {
    it('should get a new joke', async () => {
      expect(controller.getNew([1, 3])).toHaveProperty('id', 2);
    });
    it('should get nothing', async () => {
      expect(controller.getNew([1, 2, 3, 4])).toBeNull;
    });
  });

  describe('React to a joke', () => {
    it('should get the right joke id', async () => {
      expect(controller.reactJoke(1, 'true')).toHaveProperty('id', 1);
    });
    it('should successfuly increase reaction count', async () => {
      expect(controller.reactJoke(1, 'true')).toHaveProperty('like', 1);
    });
  });
});
