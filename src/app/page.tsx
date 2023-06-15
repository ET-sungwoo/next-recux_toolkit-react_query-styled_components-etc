'use client';
import Header from '@/components/common/Header';
import styles from '@/styles/header.module.scss';
import { AiOutlineShareAlt } from 'react-icons/ai';
import { VscFeedback } from 'react-icons/vsc';
import Link from 'next/link';

export default function Home() {
    return (
        <>
            <Header
                rightElements={[
                    <button
                        key="copy"
                        onClick={() => {
                            alert('클릭');
                        }}
                        className={styles.box}
                        style={{ marginRight: '8px' }}
                    >
                        <AiOutlineShareAlt />
                        복사
                    </button>,
                    <Link href="/feedback" key="feedback" className={styles.box}>
                        <VscFeedback />
                        피드백
                    </Link>,
                ]}
            />
        </>
    );
}
