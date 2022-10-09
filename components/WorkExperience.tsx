import React from 'react'
import { motion } from "framer-motion"
import ExperienceCard from './ExperienceCard'
import { Experience } from '../typings';

type Props = {
    experiences: Experience[];
}

export default function WorkExperience({ experiences }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}

            className='h-screen flex flex-col text-left md:flex-row max-w-full relative overflow-hidden px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-20  uppercase tracking-[20px] text-gray-500 text-2xl'>
                Experience
            </h3>

            <div className='w-full flex space-x-5 overflow-x-scroll p-5 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 mt-20 pt-20'>
                {experiences?.map(experience => (
                    <ExperienceCard key={experience._id} experience={experience} />

                ))}

            </div>
        </motion.div>
    )
}