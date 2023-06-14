import { getUsers } from '@/api/getUsers';
import ListUsers from './list-users';
import Button from '../Components/Button';

export default async function InitialData() {
    const users = await getUsers();

    return (
        <main style={{ maxWidth: 1200, marginInline: 'auto', padding: 20 }}>
            <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
                <Button />
            </div>
            <ListUsers users={users} />;
        </main>
    );
}
