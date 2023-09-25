import React from 'react'
import Mod1 from '../assets/Mod1.jpg'
import Mod2 from '../assets/Mod2.jpg'
import Mod3 from '../assets/Mod3.jpg'
import CTFB from '../assets/CTFB.png'
import SCcert from '../assets/SCcert.png'

function Portfolio() {
    return (

        <div
            name="portfolio"
            className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
        >
            <div className="max-w-screen-lg p-4 m-auto flex flex-col justify-center w-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Portfolio
                    </p>
                    <p className="py-6">Check out some of my work right here</p>
                </div>

                <div className='flex flex-col justify-center items-center sm:mt-20 min-h-full min-w-full'>
                    <h3 className='text-3xl'>Projects</h3>
                    <h2 className='mb-2 sm:mb-10 text-xl'>Titles for Repo, Images for Live</h2>
                    <div className='flex flex-col p-2 sm:flex-row justify-center'>
                        <div className='mx-4 flex flex-col justify-center items-center sm:justify-start'>
                            <a href='https://github.com/Sonikaguptaa/Sonikaguptaa.github.io' className='text-2xl hover:text-blue-600' >Tic Tac Toe Game</a><a href='https://sonikaguptaa.github.io/'><img src={Mod1} alt='Tic Tac Toe' className='rounded-3xl w-48 border-2 border-transparent hover:border-blue-500 hover:shadow-2xl' /></a>
                        </div>
                        <div className='mx-4 flex flex-col justify-center items-center sm:justify-start'>
                            <a href='https://github.com/Sonikaguptaa/Weather-App' className='text-2xl hover:text-blue-600'>React Weather App</a><a href='https://main--marvelous-otter-cf5481.netlify.app/'><img src={Mod2} alt='Exact Weather' className='rounded-3xl w-48 border-2 border-transparent hover:border-blue-500 hover:shadow-2xl' /></a>

                        </div>
                        <div className='mx-4 flex flex-col justify-center items-center sm:justify-start'>
                            <a href='https://github.com/Sonikaguptaa/Mod-3-ProjectDrApp' className='text-2xl hover:text-blue-600'>MERN full stack DR App</a><a href='https://frontend-client-9jrc.onrender.com'><img src={Mod3} alt="Dr App" className='rounded-3xl w-72 border-2 border-transparent hover:border-blue-500 hover:shadow-2xl' /></a>
                        </div>
                    </div>
                    <div><h3 className='text-3xl'>Certifications </h3>
                        <div className='flex flex-col p-2 sm:flex-row justify-center'>
                            <div className='mx-4 flex flex-col justify-center items-center sm:justify-start' >CTFL<img src={CTFB} alt='Ctfl' className='rounded-3xl w-72 border-2 border-transparent' />
                                <div className='mx-4 flex flex-col justify-center items-center sm:justify-start' >MERN<img src={SCcert} alt='Ctfl' className='rounded-3xl w-72 border-2 border-transparent' />


                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col p-2 sm:flex-row justify-center'>

                        </div>
                    </div>




                </div>
            </div>
        </div>
    )

}

export default Portfolio