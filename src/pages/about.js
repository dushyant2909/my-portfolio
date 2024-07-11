import AnimatedText from '@/components/AnimatedText'
import { HatIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import React from 'react'
import Hat from '../../public/images/hat.png'
import Image from 'next/image'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'

const about = () => {
    return (
        <main className='flex w-full flex-col items-center justify-center'>
            <Layout className='pt-1 pb-1'>
                <AnimatedText text={"Passion Fuels Purpose!"} className='text-7xl' />
                <div className='mt-10 flex justify-between'>
                    <div className='w-[47%]'>
                        <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>About Me</h2>
                        <p className='font-medium text-justify'>
                            - Hi, I'm Dushyant Bhutiyani! I'm a full-stack web developer with a strong passion for backend development.<br />
                            - I enjoy the challenge of building robust and scalable applications that power the functionality users see and interact with.
                        </p>
                    </div>
                    <div className='w-[48%] pl-2'>
                        <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 pl-3'>Education</h2>
                        <div className='flex'>
                            <Image src={Hat} className='w-8 h-8' />
                            <div className='font-medium text-justify'>
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