import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
    <form method='POST' action='https://getform.io/f/bc1b1363-c071-4456-b7e9-d35dcfd701ad' className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
        <p className='text-4xl font-bold inline border-b-4 border-red-500 text-gray-300'>Contact</p>
        <p className='text-gray-300 py-4'> Submit the form below or send an email - mq12113@gmail.com</p>
        </div>
        <input className='bg-[#ccd6f6] p-2' type='text' placeholder='Name' name='name' />
        <input className='bg-[#ccd6f6] my-4 p-2' type='email' placeholder='Email' name='email' />
        <textarea className='bg-[#ccd6f6] my-4 p-2' placeholder='Your message here...' name='message' rows='10'> </textarea>
        <button className='text-white border-2 hover:bg-red-500 hover:border-red-500 px-4 py-3 my-8 mx-auto flex items-center'>Let's collaborate</button>
    </form>
      
    </div>
  )
}

export default Contact
