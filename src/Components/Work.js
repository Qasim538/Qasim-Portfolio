import React from 'react'
import proj1 from '../Assets/projects/Proj1.png'
import proj2 from '../Assets/projects/Proj2.png'
import proj3 from '../Assets/projects/Proj3.png'
import proj4 from '../Assets/projects/Proj4.png'
import proj7 from '../Assets/projects/Proj7.jpg'
import proj8 from '../Assets/projects/Proj8.jpg'
import proj9 from '../Assets/projects/Proj9.jpg'
import proj10 from '../Assets/projects/Proj10.png'
import proj11 from '../Assets/projects/Proj11.jpg'
import proj12 from '../Assets/projects/Proj12.jpg'

// Icons
import html from '../Assets/html.png'
import css from '../Assets/css.png'
import javascript from '../Assets/javascript.png'
import reactImg from '../Assets/react.png'
import Figma from '../Assets/Figma.png'
import Photoshop from '../Assets/Photoshop.png'


// Tech map
const techIcons = {
  HTML: html,
  CSS: css,
  JavaScript: javascript,
  React: reactImg,
  Figma: Figma,
  Photoshop: Photoshop
}

const Work = () => {
  return (
    <div name='work' className='w-full min-h-screen text-gray-300 bg-[#0a192f] py-20'>
      <div className='max-w-[1200px] mx-auto px-4 flex flex-col justify-center w-full h-full'>
        
        {/* Heading */}
        <div className='pb-12 text-center'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-red-500'>
            Work
          </p>
          <p className='py-6 text-lg text-gray-400'>
            Check out some of my recent works.
          </p>
        </div>

        {/* Grid */}
        <div className='grid gap-8 sm:grid-cols-2 md:grid-cols-3 w-full'>

          {[
            { 
              img: proj12, 
              title: 'Google Pixel 10 Launch', 
              desc: 'Figma → Photoshop → HTML email build.', 
              link: 'https://store.google.com/gb/product/pixel_10_pro?hl=en-GB&pli=1',
              software: ['Figma', 'Photoshop', 'HTML', 'CSS']
            },
            { 
              img: proj11, 
              title: 'Cisco Email Design', 
              desc: 'Figma → HTML email build.', 
              link: 'https://www.webex.com/',
              software: ['Figma', 'HTML', 'CSS']
            },
            { 
              img: proj9, 
              title: 'Marketing Email', 
              desc: 'Vauxhall campaign.', 
              link: 'https://www.vauxhall.co.uk/',
              software: ['Figma', 'HTML', 'CSS']
            },
            { 
              img: proj7, 
              title: 'Afreximbank', 
              desc: 'Website updates & interactivity.', 
              link: 'https://www.afreximbank.com/',
              software: ['HTML', 'CSS', 'JavaScript']
            },
            { 
              img: proj10, 
              title: 'Landing Page', 
              desc: 'Event landing page.', 
              link: 'https://www.afreximbank.com/',
              software: ['Figma', 'HTML', 'CSS']
            },
            { 
              img: proj8, 
              title: 'Email Design', 
              desc: 'Responsive email template.', 
              link: 'https://www.afreximbank.com/',
              software: ['Figma', 'HTML', 'CSS']
            },
      
            { 
              img: proj1, 
              title: 'React App', 
              desc: '', 
              link: 'https://harmonious-fox-7491f1.netlify.app/',
              software: ['React', 'CSS']
            },
          ].map((item, index) => (
            <div
              key={index}
              className='flex flex-col bg-[#112240] rounded-xl overflow-hidden shadow-lg shadow-black/30 hover:translate-y-[-5px] transition duration-300'
            >
              
              {/* Image */}
              <img
                src={item.img}
                alt={item.title}
                className='w-full h-52 object-cover object-top'
              />

              {/* Content */}
              <div className='flex flex-col flex-grow p-4'>
                
                <h3 className='text-lg font-semibold text-white mb-2'>
                  {item.title}
                </h3>

                {item.desc && (
                  <p className='text-gray-400 text-sm mb-4'>
                    {item.desc}
                  </p>
                )}

                {/* Icons */}
                <div className='flex gap-3 mb-4'>
                  {item.software.map((tech, i) => (
                    techIcons[tech] && (
                      <img
                        key={i}
                        src={techIcons[tech]}
                        alt={tech}
                        className='w-5 h-5 object-contain opacity-80 hover:opacity-100 transition'
                      />
                    )
                  ))}
                </div>

                {/* Push button to bottom */}
                <div className='mt-auto'>
                  <a
                    href={item.link}
                    target='_blank'
                    rel='noreferrer'
                    className='block w-full text-center py-2 rounded-lg bg-white/10 text-gray-200 text-sm hover:bg-red-600 transition'
                  >
                    View Project →
                  </a>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default Work