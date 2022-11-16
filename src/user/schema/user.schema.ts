
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Status } from '../model/user.status.enum';
import { Type } from '../model/user.type.enum';



export type UserDocument = User & Document;

@Schema({ timestamps: true })

export class User {

    @Prop({ type: String, required: [true, "First name is required"] })
    fname: string;

    @Prop({ type: String, required: [true, "Last Name is required"] })
    lname: string;

    @Prop({ type: String, required: [true, "Email is required"] })
    email: string;

    @Prop({ type: String, default: '' })
    password: string;

    @Prop({ type: String, enum: [Type.USER] })
    type: Type;

    @Prop({ type: String, enum: [Status.ACTIVE] })
    status: Status;





}

export const UserSchema = SchemaFactory.createForClass(User);


