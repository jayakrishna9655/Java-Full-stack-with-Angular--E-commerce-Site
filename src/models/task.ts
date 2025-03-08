export interface Task {
    id?: number;
    OrderName: string;
    UserName: string;
    Password: string | number; // Can be either a string or number
    Email: string;
}
