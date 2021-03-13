import { User } from "src/user/models/user.interface";

export interface JobEntry {
    id?: number;
    title?: string;
    job?: string;
    slug?: string
    author?: User;
}