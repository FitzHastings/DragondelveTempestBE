import { Module } from '@nestjs/common';
import { JwtStrategyService } from './jwt-strategy/jwt-strategy.service';
import { LocalStrategyService } from './local-strategy/local-strategy.service';

@Module({
  providers: [JwtStrategyService, LocalStrategyService]
})
export class AuthModule {}
