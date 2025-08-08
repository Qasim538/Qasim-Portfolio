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
        <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-red-500'>Work</p>
                    <p className='py-6'>Check out some of my recent works.</p>
                </div>

                {/**Container */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 items-start'>

                    {/**Grid item */}
                    <div style={{
                        backgroundImage: `url(${proj7})`, backgroundPosition: 'top',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover'
                    }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center content-start mx-auto content-div'>

                        {/** Hover Effects */}
                        <div className=' pt-10 p-2 text-center opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Afexim Bank
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://www.afreximbank.com/' target="_blank" rel="noreferrer" >
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Demo</button>
                                </a>
                                {/* <a href='https://github.com/Qasim538/Sneaky-Travels' target="_blank" rel="noreferrer" >
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Code</button>
                    </a> */}
                            </div>
                        </div>
                    </div>
                    {/**Grid item */}
                    <div style={{
                        backgroundImage: `url(${proj8})`, backgroundPosition: 'top',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover'
                    }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center mx-auto content-div top-0'>

                        {/** Hover Effects */}
                        <div className=' pt-10 p-2 text-center opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Afrexim Bank
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://www.afreximbank.com/' target="_blank" rel="noreferrer" >
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Demo</button>
                                </a>
                                {/* <a href='https://github.com/Qasim538/Sneaky-Travels' target="_blank" rel="noreferrer" >
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Code</button>
                    </a> */}
                            </div>
                        </div>
                    </div>
                    {/**Grid item */}
                    <div style={{
                        backgroundImage: `url(${proj9})`, backgroundPosition: 'top',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover'
                    }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center mx-auto content-div'>

                        {/** Hover Effects */}
                        <div className=' pt-10 p-2 text-center opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Vauxhall Marketing Email
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://www.vauxhall.co.uk/' target="_blank" rel="noreferrer" >
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Demo</button>
                                </a>
                                {/* <a href='https://github.com/Qasim538/Sneaky-Travels' target="_blank" rel="noreferrer" >
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Code</button>
                    </a> */}
                            </div>
                        </div>
                    </div>
                    {/**Grid item */}
                    <div style={{ backgroundImage: `url(${proj1})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center mx-auto content-div'>

                        {/** Hover Effects */}
                        <div className=' pt-10 p-2 text-center opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                React JS Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://harmonious-fox-7491f1.netlify.app/' target="_blank" rel="noreferrer" >
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Demo</button>
                                </a>
                                <a href='https://github.com/Qasim538/Sneaky-Travels' target="_blank" rel="noreferrer" >
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/**Grid item */}
                    <div style={{ backgroundImage: `url(${proj2})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center mx-auto content-div'>
                        {/** Hover Effects */}
                        <div className='pt-10 p-2 text-center opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl  font-bold text-white tracking-wider'>
                                HTML, CSS, JavaScript, API
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://milla56.github.io/Click-Studio/index.html' target="_blank" rel="noreferrer" >
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Demo</button>
                                </a>
                                <a href='https://github.com/milla56/Click-Studio' target="_blank" rel="noreferrer" >
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/**Grid item */}
                    <div style={{ backgroundImage: `url(${proj3})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center mx-auto content-div'>
                        {/** Hover Effects */}
                        <div className='pt-10 p-2 text-center opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl  font-bold text-white tracking-wider'>
                                Weather App (API)
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://qasim538.github.io/Check-Your-City-Weather/' target="_blank" rel="noreferrer" >
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Demo</button>
                                </a>
                                <a href='https://github.com/Qasim538/Check-Your-City-Weather' target="_blank" rel="noreferrer" >
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/**Grid item */}
                    <div style={{ backgroundImage: `url(${proj4})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center mx-auto content-div'>
                        {/** Hover Effects */}
                        <div className='pt-10 p-2 text-center opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl  font-bold text-white tracking-wider'>
                                JavaScript App
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://qasim538.github.io/My-Planner-Work-Day-Scheduler/' target="_blank" rel="noreferrer" >
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Demo</button>
                                </a>
                                <a href='https://github.com/Qasim538/My-Planner-Work-Day-Scheduler' target="_blank" rel="noreferrer" >
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/**Grid item */}
                    <div style={{ backgroundImage: `url(${proj5})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center mx-auto content-div'>
                        {/** Hover Effects */}
                        <div className='pt-10 p-2 text-center opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl  font-bold text-white tracking-wider'>
                                JSON CLI App
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://qasim538.github.io/team-profile-generator/' target="_blank" rel="noreferrer" >
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Demo</button>
                                </a>
                                <a href='https://github.com/Qasim538/team-profile-generator' target="_blank" rel="noreferrer" >
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/**Grid item */}
                    <div style={{ backgroundImage: `url(${proj6})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center mx-auto content-div'>
                        {/** Hover Effects */}
                        <div className='pt-10 p-2 text-center opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl  font-bold text-white tracking-wider'>
                                HTML, CSS Website
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://qasim538.github.io/Code-Refactoring-Week-1-Challenge/' target="_blank" rel="noreferrer" >
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Demo</button>
                                </a>
                                <a href='https://github.com/Qasim538/Code-Refactoring-Week-1-Challenge' target="_blank" rel="noreferrer" >
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default Work
