'use client';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const InnerWidth = dynamic(() => import('./innerWidth'), { ssr: false });

export default function Page() {
    const [data, setData] = useState(0);

    useEffect(() => {
        const delayInSeconds = 2;
        new Promise<number>((resolve) =>
            setTimeout(() => resolve(Math.random()), delayInSeconds * 1000),
        ).then(setData);
    }, []);

    return (
        <main>
            <h1>Client-side data fetching</h1>
            <p>값: {data}</p>

            <h1>no SSR</h1>
            <InnerWidth />
        </main>
    );
}
