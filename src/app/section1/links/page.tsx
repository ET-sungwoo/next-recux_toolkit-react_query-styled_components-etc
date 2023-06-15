import Link from 'next/link';

export default function Page() {
    // const router = useRouter();
    // 프리패치 하려면 개발자가 일일이 해줘야함
    // useEffect(() => {
    //     router.prefetch('/section1/getStaticProps');
    // }, [router]);

    return (
        <main>
            <h1>Links</h1>
            {/* Hook을 사용하여 페이지 이동 시 사용(Link 처럼 프리페치 가능) */}
            {/* <button
                onClick={() => {
                    router.push('/section1/getStaticProps');
                }}
            >
                /getStaticProps
            </button> */}
            {/* Next는 필요한 정보를 알아서 Lazy하게 가져옴을 보여주기 위한 부분 */}
            {/*<div style={{ height: '200vh' }} />*/}
            {/* CSR과 SSR의 장점을 결합. 자세한건 강의 다시보기 */}
            <Link href="/section1/static">Static Page</Link>
        </main>
    );
}
