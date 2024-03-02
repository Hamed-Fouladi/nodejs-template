// user.entity.ts

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { IsNotEmpty, IsEmail, IsPhoneNumber, Matches } from "class-validator";
import { Transform } from "class-transformer";
import { UserAddress } from "./user-address";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  @Matches(/^[A-Za-zА-Яа-я]+$/, {
    message: "First name must contain only letters",
  })
  firstName: string;

  @Column()
  @IsNotEmpty()
  @Matches(/^[A-Za-zА-Яа-я]+$/, {
    message: "Last name must contain only letters",
  })
  lastName: string;

  @Column()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Column()
  @IsNotEmpty()
  @IsPhoneNumber("UA", { message: "Invalid Ukrainian phone number" })
  @Matches(/^(\+380)\d{9}$/, {
    message: "Phone number must start with +380 and have 9 digits",
  })
  @Transform(({ value }) => value.replace(/[^\d+]/g, "")) // Remove non-digit characters
  phone: string;

  @Column()
  @IsNotEmpty()
  photo: string;

  @OneToOne(() => UserAddress)
  @JoinColumn()
  address: UserAddress;
}
