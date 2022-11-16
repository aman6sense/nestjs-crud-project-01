import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/CreateUserDto';
import { UpdateUserDto } from './dto/UpdateUserDto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post()
    async create(@Body() createUserDto: CreateUserDto) {
        return await this.userService.create(createUserDto);
    }

    @Get()
    async getUsers() {

        return await this.userService.getUsers();
    }
    @Get('/:id')
    async getUserById(@Param("id") id: string) {

        return await this.userService.getuserById(id);
    }

    @Delete('/:id')
    async deleteUser(@Param('id') id: string) {
        await this.userService.deleteUser(id);
    }
    @Patch('/:id')
    async updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {

        return await this.userService.updateUser(id, updateUserDto);
    }

}



