import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put } from "@nestjs/common";
import { CreateUserDto } from "./dto/createUser.dto";
import { UpdateUserDto } from "./dto/updateUser.dto";
import { UpdatePartialUserDto } from "./dto/updatePartialUser.dto";
import { UserService } from "./user.service";

@Controller('users')
export class UserController {
    constructor(private readonly userService:UserService) {}
    @Post()
    async create(@Body() payload: CreateUserDto) {
        return this.userService.create(payload)
    }
    
    @Get()
    async getAllUsers() {
        return this.userService.getAll()
    }

    @Get(':id')
    async getUser(@Param('id', ParseIntPipe) id:number) {
        return this.userService.getUserById(id)
    }

    @Put(':id')
    async update(@Body() { name, email, password }: UpdateUserDto, @Param('id') params) {
        return {
            method:'put',
            name, email, password,
            params
        }
    }

    @Patch(':id')
    async updatePartial(@Body() { name, email, password }:UpdatePartialUserDto, @Param('id') params) {
        return {}
    }

    @Delete(':id')
    async delete(@Param('id') id:number){
        return {}
    }
}