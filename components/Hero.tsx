//'use client'

import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
import Link from 'next/link';
import profileImage from '../img/ProfileImage.svg';

type Props = {
    pageInfo: PageInfo,
}

export default function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
        "Hi I am Masahiro Kotani",
        "I am a full-stack web developer",
        "<Tech Enthusiast/>",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles />
        <img
            className="relative rounded-full h-32 w-32 mx-auto object-cover"
            //width="96" height="96" src="https://img.icons8.com/color/96/c-sharp-logo.png" alt="c-sharp-logo"
            src={profileImage.src}
            alt="photo"
        />
        <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
                Software Engineer
            </h2>
            <h1 className='text-5xl lg:text-6xl font-semibold scrol-px-10'>
                <span className="mr-3">{text}</span>
                <Cursor cursorColor='#F7AB0A'/>
            </h1>
            <div className="pt-5">
                <Link href="#about">
                    <button className="heroButton">About</button>
                </Link>
                <Link href="#experience">
                    <button className="heroButton">Experience</button>
                </Link>
                <Link href="#skills">
                    <button className="heroButton">Skills</button>
                </Link>
                <Link href="#projects">
                    <button className="heroButton">Projects</button>
                </Link>
            </div>
        </div>
    </div>
  )
}