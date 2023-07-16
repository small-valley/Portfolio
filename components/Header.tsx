'use client';

import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import Link from 'next/link';

type Props = {
  socials: Social[]
}

export default function Header({ socials }: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
        <motion.div 
          initial={{
              x: -500,
              opacity: 0,
              scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5
          }}
          className="flex flex-row items-center">
            
          { socials?.map((social) => {
              return <SocialIcon
                key= { social.key }
                url= { social.url }
                fgColor= { social.fgColor }
                bgColor= { social.bgColor }
            />
          })}
        </motion.div>

        <motion.div
          initial={{
              x: 500,
              opacity: 0,
              scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5
          }}
          className='flex flex-row items-center text-grey-300 cursor-pointer'>
            <SocialIcon
            className='cursor-pointer'
            network='email'
            fgColor='grey'
            bgColor='transparent'/>
            <Link href="#contact">
              <p className='uppercase hidden md:inline-flex text-sm text-grey-400'>
                  Get in Touch
              </p>
            </Link>
        </motion.div>
    </header>
  )
}