import { IsDateString, IsEmail, IsOptional, IsString, IsStrongPassword, Length } from "class-validator"

export class CreateUserDto {
    @IsString()
    name:string

    @IsEmail()
    email:string

    @Length(4,10, {message:'A senha precisa ter no minimo 4 e no máximo 10 caracteres'})
    @IsStrongPassword({
        minLength:0,
        minNumbers:0,
        minUppercase:0,
        minSymbols:0,
        minLowercase:0
    })
    password:string

    @IsOptional()
    @IsDateString()
    birth:string
}

//Dto com validações de Length, e IsStrongPassword