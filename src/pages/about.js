import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import React from 'react'
import Hat from '../../public/images/hat.png'
import whiteHat from "../../public/images/whiteHat.png"
import Image from 'next/image'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'

const about = () => {
    return (
        <main className='flex w-full flex-col items-center justify-center dark:text-light'>
            {/* <Layout className='pt-1 pb-1'> */}
            <Layout className='pt-16'>
                <AnimatedText text={"Passion Fuels Purpose!"} className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 ' />
                <div className='mt-10 flex justify-between'>
                    <div className='w-[47%]'>
                        <h2 className='mb-4 text-xl font-bold uppercase text-dark/85 dark:text-light'>About Me</h2>
                        <p className='font-medium text-justify'>
                            - Hi, I'm Dushyant Bhutiyani! I'm a full-stack web developer with a strong passion for backend development.<br />
                            - I enjoy the challenge of building robust and scalable applications that power the functionality users see and interact with.
                        </p>
                    </div>
                    <div className='w-[48%] pl-2'>
                        <h2 className='mb-4 text-xl font-bold uppercase text-dark/85 dark:text-light pl-3'>Education</h2>
                        <div className='flex'>
                            <span className='hidden dark:block'>-</span>
                            <Image src={Hat} className='w-8 h-8 dark:hidden' />
                            <div className='font-medium text-justify ml-1'>
                                <p>Madhav Institute of Technology & Science, Gwalior (M.P.)<br />
                                    Bachelor of Technology (B.Tech)<br />
                                    Information Technology<br />
                                    CGPA: 9.02 (till VI<sup>th</sup> Semester)</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Skills />
                <Experience />
            </Layout>
        </main>
    )
}

export default about