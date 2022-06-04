import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Nexza</title>
        <meta name="description" content="Custom starter template for Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='flex flex flex-col justify-center items-center h-100vh'>
        <h1 className='font-serif text-5xl'> Nexza <span className='text-teal-600'>Starter Template</span></h1>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
