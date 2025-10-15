import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-scroll'
import Skills from './Skills'


const Home = () => {

  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>

    {/* Container */}
    <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
    <p className='text-red-500'> Hi, I am </p>
    <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Qasim Muhammad</h1>
    <h5 className=' sm:text-7xl  text-[#8892b0]'>Frontend Developer</h5>
    <p className='text-[#ccd6f6] py-4 max-w-[700px]'> I’m a Frontend Developer and UI/UX Designer with over 15 years of experience in the creative and design industry. Having worked as a creative artworker and designer for more than a decade, I’ve developed a strong eye for detail and user-centered design. My passion for modern technology led me to earn a Diploma in Frontend Web Development from the University of Birmingham, where I honed my skills in HTML, CSS, JavaScript, and React. Today, I bring together design thinking and technical expertise to craft engaging, accessible, and visually compelling digital experiences. </p>
    <div>
    
    <Link to="work" smooth={true} offset={50} duration={500}>
    <button className='text-white border-2 px-6 py-3 flex items-center hover:bg-red-500 hover:border-red-500 '> Work 
    <span className='hover:rotate-90 duration-100'>
    <HiArrowNarrowRight className='ml-3' />
    </span> 
    </button>
    </Link> 
    </div>
    </div>

    <Skills />
      
    </div>
  )
}

export default Home
