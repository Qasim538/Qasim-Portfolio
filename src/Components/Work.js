import React from 'react'
import proj1 from '../Assets/projects/Proj1.png'
import proj2 from '../Assets/projects/Proj2.png'
import proj3 from '../Assets/projects/Proj3.png'
import proj4 from '../Assets/projects/Proj4.png'
import proj5 from '../Assets/projects/Proj5.png'
import proj6 from '../Assets/projects/Proj6.png'
import proj7 from '../Assets/projects/Proj7.jpg'
import proj8 from '../Assets/projects/Proj8.jpg'
import proj9 from '../Assets/projects/Proj9.jpg'

const Work = () => {
  return (
    <div name='work' className='w-full min-h-screen text-gray-300 bg-[#0a192f] py-20'>
      <div className='max-w-[1200px] mx-auto px-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-12 text-center'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-red-500'>
            Work
          </p>
          <p className='py-6 text-lg text-gray-400'>
            Check out some of my recent works.
          </p>
        </div>

        {/* Grid Container */}
        <div className='grid gap-8 sm:grid-cols-2 md:grid-cols-3 w-full'>

          {[
            { img: proj7, title: 'Afreximbank', desc: 'I update pages when needed and enhance user interactivity.', link: 'https://www.afreximbank.com/' },
            { img: proj8, title: 'Afreximbank', desc: 'Designed email template.', link: 'https://www.afreximbank.com/' },
            { img: proj9, title: 'Vauxhall Marketing Email', desc: 'Direct marketing email design at McCann MK.', link: 'https://www.vauxhall.co.uk/' },
            { img: proj1, title: 'React JS Application', desc: '', link: 'https://harmonious-fox-7491f1.netlify.app/' },
            { img: proj2, title: 'HTML, CSS, JavaScript, API', desc: '', link: 'https://milla56.github.io/Click-Studio/index.html' },
            { img: proj3, title: 'Weather App (API)', desc: '', link: 'https://qasim538.github.io/Check-Your-City-Weather/' },
            { img: proj4, title: 'JavaScript App', desc: '', link: 'https://qasim538.github.io/My-Planner-Work-Day-Scheduler/' },
            { img: proj5, title: 'JSON CLI App', desc: '', link: 'https://qasim538.github.io/team-profile-generator/' },
            { img: proj6, title: 'HTML, CSS Website', desc: '', link: 'https://qasim538.github.io/Code-Refactoring-Week-1-Challenge/' },
          ].map((item, index) => (
            <div key={index} className='relative w-full rounded-lg overflow-hidden shadow-lg shadow-[#040c16] bg-[#112240]'>
              
              {/* Image Wrapper */}
              <div className='relative group'>
                <img
                  src={item.img}
                  alt={item.title}
                  className='w-full h-56 object-cover object-top transition-transform duration-500 group-hover:scale-110'
                />

                {/* Hover Preview (only when hovering the image area) */}
                <div className='absolute inset-0 bg-black/90 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none'>
                  <img
                    src={item.img}
                    alt={`${item.title} preview`}
                    className='max-w-[90%] max-h-[90%] rounded-lg shadow-lg object-contain'
                  />
                </div>
              </div>

              {/* Text and Button Section */}
              <div className='p-4'>
                <h3 className='text-xl font-semibold mb-2 text-white'>{item.title}</h3>
                {item.desc && <p className='text-gray-300 text-sm mb-3'>{item.desc}</p>}
                <a
                  href={item.link}
                  target='_blank'
                  rel='noreferrer'
                  className='inline-block px-4 py-2 bg-white text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors'
                >
                  Demo
                </a>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default Work
