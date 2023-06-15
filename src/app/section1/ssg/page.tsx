// 빌드 타이밍에 데이터를 한 번만 가져오는 방법
export default function Page() {
    const data = getSSGProps();
    return (
        <main>
            <h1>getStaticProps Page</h1>
            <p>값: {data}</p>
        </main>
    );
}

const getSSGProps = async (): Promise<number> => {
    const delayInSeconds = 2;
    const data = (await new Promise((resolve) =>
        setTimeout(() => resolve(1), delayInSeconds * 1000),
    )) as number;
    return data;
};

// Hit : 캐시된 값(Fresh)
// Stale : 캐시된 값이지만, 새로운 값이 있음(Stale)
// Revalidate : 새로운 값으로 업데이트(max-age)
// 2초 Stale 5초 Hit
export const revalidate = 5;
