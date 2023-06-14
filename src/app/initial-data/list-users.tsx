'use client';

import { User, getUsers } from '@/api/getUsers';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import React from 'react';

export default function ListUsers({ users }: { users: User[] }) {
    const { data, isLoading, isFetching, error } = useQuery(['initial-users'], getUsers, {
        initialData: users,
    });
    return (
        <>
            {error ? (
                <p>Oh no, there was an error</p>
            ) : isLoading || isFetching ? (
                <p>Loading...</p>
            ) : data ? (
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr 1fr 1fr',
                        gap: 20,
                    }}
                >
                    {data.map((user) => (
                        <div
                            key={user.id}
                            style={{ border: '1px solid #ccc', textAlign: 'center' }}
                        >
                            <Image
                                src={`https://robohash.org/${user.id}?set=set2&size=180x180`}
                                alt={user.name}
                                width={180}
                                height={180}
                            />
                            <h3>{user.name}</h3>
                        </div>
                    ))}
                </div>
            ) : null}
        </>
    );
}
