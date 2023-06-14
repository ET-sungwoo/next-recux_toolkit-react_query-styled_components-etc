import getQueryClient from '@/lib/react-query/getQueryClient';
import Hydrate from '@/lib/react-query/hydrate.client';
import { dehydrate } from '@tanstack/query-core';
import ListUsers from './list-users';
import { getUsers } from '@/api/getUsers';

export default async function Hydation() {
    const queryClient = getQueryClient();
    await queryClient.prefetchQuery(['hydrate-users'], getUsers);
    const dehydratedState = dehydrate(queryClient);

    return (
        <Hydrate state={dehydratedState}>
            <ListUsers />
        </Hydrate>
    );
}
