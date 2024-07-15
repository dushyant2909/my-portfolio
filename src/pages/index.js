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
      <main className="flex items-center text-dark w-full min-h-screen border-b-black border-b-8 dark:text-light">
        {/* <Layout className='pt-[68px] pb-2 px-[6rem]'> */}
        <Layout className='pt-0 md:pt-16 sm:pt-8 pb-2'>
          <div className='flex items-center justify-between w-full lg:flex-col'>
            <div className='md:w-full'>
              <Image src={profilePic} alt='Dushyant Bhutiyani' className='w-full h-auto lg:hidden md:inline-block md:full' priority
                sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw" />
            </div>
            <div className='w-[55%] flex flex-col items-center self-center lg:w-full lg:text-center'>
              <AnimatedText text={"Turning Vision Into Reality Through Code."} className='!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl' />
              <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>As a dedicated full-stack web developer, I specialize in turning innovative ideas into functional and engaging web applications.<br /> Explore my latest projects and articles that showcase my expertise in web development.</p>
              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link href={'/dummy.pdf'} target='_blank'
                  className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                border border-solid border-transparent hover:dark:bg-dark hover:dark:text-light hover:dark:border-light hover:border-dark dark:text-dark dark:bg-light md:px-4 md:text-base'
                  download={true}>Resume <LinkArrow className={'w-6 ml-1'} /></Link>
                <Link href={'mailto:dushyantb2003@gmail.com'}
                  className='ml-4 texxt-lg font-medium capitalize text-dark underline dark:text-light md:text-base'>Contact</Link>
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
