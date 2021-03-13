import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import slugify from 'slugify';
import { User } from 'src/user/models/user.interface';
import { UserService } from 'src/user/service/user.service';
import { Repository } from 'typeorm';
import { JobEntryEntity } from '../models/job-entry.entity';
import { JobEntry } from '../models/job-entry.interface';


@Injectable()
export class JobService {
   
    constructor(
        @InjectRepository(JobEntryEntity) private readonly jobRepository: Repository<JobEntryEntity>,
        private userService: UserService
    ) {}

    create(user: User, jobEntry: JobEntry): Observable<JobEntry> {
        jobEntry.author = user;
        return this.generateSlug(jobEntry.title).pipe(
            switchMap((slug: string) => {
                jobEntry.slug = slug;
                return from(this.jobRepository.save(jobEntry));
            })
        )
    }

    findAll() : Observable<JobEntry[]>{
        return from(this.jobRepository.find({relations: ['author']}));
    }

    findByUser(userId: number): Observable<JobEntry[]> {
        return from(this.jobRepository.find({
            where: {
                author: userId
            },
            relations: ['author']
        })).pipe(map((jobEntries: JobEntryEntity[]) => jobEntries))
        
    }

    generateSlug(title: string): Observable<string> {
        return of(slugify(title));
    }


}
 