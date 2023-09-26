import React from 'react'
import CTFB from '../assets/CTFB.png'
import SCcert from '../assets/SCcert.png'

const Certification = () => {
    return (
        <div name="certification" className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>

                <div>
                    <p className='text-3xl font-bold inline border-b-4 border-gray-500 mt-auto'>Certification</p>
                </div>

                <div className='flex flex-row gap-8 justify-center text-center py-8 px-12 sm:px-0'>
                    <div className='hover:scale-105 duration-500 p-2 rounded-3xl mx-4 shadow-lg shadow-blue-300'>
                        <img src={CTFB} alt='CTFL' className='w-60 h-60 ' /> {/* Set a fixed width and height */}
                    </div>
                    <div className='hover:scale-105 duration-500 p-2 rounded-3xl mx-4 shadow-lg shadow-white'>
                        <img src={SCcert} alt='SCcert' className='w-60 h-60 rounded-3xl' /> {/* Set a fixed width and height */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Certification
