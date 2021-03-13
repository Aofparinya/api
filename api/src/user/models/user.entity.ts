

import { JobEntryEntity } from "src/job/models/job-entry.entity";
import { BeforeInsert, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UserRole } from "./user.interface";

@Entity()
export class UserEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ unique:true })
    username: string;

    @Column()
    career: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column({type: 'enum' , enum: UserRole, default: UserRole.USER})
    role: UserRole;

    @OneToMany(type => JobEntryEntity, jobEntryEntity => jobEntryEntity.author)
    jobEntries: JobEntryEntity;

    @BeforeInsert()
    emailToLowerCase() {
        this.email = this.email.toLowerCase() ;
    }


}