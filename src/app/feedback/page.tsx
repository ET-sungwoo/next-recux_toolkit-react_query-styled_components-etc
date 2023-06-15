'use client';

import Header from '@/components/common/Header';

export default function Page() {
    const onClickHandler = () => {
        alert('클릭');
    };
    return (
        <>
            <Header />
            <main></main>
        </>
    );
}
