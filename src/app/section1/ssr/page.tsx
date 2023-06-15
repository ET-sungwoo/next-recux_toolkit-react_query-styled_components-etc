// ssr은 빌드타임에 렌더 되는것이 아닌 request마다 렌더 되는것이다. - 배포환경에서만 확인 가능

// 13.4여서 그런지 차이점을 모르겠음...
export default function Page() {
    const data = getSSRProps();
    return (
        <main>
            <h1>getServerSideProps Page</h1>
            <p>값: {data}</p>
        </main>
    );
}

const getSSRProps = async (): Promise<number> => {
    const delayInSeconds = 2;
    const data = (await new Promise((resolve) =>
        setTimeout(() => resolve(Math.random()), delayInSeconds * 1000),
    )) as number;
    return data;
};
