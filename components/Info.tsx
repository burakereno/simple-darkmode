import Image from 'next/image'
import Link from 'next/link'
import { InstagramLogo, TwitterLogo, FigmaLogo, DribbbleLogo } from "phosphor-react";

export default function Info() {
  return (
    <>
      <section className='space-y-4 flex flex-col items-center justify-center content-center mt-6 text-zinc-900 dark:text-zinc-100  border-zinc-400 py-6 px-8 rounded-lg'>

        <div>
          <Link className='hover:opacity-50' href={"https://burakerenoglu.com"} target={"_blank"}>
            burakerenoglu.com
          </Link>
        </div>

        <div className='flex flex-row space-x-6'>
          <Link className='hover:opacity-50' target={"_blank"} href='https://www.instagram.com/burakereno/' >
            <InstagramLogo size={24} weight="regular" color="currentcolor" />
          </Link>
          <Link className='hover:opacity-50' target={"_blank"} href='https://twitter.com/burakerenoglu' >
            <TwitterLogo size={24} weight="regular" color="currentcolor" />
          </Link>
          <Link className='hover:opacity-50' target={"_blank"} href='https://dribbble.com/burakereno' >
            <DribbbleLogo size={24} weight="regular" color="currentcolor" />
          </Link>
          <Link className='hover:opacity-50' target={"_blank"} href='https://www.figma.com/@burakereno' >
            <FigmaLogo size={24} weight="regular" color="currentcolor" />
          </Link>
          <Link className='hover:opacity-50' target={"_blank"} href='https://github.com/burakereno' >
            <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" fill-rule="evenodd"></path></svg>
          </Link>

        </div>

        <Link href={"https://www.buymeacoffee.com/burakereno"}>
          <div className="w-[153px] pt-3">
            <Image
              className=' '
              src="/bmc-button.png"
              alt=""
              width={545}
              height={153}
              quality={100}
            />
          </div>
        </Link>
      </section>
    </>
  )
}