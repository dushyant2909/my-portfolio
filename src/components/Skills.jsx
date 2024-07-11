import React from 'react'
import { motion } from 'framer-motion'

const SkillSet = ({ name, x, y }) => {
    return (
        <motion.div className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute"
            whileHover={{ scale: 1.05 }}
            initial={{ x: 0, y: 0 }}
            whileInView={{ x: x, y: y }}
            transition={{
                duration: 1.5
            }}
            viewport={{ once: true }}
        >
            {name}
        </motion.div>
    )
}

const Skills = () => {
    return (
        <>
            <h2 className='font-bold text-7xl mt-20 w-full text-center'>Skills</h2>
            <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight '>
                <motion.div className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-6 shadow-dark cursor-pointer"
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