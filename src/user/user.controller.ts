import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from "@nestjs/common";
import { CreateUserDto } from "./dto/createUser.dto";
import { UpdateUserDto } from "./dto/updateUser.dto";
import { UpdatePartialUserDto } from "./dto/updatePartialUser.dto";

@Controller('users')
export class UserController {
    @Post()
    async create(@Body() payload:CreateUserDto) {
        return {payload}
    }

    @Get()
    async getAllUsers() {
        return {users:[]}
    }

    @Get(':id')
    async getUser(@Param('id') params) {
        return {user:{}}
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