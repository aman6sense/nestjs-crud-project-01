
import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {

    @IsNotEmpty({ message: "fname_empty" })
    readonly fname: string;

    @IsNotEmpty({ message: "fname_empty" })
    readonly lname: string;

    @IsNotEmpty({ message: "fname_empty" })
    readonly email: string;
}