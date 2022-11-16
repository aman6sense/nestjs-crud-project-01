
import { Exclude } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';

export class UpdateUserDto {

    @IsNotEmpty({ message: "fname_empty" })
    readonly fname: string;

    @IsNotEmpty({ message: "fname_empty" })
    readonly lname: string;

    // @IsNotEmpty({ message: "fname_empty" })
    // @Exclude()
    // readonly email: string;
}