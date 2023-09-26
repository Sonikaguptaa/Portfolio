import React from 'react'

const Contact = () => {
  return (

    <div name='contact' className='w-full h-screen bg-gradient-to-b from-gray-900 to-black  text-white'>
      <div className='max-w-screen-md p-4 mx-auto flex flex-col justify-center w-full h-screen'>

        <div className='pb-4' >
          <p className='text-3xl font-bold inline border-b-4 border-gray-500 text-center'>Contact</p>
          <p className='py-6'>Submit the form below to get in touch with me</p>
        </div>

        <div className='flex justify-center items-center'>
          <form action='https://getform.io/f/b6bafc58-dc2d-4662-b24c-90baa27f75ed' method='POST' className='flex flex-col w-full md:w-1/2'>

            <input
              type='text'
              name='name'
              placeholder='Enter Your Name'
              className='p-2 bg-transparent border-2 rounded-md text-white focus: outline-none'
            />

            <input
              type='text'
              name='email'
              placeholder='Enter Your email'
              className='p-2 bg-transparent border-2 rounded-md text-white focus: outline-none'
            />


            <textarea name='message'
              rows='6'
              placeholder='Enter Your Message'
              className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'>

            </textarea>
            <button className='text-white  bg-gradient-to-b from-cyan-500 
            px-6 py-3 my-8 mx-auto flex items-center
             rounded-md hover:scale-110 duration-300'>Let's talk </button>

          </form>
        </div>
      </div>

    </div>
  )
}

export default Contact
