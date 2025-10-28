import React from 'react'
import html from '../Assets/html.png'
import css from '../Assets/css.png'
import github from '../Assets/github.png'
import javascript from '../Assets/javascript.png'
import node from '../Assets/node.png'
import react from '../Assets/react.png'
import tailwind from '../Assets/tailwind.png'
import bootstrap from '../Assets/Bootstrap_logo.svg.png'
import Indesign from '../Assets/Indesign.png'
import Photoshop from '../Assets/Photoshop.png'
import Figma from '../Assets/Figma.png'
import Sketch from '../Assets/Sketch.svg'
import Framer from '../Assets/framer.svg'
import Illustrator from '../Assets/Illustrator.png'
import WordPress from '../Assets/wordpress.png'


const Skills = () => {
  return (
    <div name='skills' className='bg-[#0a192f] text-gray-300'>

    {/* Container* / */}
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
            <p className='text-4xl font-bold inline border-b-4 border-b-red-500'>Skills</p>
            <p className='py-4'>These are the techenologies I have worked with.</p>
        </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>

                <div className='shadow-md shadow-[#040c16]  hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={html} alt='html icon'/>
                    <p className='my-4'>HTML</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={css} alt='css icon'/>
                    <p className='my-4'>CSS</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={javascript} alt='javascript icon'/>
                    <p className='my-4'>JavaScript</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={react} alt='react icon'/>
                    <p className='my-4'>React</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={WordPress} alt='react icon'/>
                    <p className='my-4'>WordPress</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={node} alt='node icon'/>
                    <p className='my-4'>Node</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={tailwind} alt='tailwind icon'/>
                    <p className='my-4'>Tailwind</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={bootstrap} alt='bootstrap icon'/>
                    <p className='my-4'>Bootstrap</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='h-20 mx-auto' src={Figma} alt='bootstrap icon'/>
                    <p className='my-4'>Figma</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='h-20 mx-auto color-white' src={Framer} alt='bootstrap icon'/>
                    <p className='my-4'>Framer</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Sketch} alt='bootstrap icon'/>
                    <p className='my-4'>Sketch</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Photoshop} alt='bootstrap icon'/>
                    <p className='my-4'>Photoshop</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Indesign} alt='bootstrap icon'/>
                    <p className='my-4'>Indesign</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Illustrator} alt='bootstrap icon'/>
                    <p className='my-4'>Illustrator</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={github} alt='github icon'/>
                    <p className='my-4'>GitHub</p>
                </div>

            </div>   
        <div>
        </div>
    </div>
      
    </div>
  )
}

export default Skills
