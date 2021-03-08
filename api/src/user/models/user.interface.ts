
export interface User { 

    id?: number;
    name?: string;
    username?: string;
    career?: string;
    email?: string;
    password?: string;
    role?: UserRole;
}

export enum UserRole {
    ADMIN = 'admin',
    USER = 'user'
}