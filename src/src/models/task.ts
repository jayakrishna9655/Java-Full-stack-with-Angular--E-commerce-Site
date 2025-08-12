export interface Task {
    id?: number;
    OrderName: string;
    UserName: string;
    Password: string | number; // it can be string or number
    Email: string;
}
