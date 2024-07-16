import React from 'react'
import { motion } from 'framer-motion'

const SkillSet = ({ name, x, y }) => {
    return (
        <motion.div className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute  dark:text-dark dark:bg-light lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold"
            whileHover={{ scale: 1.05 }}
            initial={{ x: 0, y: 0 }}
            whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
            viewport={{ once: true }}
        >
            {name}
        </motion.div>
    )
}

const Skills = () => {
    return (
        <>
            <h2 className='font-bold text-7xl mt-40 w-full text-center md:text-6xl md:mt-32'>Skills</h2>
            <div className='w-full h-screen mt-5 relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
             lg:bg-circularLightLg lg:dark:bg-circularDarkLg
             md:bg-circularLightMd md:dark:bg-circularDarkMd
             sm:bg-circularLightSm sm:dark:bg-circularDarkSm'>
                <motion.div className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-6 shadow-dark cursor-pointer dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2 "
                    whileHover={{ scale: 1.05 }}
                >
                    Web
                </motion.div>
                <SkillSet name="Next.js" x="-5vw" y="-10vw" />
                <SkillSet name="React.js" x="-25vw" y="2vw" />
                <SkillSet name="TypeScript" x="20vw" y="6vw" />
                <SkillSet name="Docker" x="0vw" y="12vw" />
                <SkillSet name="PostgreSQL" x="-20vw" y="-15vw" />
                <SkillSet name="Express.js" x="15vw" y="-12vw" />
                <SkillSet name="MongoDB" x="32vw" y="-5vw" />
                <SkillSet name="Cloudflare" x="0vw" y="-20vw" />
                <SkillSet name="Node.js" x="-25vw" y="18vw" />
                <SkillSet name="Git & Github" x="18vw" y="18vw" />
            </div>

        </>
    )
}

export default Skills