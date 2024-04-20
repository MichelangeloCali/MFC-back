import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { HealthFacilityModule } from './health-facility/health-facility.module';

@Module({
  imports: [HealthFacilityModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
