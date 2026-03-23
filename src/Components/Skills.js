import React from 'react'
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
  return (
    <div name='skills' className='bg-[#0a192f] text-gray-300'>
      
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-b-red-500'>Skills</p>
          <p className='py-4'>These are the technologies I have worked with.</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'
            >
              <img
                className={`${skill.height ? 'h-20' : 'w-20'} mx-auto`}
                src={skill.img}
                alt={`${skill.name} icon`}
              />
              <p className='my-4'>{skill.name}</p>
            </div>
          ))}

        </div>
      </div>

    </div>
  )
}

export default Skills