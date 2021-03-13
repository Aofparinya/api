import { Body, Controller, Get, Post, Query, Request, UseGuards } from '@nestjs/common';
import { Observable } from 'rxjs';
import { JwtAuthGuard } from 'src/auth/guards/jwt-guard';
import { JobEntry } from '../models/job-entry.interface';
import { JobService } from '../service/job.service';

@Controller('job')
export class JobController {

    constructor(private jobService: JobService) {}


    @UseGuards(JwtAuthGuard)
    @Post()
    create(@Body()jobEntry: JobEntry, @Request() req): Observable<JobEntry>  {
        const user = req.user.user;
        return this.jobService.create(user, jobEntry);
    }

    @Get()
    findJobEntries(@Query('userId') userId: number): Observable<JobEntry[]> {
        if(userId == null) {
            return this.jobService.findAll();
    } else { 
            return this.jobService.findByUser(userId);
    }

}
}

