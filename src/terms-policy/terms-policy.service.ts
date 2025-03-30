import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateTermsPolicyDto } from './dto/update-terms-policy.dto';
import { CreateTermsPolicyDto } from './dto/create-terms-policy.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TermsPolicy } from './entities/terms-policy.entity';
import { Repository } from 'typeorm';
@Injectable()
export class TermsPolicyService {
  constructor( 
    @InjectRepository(TermsPolicy)
    private  readonly termsPolicyRepository: Repository<TermsPolicy>,

  ){}
  async createTermsPolicy(dto: UpdateTermsPolicyDto): Promise<TermsPolicy> {
    const termsPolicy = this.termsPolicyRepository.create(dto);
    return this.termsPolicyRepository.save(termsPolicy);
  }

  
  async getTermsPolicy(): Promise<TermsPolicy> {
    const termsPolicy = await this.termsPolicyRepository.findOne({ where: {} });
    if (!termsPolicy) {
      throw new NotFoundException('Terms & Policy not found');
    }
    return termsPolicy;
  }

  async updateTermsPolicy(dto: UpdateTermsPolicyDto): Promise<TermsPolicy> {
    let termsPolicy = await this.termsPolicyRepository.findOne({ where: {} });
    if (!termsPolicy) {
      termsPolicy = this.termsPolicyRepository.create(dto);
    } else {
      termsPolicy.terms = dto.terms;
      termsPolicy.privacy_policy = dto.privacy_policy;
    }
    return this.termsPolicyRepository.save(termsPolicy);
  }
}
