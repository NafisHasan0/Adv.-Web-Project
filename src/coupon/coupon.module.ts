import { Module } from '@nestjs/common';
import { CouponController } from './coupon.controller';
import { CouponService } from './coupon.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coupon } from './entities/coupon.entity';
import { CouponUsage } from './entities/coupon-usage.entity';

@Module({
  controllers: [CouponController],
  providers: [CouponService],
  imports: [TypeOrmModule.forFeature([CouponUsage, Coupon])],
})
export class CouponModule {}
