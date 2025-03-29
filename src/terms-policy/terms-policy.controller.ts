import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TermsPolicyService } from './terms-policy.service';
import { CreateTermsPolicyDto } from './dto/create-terms-policy.dto';
import { UpdateTermsPolicyDto } from './dto/update-terms-policy.dto';

@Controller('terms-policy')
export class TermsPolicyController {
  constructor(private readonly termsPolicyService: TermsPolicyService) {}

  @Post()
  create(@Body() createTermsPolicyDto: CreateTermsPolicyDto) {
    return this.termsPolicyService.create(createTermsPolicyDto);
  }

  @Get()
  findAll() {
    return this.termsPolicyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.termsPolicyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTermsPolicyDto: UpdateTermsPolicyDto) {
    return this.termsPolicyService.update(+id, updateTermsPolicyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.termsPolicyService.remove(+id);
  }
}
