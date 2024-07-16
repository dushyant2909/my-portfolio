import { motion, useScroll } from 'framer-motion'
import React, { useRef } from 'react'
import LiIcon from './LiIcon'

const Details = ({ position, company, companyLink, time, address, work, type }) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className='my-8 first:mt-4 last:mb-0 w-[65%] mb-3 mx-auto flex flex-col items-center justify-between md:w-[80%]'>
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
                        className='text-rose-600 dark:text-primaryDark capitalize'>@{company}</a>
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
            <h2 className='font-bold text-8xl mb-24 w-full text-center md:text-6xl xs:text-4xl md:mb-12'>
                Experience
            </h2>
            <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className="absolute left-9 top-4 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"></motion.div>

                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-3'>
                    <Details position={"Backend Developer"}
                        company={"Persistent Digital Commerce"} companyLink={'https://persistentdigitalcommerce.in/'}
                        time={'July 2024 - Present'} address={'Gwalior, M.P'}
                        work={'I lead the backend development for the "PehchanKiDukan" application, enhancing database management, optimizing API performance, and integrating new features to elevate the user experience.'}
                        type={"On-site"} />
                    <Details position={"Web Development Intern"}
                        company={"InternPe"}
                        companyLink={'https://internpe.in/'}
                        time={'June 2023 - July 2023'}
                        address={'Jaipur, Rajasthan'}
                        work={"Contributed to a full-stack web app using React.js, Tailwind CSS, Redux, and Node.js/Express.js for RESTful API development, enhancing client-server communication."}
                        type={"Remote"} />

                </ul>
            </div>
        </div>
    )
}

export default Experience