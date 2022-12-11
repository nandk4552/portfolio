import React from 'react'
import { motion } from 'framer-motion'
import { Project } from '../typings';
import { urlFor } from '../sanity';
import Image from 'next/image';
import Link from 'next/link';
type Props = {
    projects: Project[];
}

function Projects({ projects }: Props) {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='h-screen relative flex flex-col text-left md:flex-row max-w-full overflow-hidden px-10 justify-evenly mx-auto items-center z-0'>

            <h3 className='absolute top-20 uppercase tracking-[20px]  text-gray-500 text-2xl'>
                Projects
            </h3>

            <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 '>
                {projects?.map((project, i) => (
                    <div key={project._id} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-40 md:p-40 h-screen' >
                        <div className='max-w-30 max-h-50 md:w-70 md:h-100 overflow-hidden '>
                            <motion.img
                                initial={{
                                    y: -300,
                                    opacity: 0,
                                }}
                                transition={{
                                    duration: 1.2,
                                }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                src={urlFor(project?.image).url()} alt=""
                            />
                        </div>

                        <div className='space-y-5 px-0 md:px-10 max-w-6xl'>
                            <h4 className='text-4xl font-semibold text-center '>
                                <span className='underline decoration-[#F7AB0A]/50'>
                                    Case study {i + 1} of {projects.length}:</span> {project?.title}</h4>
                            <div className='flex items-center space-x-5 justify-center'>
                                {project?.technologies.map(technology => (
                                    <Image
                                        className='h-10 w-10 m-5 p-10'
                                        key={technology._id} src={urlFor(technology?.image).url()} alt="" width={50} height={50} />
                                ))}
                            </div>

                            <p className='text-lg text-center md:text-left h-20 overflow-y-scroll scrollbar-thin scrollbar-track-[rgb(24,24,24)] scrollbar-thumb-[#F7AB0A]/80'>
                                {project?.summary}
                            </p>
                            <Link href={project?.linkToBuild}>
                                <a target="_blank" className='px-3 py-2 bg-white text-black hover:border-white rounded-sm hover:bg-[#F7AB0A] text-base'>🔴 Live Preview</a>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>


            <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] skew-y-12' />

        </motion.div>
    )
}

export default Projects