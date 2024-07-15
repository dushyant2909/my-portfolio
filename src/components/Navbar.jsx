import Link from 'next/link'
import React from 'react'
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

const Navbar = () => {

    const [mode, setMode] = useThemeSwitcher();

    return (
        <header
            className='w-full px-20 py-5 font-medium flex items-center justify-between fixed z-50 bg-light dark:bg-dark dark:text-light'>
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

            <div className="absolute left-[50%] top-4 translate-x-[-50%]">
                <Logo />
            </div>
        </header >
    )
}

export default Navbar