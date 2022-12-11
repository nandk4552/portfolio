import React from 'react'
import { motion } from "framer-motion"
import { PageInfo } from '../typings'
import { urlFor } from '../sanity'

type Props = {
    pageInfo: PageInfo
}

export default function About({ pageInfo }: Props) {
    return (
        // <
        //     className='flex flex-col relative h-screen   text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>

        <div
            className='h-screen flex flex-col text-left md:flex-row max-w-7xl relative overflow-hidden px-10 pt-20 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 md:top-20 uppercase tracking-[20px] text-gray-500 text-2xl'>
                About
            </h3>
            <motion.img
                initial={{
                    x: -200,
                    opacity: 0,
                }}
                whileInView={{
                    x: 0,
                    opacity: 1,
                }}
                transition={{
                    duration: 1.2,
                }}
                viewport={{ once: true }}
                src={urlFor(pageInfo?.profilePic).url()} alt=""
                className='mt-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:mb-20 xl:w-[400px] xl:h-[500px] shadow-2xl shadow-[rgb(24,24,24)]/100'
            />

            <div className='space-y-10 px-0 md:px-10'>
                <h4 className='text-4xl font-semibold'>Here is a <span className='underline decoration-[#F7AB0A]'>Little</span> background </h4>
                <p className='text-base'>{pageInfo?.backgroundInformation}</p>
            </div>

        </div>
    )
}