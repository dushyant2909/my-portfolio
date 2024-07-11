import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
import { useRouter } from 'next/router'
import LeetcodeIcon, { GithubIcon, LinkedInIcon, TwitterIcon } from './Icons'
import { motion } from 'framer-motion'

const CustomLink = ({ href, title, className = "" }) => {
    const router = useRouter();
    return (
        <Link href={href}
            className={`${className} relative group font-medium`}>
            {title}
            <span className={`h-[1.5px] inline-block w-0 bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? "w-full" : "w-0"}`}>&nbsp;</span>
        </Link>
    )
}

const Navbar = () => {
    return (
        <header
            className='w-full px-20 py-8 font-medium flex items-center justify-between'>
            <nav>
                <CustomLink href={'/'} title="Home" className={'mr-4'} />
                <CustomLink href={'/about'} title={"About"} className={'mx-4'} />
                <CustomLink href={'/projects'} title="Projects" className={'mx-4'} />
                <CustomLink href={'/certificates'} title="Certificates" className={'ml-4'} />
            </nav>
            {/* <div className="absolute left-[50%] top-4 translate-x-[-50%]">
                <Logo />
            </div> */}
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
                    className='w-6 mr-3'>
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
            </nav>
        </header>
    )
}

export default Navbar