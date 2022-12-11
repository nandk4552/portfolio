import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { urlFor } from '../sanity';
import { PageInfo } from '../typings';
import BackGroundCircles from './BackGroundCircles';

type Props = {
    pageInfo: PageInfo
}

export default function Hero({ pageInfo }: Props) {
    const [text, count] = useTypewriter({
        words: [
            `Hi my name is ${pageInfo?.name}`,
            "GDSC Web Tech Memeber",
            "Designer",
            "Hacker",
        ],
        loop: true,
        delaySpeed: 2000,
    });
    return (
        <div className='h-screen flex flex-col space-y-10 items-center justify-center text-center overflow-hidden'>
            <BackGroundCircles />
            <Image
                className='relative border-[#F7AB0A]/90 bg-[#F7AB0A] shadow-md rounded-full h-32 w-32 mx-auto object-cover'
                src={urlFor(pageInfo?.heroImage).url()} alt="" width={100} height={100} />
            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>{pageInfo?.role}</h2>
                <h1 className='text-4xl lg:text-4xl font-semibold px-10'>
                    <span>{text}</span>
                    <Cursor cursorColor='#F7AB0A' />
                </h1>
                <div className='pt-5'>
                    <Link href="#about">
                        <button className='heroBtn'>About</button >
                    </Link>
                    <Link href="#experience">
                        <button className='heroBtn'>Experience</button>
                    </Link>
                    <Link href="#skills">
                        <button className='heroBtn'>Skills</button>
                    </Link>
                    <Link href="#projects">
                        <button className='heroBtn'>Projects</button>
                    </Link>
                </div>

            </div>
        </div>
    )
}