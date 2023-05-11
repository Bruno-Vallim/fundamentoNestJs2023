import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateUserDto } from './dto/updateUser.dto';
import { UpdatePartialUserDto } from './dto/updatePartialUser.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateUserDto) {
    return this.prisma.user.create({
      data,
    });
  }

  async getAll() {
    return this.prisma.user.findMany();
  }

  async getUserById(id: number) {
    return this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id:number, {name, email, password, birth}:UpdateUserDto) {
    return this.prisma.user.update({
        data:{email, name, password, }
        where:{
            id
        }
    })
  }

  async updatePatch(id:number, data:UpdatePartialUserDto) {
    return this.prisma.user.update({
        data,
        where:{
            id
        }
    })
  }
}
