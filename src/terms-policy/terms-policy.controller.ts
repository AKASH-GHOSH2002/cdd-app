import { Controller, Get, Post, Body, Patch, Param, Delete ,Put} from '@nestjs/common';
import { TermsPolicyService } from './terms-policy.service';
import { TermsPolicy } from 'src/terms-policy/entities/terms-policy.entity';
import { UpdateTermsPolicyDto } from './dto/update-terms-policy.dto';
import { CreateTermsPolicyDto } from './dto/create-terms-policy.dto';

@Controller('terms-policy')
export class TermsPolicyController {
  constructor(private readonly termsPolicyService: TermsPolicyService) {}
  @Post()
  async createTermsPolicy(@Body() dto: CreateTermsPolicyDto) {
    return this.termsPolicyService.createTermsPolicy(dto);
  }

  @Get()
  async getTermsPolicy() {
    return this.termsPolicyService.getTermsPolicy();
  }

  @Put()
  async updateTermsPolicy(@Body() dto: UpdateTermsPolicyDto) {
    return this.termsPolicyService.updateTermsPolicy(dto);
  }
}
