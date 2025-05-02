import { Module } from '@nestjs/common';
import { BookingController } from './booking.controller';
import { BookingService } from './booking.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Booking } from './entities/booking.entity';
import { Accounts } from './entities/accounts.entity';

@Module({
  controllers: [BookingController],
  providers: [BookingService],
  imports: [TypeOrmModule.forFeature([Accounts, Booking])],
})
export class BookingModule {}
