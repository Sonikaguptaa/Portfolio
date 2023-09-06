import React from 'react'
// import avatar from "../assets/avatar.png"
import { MdKeyboardDoubleArrowRight } from "react-icons/md"
import { Link } from "react-scroll"
import Typed from 'typed.js'


const Home = () => {
  const el = React.useRef(null)
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['I am a FrontEnd, BackEnd SoftWare &amp; QA Engineer!'],
      typeSpeed: 50,
    })
    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <div name="home"
      className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>


      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row '>
        <div className='flex flex-col justify-center h-full'>
          <h4 className='text-2xl sm:text-1xl font-bold text-white '>

            Hi, My Name is Sonika !
          </h4>
          <div className="text-blue-900 max-w-sm font-bold">
            <span ref={el} />
          </div>
          <p className='text-gray-500 py-4 max-w-md'>
            Certification CTFL from ASTQB,
            A skilled and motivated software engineer and certified testing professional seeking a challenging SDET position.
          </p>

          <div>
            <Link to='experience'
              smooth duration={500}
              className='group text-white w-fit px-6 py-3 my-1 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
              Portifolio <span className='group-hover:rotate-90 duration-300'>
                <MdKeyboardDoubleArrowRight size={25} className="ml-1" />

              </span>

            </Link>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Home
