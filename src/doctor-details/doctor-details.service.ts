import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDoctorDetailDto } from './dto/create-doctor-detail.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { DoctorDetail } from 'src/doctor-details/entities/doctor-detail.entity';
import { UpdateDoctorDetailDto } from './dto/update-doctor-detail.dto';

@Injectable()
export class DoctorDetailsService {
constructor(
  @InjectRepository (DoctorDetail) private readonly DoctorRepo:Repository<DoctorDetail>,
){}



async getdoctorById(accountId: string, doctorId: string, ) {
  const DoctorDetail = await this.DoctorRepo.createQueryBuilder('doctorDetail')
    .where('doctorDetail.id = :id', { id: doctorId })
    .getOne();
  return DoctorDetail;
}

async updateSchool(accountId: string, doctorId: string, Dto:UpdateDoctorDetailDto, ) {
  await this.getdoctorById(accountId, doctorId, );
  await this.DoctorRepo.createQueryBuilder()
    .update(DoctorDetail)
    .set(Dto)
    .where('id = :id', { id: doctorId })
    .execute();
  return this.getdoctorById(accountId, doctorId, );
}



   async profileImage(image: string, result: DoctorDetail) {
    const obj = Object.assign(result, {
      profile: process.env.PORT + image,
      profileName: image,
    });
    return this.DoctorRepo.save(obj);
  }



  async findCompany(id: string) {
        const result = await this.DoctorRepo
          .createQueryBuilder('DoctorDetail')
          .where('doctorDetail.accountId = :accountId', { accountId: id })
          .getOne();
        if (!result) {
          throw new NotFoundException('Company not found!');
        }
        return result;
      }
}
