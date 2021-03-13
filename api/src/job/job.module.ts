import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { UserModule } from 'src/user/user.module';
import { JobEntryEntity } from './models/job-entry.entity';
import { JobController } from './controller/job.controller';
import { JobService } from './service/job.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([JobEntryEntity]),
        AuthModule,
        UserModule
    ],
    controllers: [JobController],
    providers: [JobService]
})
export class JobModule {}
