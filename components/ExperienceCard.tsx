import React from 'react'
import { motion } from 'framer-motion';
import { Experience } from '../typings';
import { urlFor } from '../sanity';
import Image from 'next/image';

type Props = {
    experience: Experience
}

export default function ExperienceCard({ experience }: Props) {

    return (
        <article className='flex flex-col rounded-lg items-center space-y-5 flex-shrink-0 w-[400px] md:[400px] xl:w-[500px] snap-center bg-[#292929] p-10 overflow-hidden hover:opacity-100 opacity-40 cursor-pointer translate-opacity duration-200'>
            <motion.img
                initial={{
                    y: -100,
                    opacity: 0,
                }}
                transition={{
                    duration: 1.2,
                }}
                whileInView={{
                    opacity: 1, y: 0,
                }}
                viewport={{ once: true }}
                className='w-32 h-32 rounded-full md:w-[100px] md:h-[100px] xl:w-[200px] xl:h-[200px] object-cover object-center'
                src={urlFor(experience?.companyImage).url()} alt="" />

            <div className='px-0 md:px-10 '>
                <h4 className='text-2xl font-light'>{experience?.jobTitle}</h4>
                <p className='font-bold text-2xl mt-1'>{experience?.company}</p>
                <div className='flex space-x-2 my-2'>

                    {experience.technologies.map(technology => (
                        <Image
                            key={technology._id}
                            className='h-10 w-10 rounded-full'
                            src={urlFor(technology?.image).url()}
                            alt=""
                            width={50} height={50}
                        />
                    ))}
                </div>
                <p className='uppercase py-5 text-gray-300'>
                    {new Date(experience?.dateStarted).toDateString()} - {experience.isCurrentlyWorkingHere ? "Present" : new Date(experience.dateEnded).toDateString()}
                </p>
                <div className='overflow-auto'>
                    <ul className='list-disc space-y-4 ml-5 text-sm'>
                        {experience?.points.map((point, i) => (
                            <li key={i}>{point}</li>
                        ))}
                    </ul>
                </div>
            </div>

        </article>
    )
}   