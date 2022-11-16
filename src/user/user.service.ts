import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { Model } from "mongoose";
import { CreateUserDto } from './dto/CreateUserDto';
import { UpdateUserDto } from './dto/UpdateUserDto';
import { Status } from './model/user.status.enum';
import { Type } from './model/user.type.enum';
import { User, UserDocument } from './schema/user.schema';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) { }



    async create(createUserDto: CreateUserDto) {


        const saltOrRounds = 10;
        const password = 'random_password';
        const hash = await bcrypt.hash(password, saltOrRounds);


        const user = {
            fname: createUserDto.fname ? createUserDto.fname : "",
            lname: createUserDto.lname ? createUserDto.lname : "",
            email: createUserDto.email ? createUserDto.email : "",
            password: hash,
            type: Type.USER,
            status: Status.ACTIVE,
        }

        const createUser = this.userModel.create(user);

        return createUser;
    }

    async getUsers() {
        return this.userModel.find({});
    }
    async getuserById(id: string) {
        return this.userModel.findById(id);
    }
    async deleteUser(id: string) {
        return this.userModel.deleteOne({ _id: id });
    }
    async updateUser(id: string, updateUserDto: UpdateUserDto) {

        let updatedDoc = { ...updateUserDto };
        delete updatedDoc['email'];

        const updateUser = await this.userModel.findByIdAndUpdate({ _id: id }, updatedDoc, { new: true })

        if (!updateUser) {
            throw new NotFoundException();
        }

        return updateUser;
    }
}






