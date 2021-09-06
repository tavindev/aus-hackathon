import Head from 'next/head';
import { Header } from '../components/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>Hackathon</title>
      </Head>
      <div>
        <Header />
        <main></main>
        <footer></footer>
      </div>
    </>
  );
}
