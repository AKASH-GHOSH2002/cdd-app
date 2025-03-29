import { Injectable } from '@nestjs/common';
import { CreateTermsPolicyDto } from './dto/create-terms-policy.dto';
import { UpdateTermsPolicyDto } from './dto/update-terms-policy.dto';

@Injectable()
export class TermsPolicyService {
  create(createTermsPolicyDto: CreateTermsPolicyDto) {
    return 'This action adds a new termsPolicy';
  }

  findAll() {
    return `This action returns all termsPolicy`;
  }

  findOne(id: number) {
    return `This action returns a #${id} termsPolicy`;
  }

  update(id: number, updateTermsPolicyDto: UpdateTermsPolicyDto) {
    return `This action updates a #${id} termsPolicy`;
  }

  remove(id: number) {
    return `This action removes a #${id} termsPolicy`;
  }
}
