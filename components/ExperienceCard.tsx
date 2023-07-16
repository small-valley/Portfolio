import React from 'react'
import { motion } from "framer-motion";

type Props = {
  experience: Experience,
}

const url: string = "https://img.icons8.com/color/96/c-sharp-logo.png";

export default function ExperienceCard({ experience }: Props) {
  return (
    <div className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      {/* <motion.img
        initial = {{
          y: -100,
          opacity: 0,
        }}
        transition = {{ duration: 1.2 }}
        whileInView={{ opacity:1, y: 0, }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src=""
        alt=""
      /> */}

      <div>
        <h4 className='text-4xl font-light'>{experience.title}</h4>
        <p className='font-bold text-2xl mt-1'>{experience.contract}</p>
        <div className='flex space-x-2 my-2'>
          {experience?.technologies.map((technology) => {
            return <img
              key={technology.key}
              className='h-10 w-10 rounded-full'
              src={technology.iconUrl}
              alt={technology.iconAlt} />
          })}
        </div>
        <p>Started work from {experience.fromDate} to {experience.toDate}  {experience.total}</p>
        <ul className='list-disc space-y-4 ml-5 text-lg max-h-96 overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80'>
          {experience?.points.map((point, index) => {
            return <li key={index}>{point}</li>
          })}
        </ul>
      </div>
      <a className='text-xs' href="https://icons8.com">icon by Icons8</a>
    </div>
  )
}