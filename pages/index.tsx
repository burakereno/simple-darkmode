import Head from 'next/head'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import DarkMode from '@/components/DarkMode'
import Info from '@/components/Info'
import { ArrowRight, ArrowUp, InstagramLogo, TwitterLogo, FigmaLogo, DribbbleLogo } from "phosphor-react";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Simple Darkmode</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-zinc-100 dark:bg-zinc-900 h-screen w-screen flex flex-col items-center justify-center content-center text-zinc-900 dark:text-zinc-100 px-8'>
        <section className=' border-zinc-600 flex flex-col items-center justify-center content-center text-center'>

          <div className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-purple-300 to-indigo-400'>
            Simple Darkmode
          </div>
          <div>
            A very simple darkmode example with Next.js and Tailwindcss.
          </div>

          <div className='flex flex-col items-center justify-center content-center mt-10 mb-10'>
            <DarkMode />
            <ArrowUp className="relative inline-flex w-4 h-4 self-center mt-3" color='currentcolor' weight="duotone" />
            <div className='text-xs'>
              You can try
            </div>
          </div>

          <Link href={"https://github.com/burakereno/simple-darkmode"}>
            <button className='px-3 py-1 border rounded space-x-2 flex items-center justify-center self-center content-center
            dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-900
            border-zinc-900 bg-zinc-900 text-zinc-100
            hover:bg-zinc-100 hover:text-zinc-900 hover:border-zinc-900
            hover:dark:bg-zinc-900 hover:dark:text-zinc-100 hover:dark:border-zinc-100
            '>
              <span className=''>View repo on
                <span className='font-bold'> Github</span>
              </span>
              <span className='items-center justify-center content-center flex'>
                <ArrowRight className="relative inline-flex w-3 h-3 self-center my-auto justify-center" color='currentcolor' weight="bold" />
              </span>
            </button>
          </Link>
        </section>

        <Info />
      </main>
    </>
  )
}
