import { User } from '@/app/types';
import { axiosInstance } from './fetchInstance';

async function getUsers() {
    const { data: res } = await axiosInstance.get('https://jsonplaceholder.typicode.com/users');

    return res as User[];
}
