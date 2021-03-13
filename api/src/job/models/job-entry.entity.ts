import { UserEntity } from "src/user/models/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class JobEntryEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    job: string;

    @Column()
    slug: string

    @ManyToOne(type => UserEntity, user => user.jobEntries)
    author: UserEntity;


}