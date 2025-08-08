import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-scroll'


const Home = () => {

  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>

    {/* Container */}
    <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
    <p className='text-red-500'> Hi, my name is </p>
    <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Qasim Muhammad</h1>
    <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>Frontend developer</h2>
    <p className='text-[#8892b0] py-4 max-w-[700px]'> I’m a Frontend Developer and UI/UX Designer with 15 years of experience in the design industry, having worked with leading tech giants from Silicon Valley to craft user-focused, visually compelling digital products. </p>
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
      
    </div>
  )
}

export default Home
