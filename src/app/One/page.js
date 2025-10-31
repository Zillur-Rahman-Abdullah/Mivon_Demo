import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { LuDot } from 'react-icons/lu'


import { PiMoonLight } from 'react-icons/pi'

const page = () => {
  return (
    <div>
      <div className='bg-black h-full'>
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
          <span className='text-[55px] font-bold'>Blending creativity &<br />
            strategy to build brands<br />
            & <span className='text-[#8B8B8B] underline'>design websites.</span></span>
        </div>
        <div className='grid grid-cols-3 px-13 pt-32'>
          <div className='space-y-2 mt-32'>
            <div className='flex gap-2' >
              <div className='h-8 w-30 rounded-full border border-white flex justify-center items-center' >UI/UX Design</div>
              <div className='h-8 w-30 rounded-full border border-white flex justify-center items-center' >Development</div>
              <div className='h-8 w-30 rounded-full border border-white flex justify-center items-center' >SEO &SMM</div>
            </div>
            <div className='h-8 w-30 rounded-full border border-white flex justify-center items-center' >MARKETING</div>
          </div>
          <div className='flex justify-center '>
            <img src="/images/shape1.png" className="h-[18%]" />
          </div>
          <div className='mb-50 flex flex-col space-y-10'>
            <div className=''>
              <p>We build brands that shape places and move</p>
              <p>people. We partner with bold thinkers who see</p>
              <p>design as a catalyst for change - visionaries who</p>
              <p>shape places and redefine spaces.</p>
            </div>
            <div className="h-12 w-40 p-1 overflow-hidden   bg-white rounded-lg text-black flex justify-center items-center space-x-1.5   hover:bg-[#1D1D1D] transition-all duration-500 hover:text-white ">
              <span>KNOW MORE</span>
              
               
              <span className='bg-black p-2 rounded-lg'><FaArrowRightLong color="white " />
                                                
              </span>

              
              


            </div>
          </div>
        </div>
        <div className='grid grid-cols-3 gap-x-3 '>
          <div className=" h-70   rounded-2xl">
            <img src="images/w11.jpg" className='rounded-lg h-70 w-full' />
          </div>

          <div className=" h-70   rounded-2xl">
            <img src="images/w1.png" className='rounded-lg h-70 w-full' />
          </div>
          <div className=" h-70   rounded-2xl">
            <img src="images/w3.jpg" className='rounded-lg h-70 w-full' />
          </div>
        </div>   
        <div className='px-10 py-5 flex justify-center flex-col '>
          <div className='flex justify-center '>
            <LuDot size={'25'} />
            <p className='text-[20px] font-bold'>About Agency</p></div>
          <div className='flex-col flex text-center '>
            <p className="text-[35px]">We build bold identities that speak your story</p>
            <p className="text-[35px]">visually and verbally, from websites to</p>
            <p className="text-[35px]">packaging, we design experiences that are</p>
            <p className="text-[35px]">beautiful and functional, we don’t just make</p>
            <p className="text-[35px]">things look good.</p>

          </div>
           <hr></hr>
        </div>
        <div className='grid grid-cols-3 px-8 '>
          <div className='flex '><LuDot size={'25'} /><p className='text-[20px]'>Services</p></div>
          <div className='text-[45px]'><span className='text-[#B9B9B9]'>Our</span><br/><span >Capabilities.</span></div>
          <div className='flex justify-end'><button className='flex cursor-grab '><p className='text-[20px]'>See Price</p><div className='bg-white h-6 w-6 rounded-full flex justify-center items-center'><FaArrowRightLong color="black"/>
</div></button></div>
        </div>
        <div className='grid grid-cols-3'>
          <div className='bg-black w-full h-180'>
            <img src="/images/mshap1.png" className='bottom-0 right-0 h-[50%] w-[50%]'></img>
          </div>
          <div  className='bg-white w-full h-180'>66</div>
          <div  className='bg-black w-full h-180'>77</div>
        </div>
        
      </div>
    </div>
  )
}

export default page
