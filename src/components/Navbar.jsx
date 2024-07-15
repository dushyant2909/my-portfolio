import Link from 'next/link'
import React, { useState } from 'react'
import Logo from './Logo'
import { useRouter } from 'next/router'
import LeetcodeIcon, { GithubIcon, LinkedInIcon, MoonIcon, SunIcon, TwitterIcon } from './Icons'
import { motion } from 'framer-motion'
import useThemeSwitcher from './hooks/useThemeSwitcher'

const CustomLink = ({ href, title, className = "" }) => {
    const router = useRouter();
    return (
        <Link href={href}
            className={`${className} relative group font-medium`}>
            {title}
            <span className={`h-[1.5px] inline-block w-0 bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? "w-full" : "w-0"} dark:bg-light`}>&nbsp;</span>
        </Link>
    )
}


const CustomMobileLink = ({ href, title, className = "", toggle }) => {
    const router = useRouter();

    const handleClick = () => {
        toggle();
        router.push(href)
    }

    return (
        <button href={href} className={`${className} relative group text-light dark:text-dark my-2`}
            onClick={handleClick}>
            {title}
            <span className={`h-[1.5px] inline-block w-0 bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? "w-full" : "w-0"} dark:bg-dark`}>
                &nbsp;
            </span>
        </button>
    )
}


const Navbar = () => {

    const [mode, setMode] = useThemeSwitcher();
    const [isOpen, setisOpen] = useState(false)

    const handleCLick = () => {
        setisOpen(!isOpen)
    }

    return (
        <header className='w-full px-20 py-6 font-medium flex items-center justify-between bg-light dark:bg-dark dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8'>

            <button className='flex-col justify-center items-center hidden lg:flex' onClick={handleCLick}>
                <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </button>


            <div className='w-full flex justify-between items-center lg:hidden'>
                <nav>
                    <CustomLink href={'/'} title="Home" className={'mr-4'} />
                    <CustomLink href={'/about'} title={"About"} className={'mx-4'} />
                    <CustomLink href={'/projects'} title="Projects" className={'mx-4'} />
                    <CustomLink href={'/certificates'} title="Certificates" className={'ml-4'} />
                </nav>

                <nav className='flex items-center justify-center flex-wrap '>
                    <motion.a href={'https://github.com/dushyant2909'} target='_blank'
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className='w-6 mr-3'
                    >
                        <GithubIcon />
                    </motion.a>
                    <motion.a href={'https://leetcode.com/Dushyant2909/'} target='_blank'
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className='w-6 mr-3 dark:bg-light rounded-full'>
                        <LeetcodeIcon />
                    </motion.a >
                    <motion.a href={'https://www.linkedin.com/in/dushyant-bhutiyani'} target='_blank'
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className='w-6 mr-3'>
                        <LinkedInIcon />
                    </motion.a>
                    <motion.a href={'https://x.com/DushyantBh61730'} target='_blank'
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className='w-6 mr-3'>
                        <TwitterIcon />
                    </motion.a>

                    <button
                        className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
                        onClick={() => setMode(mode === "light" ? "dark" : "light")}>
                        {
                            mode === "dark" ?
                                <SunIcon className={"fill-dark"} /> :
                                <MoonIcon className={"fill-dark"} />
                        }
                    </button>

                </nav>
            </div>

            {
                isOpen ?
                    <motion.div
                        initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
                        animate={{ scale: 1, opacity: 1 }}
                        className='min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32'>
                        <nav className='flex flex-col items-center justify-center'>
                            <CustomMobileLink href={'/'} title="Home" toggle={handleCLick} />
                            <CustomMobileLink href={'/about'} title={"About"} toggle={handleCLick} />
                            <CustomMobileLink href={'/projects'} title="Projects" toggle={handleCLick} />
                            <CustomMobileLink href={'/certificates'} title="Certificates" toggle={handleCLick} />
                        </nav>

                        <nav className='flex items-center justify-center flex-wrap mt-3'>
                            <motion.a href={'https://github.com/dushyant2909'} target='_blank'
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.9 }}
                                className='w-6 mr-3 sm:mx-1 bg-light rounded-full dark:bg-dark'
                            >
                                <GithubIcon />
                            </motion.a>
                            <motion.a href={'https://leetcode.com/Dushyant2909/'} target='_blank'
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.9 }}
                                className='w-6 mr-3 dark:bg-light rounded-full sm:mx-1'>
                                <LeetcodeIcon />
                            </motion.a >
                            <motion.a href={'https://www.linkedin.com/in/dushyant-bhutiyani'} target='_blank'
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.9 }}
                                className='w-6 mr-3 sm:mx-1'>
                                <LinkedInIcon />
                            </motion.a>
                            <motion.a href={'https://x.com/DushyantBh61730'} target='_blank'
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.9 }}
                                className='w-6 mr-3 sm:mx-1'>
                                <TwitterIcon />
                            </motion.a>

                            <button
                                className={`ml-3 sm:mxl-1 flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
                                onClick={() => setMode(mode === "light" ? "dark" : "light")}>
                                {
                                    mode === "dark" ?
                                        <SunIcon className={"fill-dark"} /> :
                                        <MoonIcon className={"fill-dark"} />
                                }
                            </button>

                        </nav>
                    </motion.div>
                    :
                    null
            }
            {/* 
            <div className="absolute left-[50%] top-4 translate-x-[-50%]">
                <Logo />
            </div> */}
        </header >
    )
}

export default Navbar