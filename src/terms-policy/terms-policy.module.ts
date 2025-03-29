import { Module } from '@nestjs/common';
import { TermsPolicyService } from './terms-policy.service';
import { TermsPolicyController } from './terms-policy.controller';

@Module({
  controllers: [TermsPolicyController],
  providers: [TermsPolicyService],
})
export class TermsPolicyModule {}
