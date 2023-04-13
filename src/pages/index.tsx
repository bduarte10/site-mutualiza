import { About } from '@/components/About';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Mutualiza - Engenharia e Consultoria Ambiental</title>
      </Head>
      <Hero />
      <About />
      <Services />
    </>
  );
}
