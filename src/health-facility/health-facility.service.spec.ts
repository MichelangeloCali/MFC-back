import { Test, TestingModule } from '@nestjs/testing';
import { HealthFacilityService } from './health-facility.service';

describe('HealthFacilityService', () => {
  let service: HealthFacilityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HealthFacilityService],
    }).compile();

    service = module.get<HealthFacilityService>(HealthFacilityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
