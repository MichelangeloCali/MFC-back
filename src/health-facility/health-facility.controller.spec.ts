import { Test, TestingModule } from '@nestjs/testing';
import { HealthFacilityController } from './health-facility.controller';
import { HealthFacilityService } from './health-facility.service';

describe('HealthFacilityController', () => {
  let controller: HealthFacilityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HealthFacilityController],
      providers: [HealthFacilityService],
    }).compile();

    controller = module.get<HealthFacilityController>(HealthFacilityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
