import { JobEntry } from "src/job/models/job-entry.interface";

export interface User {
    id?: number;
    name?: string;
    username?: string;
    career?: string;
    email?: string;
    password?: string;
    role?: UserRole;
    jobEntries?: JobEntry;
   
}

export enum UserRole {
    ADMIN = 'admin',
    USER = 'user'
}



  