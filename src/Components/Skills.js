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
import Framer from '../Assets/framer.svg'
import Illustrator from '../Assets/Illustrator.png'
import WordPress from '../Assets/wordpress.png'
import Typescript from '../Assets/typescript.png'

const skillsData = [
  { name: 'HTML', img: html },
  { name: 'CSS', img: css },
  { name: 'React', img: reactImg },
  { name: 'JavaScript', img: javascript },
  { name: 'Typescript', img: Typescript },
  { name: 'WordPress', img: WordPress },
  { name: 'Node', img: node },
  { name: 'Tailwind', img: tailwind },
  { name: 'Bootstrap', img: bootstrap },
  { name: 'Figma', img: Figma, height: true },
  { name: 'Framer', img: Framer, height: true },
  { name: 'Sketch', img: Sketch },
  { name: 'Photoshop', img: Photoshop },
  { name: 'Indesign', img: Indesign },
  { name: 'Illustrator', img: Illustrator },
  { name: 'GitHub', img: github },
]

const Skills = () => {

  useEffect(() => {

    gsap.fromTo(
      ".skillsFade",
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.08,
        ease: "power3.out",
      }
    )

    gsap.to(".floatingSkill", {
      y: -8,
      duration: 2.5,
      stagger: {
        each: 0.08,
        from: "random",
      },
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    })

  }, [])

  return (
    <div
      name='skills'
      className='bg-[#f5f7fb] text-[#233554] py-24 relative overflow-hidden'
    >

      {/* subtle background blur */}
      <div className='absolute bottom-[-120px] left-[-120px] w-[350px] h-[350px] bg-blue-200/30 blur-[120px] rounded-full'></div>

      <div className='max-w-[1100px] mx-auto px-6 flex flex-col justify-center w-full h-full relative z-10'>

        <div className='skillsFade'>
          <p className='text-4xl font-black inline border-b-4 border-b-red-500 text-[#122254] pb-2'>
            Skills
          </p>

          <p className='py-6 text-[#5c6574] text-lg'>
            These are the technologies I have worked with.
          </p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-6 text-center py-8'>

          {skillsData.map((skill, index) => (
            <div
              key={index}
              className='floatingSkill skillsFade bg-white/80 backdrop-blur-md border border-white rounded-[28px] p-7 shadow-xl hover:-translate-y-2 hover:shadow-red-100/50 transition duration-500 group'
            >

              <div className='flex items-center justify-center h-[90px]'>
                <img
                  className={`${skill.height ? 'h-20' : 'w-20'} mx-auto object-contain group-hover:scale-110 transition duration-300`}
                  src={skill.img}
                  alt={`${skill.name} icon`}
                />
              </div>

              <p className='mt-5 text-[#122254] font-semibold tracking-wide'>
                {skill.name}
              </p>

            </div>
          ))}

        </div>
      </div>

    </div>
  )
}

export default Skills