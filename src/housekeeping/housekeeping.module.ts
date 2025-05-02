import { Module } from '@nestjs/common';
import { HousekeepingController } from './housekeeping.controller';
import { HousekeepingService } from './housekeeping.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HousekeepingHistory } from './entities/housekeeping-history.entity';

@Module({
  controllers: [HousekeepingController],
  providers: [HousekeepingService],
  imports: [TypeOrmModule.forFeature([HousekeepingHistory])],
})
export class HousekeepingModule {}
