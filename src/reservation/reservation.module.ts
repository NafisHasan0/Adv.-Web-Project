import { Module } from '@nestjs/common';
import { ReservationController } from './reservation.controller';
import { ReservationService } from './reservation.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reservation } from './entities/reservation.entity';

@Module({
  controllers: [ReservationController],
  providers: [ReservationService],
  imports: [TypeOrmModule.forFeature([Reservation])],
})
export class ReservationModule {}
