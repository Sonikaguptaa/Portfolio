import React from 'react'
import Mod1 from '../assets/Mod1.jpg'
import Mod2 from '../assets/Mod2.jpg'
import Mod3 from '../assets/Mod3.jpg'
import CTFB from '../assets/CTFB.png'
import SCcert from '../assets/SCcert.png'

const Portfolio = () => {

    return (

        <div
            name="portfolio"
            className="bg-gradient-to-b from-gray-900 to-black w-full h-screen"
        >
            <div className='max-w-screen-lg mx-auto flex flex-col justify-center w-full h-screen text-white'>


                <div className="pb-1 mt-56">
                    <p className="text-3xl inline border-b-4 border-gray-500 font-bold mt-auto">
                        Projects
                    </p>
                    <p className="py-2">Check out some of my work right here</p>
                    <p className='mb-2 sm:mb-10 text-xl'>Titles for Repo (Code), Images for Live</p>

                </div>

                <div className='w-full flex lg:grid-cols-4 gap-4 text-center py-4 px-12 lg:px-0'>
                    <div className='mx-4 flex flex-col justify-center items-center sm:justify-start'>
                        <a href='https://github.com/Sonikaguptaa/Sonikaguptaa.github.io' className=' text-2xl hover:text-blue-600' >Tic Tac Toe Game</a><a href='https://sonikaguptaa.github.io/'><img src={Mod1} alt='Tic Tac Toe' className=' hover:scale-105 duration-500 py-2 rounded-3xl m-auto shadow-yellow-600 shadow-md' /></a>
                    </div>
                    <div className='mx-4 flex flex-col justify-center items-center sm:justify-start'>
                        <a href='https://github.com/Sonikaguptaa/Weather-App' className='text-2xl hover:text-blue-600'>React Weather App</a><a href='https://main--marvelous-otter-cf5481.netlify.app/'><img src={Mod2} alt='Exact Weather' className=' hover:scale-105 duration-500 py-2 rounded-3xl m-auto shadow-blue-300 shadow-md' /></a>

                    </div>
                    <div className='mx-4 flex flex-col justify-center items-center sm:justify-start'>
                        <a href='https://github.com/Sonikaguptaa/Mod-3-ProjectDrApp' className='text-2xl hover:text-blue-600'>MERN Dr App</a><a href='https://frontend-client-9jrc.onrender.com'><img src={Mod3} alt="Dr App" className=' hover:scale-105 duration-500 py-2 rounded-3xl m-auto shadow-white shadow-md ' /></a>
                    </div>
                </div>



            </div>
        </div >




    )

}

export default Portfolio