import { useRouter } from "next/router"
import Head from 'next/head'
import { Button } from "@mui/material"

const Name = () => {
    const router = useRouter()
    const { name } = router.query

    return (
        <div>
            <Head>
                <title>Hello {name}</title>
                <meta name="description" content="Custom starter template for Next.js" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className='flex flex-col justify-center items-center h-80vh text-center'>
                <div className='grid grid-cols-12 gap-4'>
                    <h1 className='font-serif text-5xl col-span-12'> Hallo <span className='text-teal-600'>{name}</span></h1>
                </div>
                <Button className="bg-teal-600 hover:bg-teal-700 mt-6" variant="contained" onClick={router.back}>Back</Button>
            </main>
        </div>
    )
}

export default Name