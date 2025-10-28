import React from 'react'

import { PiMoonLight } from 'react-icons/pi'

const page = () => {
  return (
    <div>
        <div className='bg-black h-screen'>
          <div className='flex justify-between  px-13 py-2'>
            <div className='text-[30px] font-bold'>MIVON</div>
            <div className='bg-[#1D1D1D] space-x-19 rounded-lg px-10 py-5 '>
              <button>Home</button>
              <button>Pages</button>
              <button>Works</button>
              <button>Blogs</button>
              <button>Contact Us</button>
            </div>
            
              <button className=' space-x-3 flex p-1 '>
                <span className='text-black mt-1 '>Purchase</span>
                <div className='h-8 w-8 rounded-full bg-[#1E1E1E] p-2 ml-2'><PiMoonLight color="white" /></div>
              </button>
          </div>
          <div className='px-13 pt-32 flex flex-col'>
            <span className='text-[55px] font-bold'>Blending creativity &<br/>
            strategy to build brands<br/>
            & <span className='text-[#8B8B8B] underline'>design websites.</span></span>
          </div>
          <div className='grid grid-cols-3 px-13 pt-32'>
            <div className='space-y-2'>
            <div className='flex gap-2' >
              <div className='h-8 w-30 rounded-full border border-white flex justify-center items-center' >UI/UX Design</div>
              <div className='h-8 w-30 rounded-full border border-white flex justify-center items-center' >Development</div>
              <div className='h-8 w-30 rounded-full border border-white' ></div>
            </div>
               <div className='h-8 w-30 rounded-full border border-white' ></div>
            </div>
            <div className=''></div>
            <div className=' flex flex-col'>
              <span>We build brands that shape places and move</span>
              <span>people. We partner with bold thinkers who see</span>
              <span>design as a catalyst for change - visionaries who</span>
              <span>shape places and redefine spaces.</span>
              <div className=" h-10 w-25 bg-white rounded-lg"></div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default page
