import Head from "next/head";
import HomeContainer from "../components/Home";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Rahul Kushwaha</title>
        <meta
          name="description"
          content="rahul kushwaha portfolio and profile"
        />
        <link rel="icon" href="/favicon.ico" />
        <HomeContainer />
      </Head>
    </div>
  );
}
