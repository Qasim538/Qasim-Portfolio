import React, { useEffect } from 'react'
import gsap from 'gsap'

import html from '../Assets/html.png'
import css from '../Assets/css.png'
import github from '../Assets/github.png'
import javascript from '../Assets/javascript.png'
import node from '../Assets/node.png'
import reactImg from '../Assets/react.png'
import tailwind from '../Assets/tailwind.png'
import bootstrap from '../Assets/Bootstrap_logo.svg.png'
import Indesign from '../Assets/Indesign.png'
import Photoshop from '../Assets/Photoshop.png'
import Figma from '../Assets/Figma.png'
import Sketch from '../Assets/Sketch.svg'
import Framer from '../Assets/framer copy.svg'
import Illustrator from '../Assets/Illustrator.png'
import WordPress from '../Assets/wordpress.png'
import Typescript from '../Assets/typescript.png'

const skillsData = [
  { name: 'HTML', img: html },
  { name: 'CSS', img: css },
  { name: 'React', img: reactImg },
  { name: 'JavaScript', img: javascript },
  { name: 'TypeScript', img: Typescript },
  { name: 'WordPress', img: WordPress },
  { name: 'Node.js', img: node },
  { name: 'Tailwind', img: tailwind },
  { name: 'Bootstrap', img: bootstrap },
  { name: 'Figma', img: Figma, height: true },
  { name: 'Framer', img: Framer, height: true },
  { name: 'Sketch', img: Sketch },
  { name: 'Photoshop', img: Photoshop },
  { name: 'InDesign', img: Indesign },
  { name: 'Illustrator', img: Illustrator },
  { name: 'GitHub', img: github },
]

const Skills = () => {
  useEffect(() => {
    // Smooth fade-in only
    gsap.fromTo(
      '.skillsFade',
      {
        opacity: 0,
        y: 15,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.05,
        ease: 'power2.out',
      }
    )
  }, [])

  return (
    <section
      name='skills'
      className='bg-[#f5f7fb] text-[#233554] py-20 relative overflow-hidden'
    >
      {/* Soft background glow */}
      <div className='absolute bottom-[-120px] left-[-120px] w-[300px] h-[300px] bg-blue-200/20 blur-[120px] rounded-full'></div>

      <div className='max-w-[1100px] mx-auto px-6 relative z-10'>
        {/* Heading */}
        <div className='skillsFade mb-10'>
          <p className='text-4xl font-black inline-block border-b-4 border-red-500 text-[#122254] pb-2'>
            Skills
          </p>

          <p className='mt-5 text-[#5c6574] text-lg'>
            Technologies and tools I use to design and build modern digital
            experiences.
          </p>
        </div>

        {/* Skills Grid */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className='skillsFade bg-white border border-slate-100 rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300'
            >
              <div className='flex items-center justify-center h-[70px]'>
                <img
                  className={`${
                    skill.height ? 'h-14' : 'w-14'
                  } object-contain`}
                  src={skill.img}
                  alt={skill.name}
                />
              </div>

              <p className='mt-3 text-sm font-semibold text-[#122254] tracking-wide text-center'>
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills