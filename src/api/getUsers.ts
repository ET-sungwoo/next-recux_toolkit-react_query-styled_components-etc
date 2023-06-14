import { getFetcher } from './fetchInstance';

export interface User {
    id: number;
    name: string;
    email: string;
}

export async function getUsers() {
    const res = await getFetcher('https://jsonplaceholder.typicode.com/users');

    return res as User[];
}
