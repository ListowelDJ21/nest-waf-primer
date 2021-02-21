import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Student {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    department: string;

    @Column({nullable: true})
    matriculationNumber: string;

    @Column()
    programOfStudy: string;

    @Column({default: new Date().getFullYear()})
    yearOfEntry: number;
  user: import("/Users/Mac/Listowel_ISM209_Codes/nest-waf-primer/src/student-registration/users/entities/user.entity").User;
}