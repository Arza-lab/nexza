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

      <main className='flex flex-col justify-center items-center h-80vh text-center'>
        <div className='grid grid-cols-12 gap-4'>
        <h1 className='font-serif text-5xl col-span-12'> Nexza <span className='text-teal-600'>Starter Template</span></h1>
        <p className='font-serif text-xl col-span-12'> A custom starter template for Next.js</p>
        </div>
      </main>
    </div>
  )
}

export default Home
