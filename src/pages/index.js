import Layout from '@/components/Layout'
import Image from 'next/image'
// import profilePic from '../../public/images/profile/dushyant-remove-bg.png'
import profilePic from '../../public/images/profile/img-4.png'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import HireMe from '@/components/HireMe'
import lightBulb from '../../public/images/svgs/miscellaneous_icons_1.svg'

export default function Home() {
  return (
    <>
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className='pt-[90px] xs:pt-0 pb-20 px-[5rem] sm:pt-16'>
          {/* <Layout className='pt-0 md:pt-16 sm:pt-8 pb-2'> */}
          <div className='flex items-center justify-between w-full lg:flex-col'>
            <div className='w-1/2 lg:hidden md:flex md:w-full flex items-center justify-center'>
              <Image src={profilePic} alt='Dushyant Bhutiyani' className='w-[60%] md:w-3/4 h-auto lg:hidden md:inline-block' priority
                sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw" />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
              <AnimatedText text={"Turning Vision Into Reality Through Code"} className='!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl' />
              <p className='my-4 text-base font-medium md:text-sm sm:text-xs text-justify pr-10 md:pr-0'>As a dedicated full-stack web developer, I specialize in turning innovative ideas into functional and engaging web applications.<br /> Explore my latest projects and articles that showcase my expertise in web development.</p>
              <div className='flex items-center self-start mt-2 md:mt-4 lg:self-center'>
                <Link href={'/dummy.pdf'} target='_blank'
                  className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                border border-solid border-transparent hover:dark:bg-dark hover:dark:text-light hover:dark:border-light hover:border-dark dark:text-dark dark:bg-light md:px-4 md:text-base'
                  download={true}>Resume <LinkArrow className={'w-6 ml-1'} /></Link>
                <Link href={'mailto:dushyantb2003@gmail.com'}
                  className='ml-4 texxt-lg font-medium capitalize text-dark underline md:text-base dark:text-green-500'>Contact</Link>
              </div>
            </div>
          </div>
        </Layout>

        <HireMe />
        <div className='absolute right-8 bottom-8 inline-block w-20 md:hidden'>
          <Image src={lightBulb} alt='Bulb image' className='w-full h-auto' />
        </div>
      </main>
    </>
  )
}
