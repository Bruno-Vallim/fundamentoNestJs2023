import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { PrimaModule } from "src/prisma/prisma.module";

@Module({
    imports:[PrimaModule],
    controllers:[UserController],
    providers:[UserService],
    exports:[]
})
export class UserModule {}