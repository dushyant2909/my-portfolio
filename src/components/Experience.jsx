import { motion, useScroll } from 'framer-motion'
import React, { useRef } from 'react'
import LiIcon from './LiIcon'

const Details = ({ position, company, companyLink, time, address, work, type }) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className='my-8 first:mt-4 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
            <LiIcon reference={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="">
                <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
                    {position}&nbsp;
                    <a href={companyLink}
                        target='_blank'
                        className='text-primary dark:text-primaryDark capitalize'>@{company}</a>
                </h3>
                <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
                    {time} | {address} | {type}
                </span>
                <p className='font-medium w-full text-justify md:text-sm'>{work}</p>
            </motion.div>
        </li>
    )
}

const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
    return (
        <div className='mt-48 mb-48'>
            <h2 className='font-bold text-8xl mb-28 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
                Experience
            </h2>
            <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">

                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className="absolute left-9 top-3 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"></motion.div>

                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                    <Details position={"Backend Developer"}
                        company={"Persistent Digital Commerce"} companyLink={'https://persistentdigitalcommerce.in/'}
                        time={'July 2024 - Present'} address={'Gwalior, M.P'}
                        work={'Contributing to backend development for the real-world project "PehchanKiDukan" , my responsibilities include enhancing database management, optimizing API functionalities, and ensuring seamless integration of new features to elevate user experience and operational efficiency.'}
                        type={"On-site"} />
                    <Details position={"Web Development Intern"}
                        company={"InternPe"} companyLink={'https://internpe.in/'}
                        time={'June 2023 - July 2023'} address={'Jaipur, Rajasthan'}
                        work={"Collaborated on a full-stack web app addressing real-world problems using React.js, Tailwind for frontend and Redux for state management. Contributed to the design and implementation of RESTful APIs using Node.js and Express.js facilitating seamless communication between client-side and server-side components."}
                        type={"Remote"} />

                </ul>
            </div>
        </div>
    )
}

export default Experience