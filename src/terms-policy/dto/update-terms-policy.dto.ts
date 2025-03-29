import { PartialType } from '@nestjs/swagger';
import { CreateTermsPolicyDto } from './create-terms-policy.dto';

export class UpdateTermsPolicyDto extends PartialType(CreateTermsPolicyDto) {}
