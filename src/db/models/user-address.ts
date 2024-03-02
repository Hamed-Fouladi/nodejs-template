import { Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import { IsNotEmpty } from "class-validator";

@Entity()
export class UserAddress {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  country: string;

  @Column()
  @IsNotEmpty()
  areaProvinceState: string;

  @Column()
  @IsNotEmpty()
  city: string;

  @Column()
  @IsNotEmpty()
  street: string;

  @Column()
  @IsNotEmpty()
  aptBuilding: string;
}
