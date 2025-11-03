
'use client'
import { FaArrowRightLong } from "react-icons/fa6";
import { IoSunnyOutline } from "react-icons/io5";
import { PiMoonLight } from "react-icons/pi";
import { LuDot } from "react-icons/lu";
import { Scrollbar } from "smooth-scrollbar-react";
import { IoIosStarOutline } from "react-icons/io";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaChevronCircleUp } from "react-icons/fa";
import Navbar from "./components/Navbar";

const page = () => {
  return (
    <div>

      <Navbar topBar={true} />

      <Scrollbar
        damping={0.8}
        thumbMinSize={25}
        renderByPixels={false}
        alwaysShowTracks={false}
        continuousScrolling={true}
      >
        <div className=' flex-col gap-y-3.5 h-full pt-[60px]'>

          <div className=''>
            <div className='px-26 py-13'>
              <h3 className='text-center text-[#DDF160]'>Your Awesome website here!</h3>
              <p className='text-[50px]  text-center'>Build Agency Website with</p>
              <p className='text-[50px]  text-center px-10'>Mivon - HTML Template</p>
            </div>
            <div className='grid grid-cols-5 px-13 space-x-4'>
              <div className='col-span-2 bg-[#DDF160] rounded-4xl  flex '>
                <div className='grid grid-cols-2  '>
                  <div className='flex-col col-span-1'><img src='images/mshap1.png' className='' />
                    <div className='pl-8 pt-10 flex space-x-1 pb-5'><span className='text-black'>Light</span><span className='h-6 w-12 rounded-full border-1 border-black flex justify-between items-center px-0.5'><IoSunnyOutline color='gray' /><span className='h-5 w-5  rounded-full bg-black'><PiMoonLight color="white" />
                    </span>
                    </span><span className='text-black'>Dark</span></div>
                  </div>
                  <div className=' flex flex-col pl-24 pt-8 '>
                    <span className='text-[60px] text-black ml-16'>03</span>
                    <span className='text-[#5F5F4E]'>Weekly new demos</span>
                    <span className='text-[#5F5F4E] ml-6'>regular updates</span>
                    <div className="border border-gray-600 h-8 w-35 rounded-full flex justify-center items-center mt-37"><LuDot color="black" size={'30px'} /> <span className='text-black'>24/7 Support</span></div>
                  </div>
                </div>
              </div>
              <div className='col-span-3 h-[400px] bg-[url(/images/cover.jpg)] bg-cover bg-center rounded-lg '>
                {/* <img className='max-h-full w-full' src={'/images/cover.jpg'} /> */}
              </div>

            </div>

            <div className='flex-col pt-20 pb-15'>
              <div className='px-190'>
                <div className='h-9 w-42 border border-white rounded-full flex items-center px-2'><LuDot size={'30px'} />
                  <span className='text-white'>Top Homepages</span></div>
              </div>

              <p className='text-center text-[50px] pl-40'>Unique pre-built Demos</p>
            </div>
          </div>
          <div className='grid grid-cols-2 px-13 gap-x-17 gap-y-17 '>
            <div className="bg-[#1D1D1D] relative border p-2 border-gray-700/50 h-120  hover:border-amber-200 transition-all duration-500 rounded-[30px]">
              <div className='h-full relative overflow-hidden hover:overflow-visible hover:*:bottom-[50px]'>
                <img className='rounded-[30px] h-full' src={'https://fastly.picsum.photos/id/15/2500/1667.jpg?hmac=Lv03D1Y3AsZ9L2tMMC1KQZekBVaQSDc1waqJ54IHvo4'} />
                <div className='flex items-center justify-center gap-2 absolute left-[190px] bottom-[-50px] transition-all duration-500'>
                  <Link href={'/One'}><button className="px-6 py-3 rounded-full bg-gray-400/10 backdrop-blur-lg text-black cursor-pointer">
                    Multiple Page
                  </button></Link>
                  <button className="px-6 py-3 rounded-full bg-white text-black cursor-pointer">
                    One Page
                  </button>
                </div>
              </div>

              <div>
                <div className='absolute top-[-30px] left-[3px] bg-yellow-300 px-3 py-2  rounded-3xl text-black w-18 text-center mr-5 mt-3'>Hot</div>
              </div>
            </div>
            <div className='bg-[#1D1D1D] p-2 h-120 border border-gray-700/50  hover:border-amber-200 transition-all duration-500 rounded-2xl'>
              <div className='h-full relative overflow-hidden hover:overflow-visible hover:*:bottom-[50px]'>
                <img className='rounded-[30px] h-full' src={'https://fastly.picsum.photos/id/16/2500/1667.jpg?hmac=uAkZwYc5phCRNFTrV_prJ_0rP0EdwJaZ4ctje2bY7aE'} />
                <div className='flex items-center justify-center gap-2 absolute left-[190px] bottom-[-50px] transition-all duration-500'>
                  <button class="px-6 py-3 rounded-full bg-gray-400/10 backdrop-blur-lg text-black cursor-pointer">
                    Multiple Page
                  </button>
                  <button class="px-6 py-3 rounded-full bg-white text-black cursor-pointer">
                    One Page
                  </button>
                </div>
              </div>
            </div>

          </div>

          <div className='grid grid-cols-2 px-13 gap-x-17 pt-9 pb-9'>
            <div className="bg-[#1D1D1D] p-2 h-120 border border-gray-700/50  hover:border-amber-200 transition-all duration-500 rounded-2xl">
              <div className='h-full relative overflow-hidden hover:overflow-visible hover:*:bottom-[50px]'>
                <img className='rounded-[30px] h-full' src={'https://fastly.picsum.photos/id/92/3568/2368.jpg?hmac=k-61p7oMQe6U59dEgm0Gu6bWTJGPfHblWxMskxTBZMo'} />
                <div className='flex items-center justify-center gap-2 absolute left-[190px] bottom-[-50px] transition-all duration-500'>
                  <button class="px-6 py-3 rounded-full bg-gray-300/10 backdrop-blur-lg text-black cursor-pointer">
                    Multiple Page
                  </button>
                  <button class="px-6 py-3 rounded-full bg-white text-black cursor-pointer">
                    One Page
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-[#1D1D1D] relative border p-2 border-gray-700/50 h-120  hover:border-amber-200 transition-all duration-500 rounded-[30px]">
              <div className='h-full relative overflow-hidden hover:overflow-visible hover:*:bottom-[50px]'>
                <img className='rounded-[30px] h-full' src={'https://fastly.picsum.photos/id/15/2500/1667.jpg?hmac=Lv03D1Y3AsZ9L2tMMC1KQZekBVaQSDc1waqJ54IHvo4'} />
                <div className='flex items-center justify-center gap-2 absolute left-[190px] bottom-[-50px] transition-all duration-500'>
                  <button class="px-6 py-3 rounded-full bg-gray-400/10 backdrop-blur-lg text-black cursor-pointer">
                    Multiple Page
                  </button>
                  <button class="px-6 py-3 rounded-full bg-white text-black cursor-pointer">
                    One Page
                  </button>
                </div>
              </div>

              <div>
                <div className='absolute top-[-30px] left-[4px] bg-[#9F8BE7] px-3 py-2  rounded-3xl text-white w-18 text-center  mt-3'>Trend</div>
              </div>
            </div>

          </div>
          <div className='grid grid-cols-3 px-13 gap-x-17 space-y-9'>
            <div className="bg-[#1D1D1D] p-2 h-70 border border-gray-700/50  hover:border-amber-200 transition-all duration-500 flex-col rounded-2xl ">
              <div className='h-60 w-full '>
                <img src="images/9.png" className='rounded-lg' />
              </div>
              <p className='text-[25px] font-bold  flex justify-center items-center mt-[-25]'>Paralax Slider</p>
            </div>

            <div className="bg-[#1D1D1D] p-2 h-70 border border-gray-700/50  hover:border-amber-200 transition-all duration-500 rounded-2xl">
              <div className='h-60 w-full '>
                <img src="images/10.png" className='rounded-lg' />
              </div>
              <p className='text-[25px] font-bold  flex justify-center items-center mt-[-25]'>Paralax Slider</p>

            </div>
            <div className="bg-[#1D1D1D] p-2 h-70 border border-gray-700/50  hover:border-amber-200 transition-all duration-500 rounded-2xl">
              <div className='h-60 w-full '>
                <img src="images/11.png" className='rounded-lg' />
              </div>
              <p className='text-[25px] font-bold  flex justify-center items-center mt-[-25]'>Paralax Slider</p>


            </div>
          </div>

          <div className='grid grid-cols-2 px-13 gap-x-9 '>
            <div className="bg-[#1D1D1D] p-2 h-120 border border-gray-700/50  hover:border-amber-200 transition-all duration-500 rounded-2xl ">
              <div className='h-full relative overflow-hidden hover:overflow-visible hover:*:bottom-[50px]'>
                <img className='rounded-[30px] h-full' src={'https://fastly.picsum.photos/id/15/2500/1667.jpg?hmac=Lv03D1Y3AsZ9L2tMMC1KQZekBVaQSDc1waqJ54IHvo4'} />
                <div className='flex items-center justify-center gap-2 absolute left-[190px] bottom-[-50px] transition-all duration-500'>
                  <button class="px-6 py-3 rounded-full bg-gray-300/10 backdrop-blur-lg text-black cursor-pointer">
                    Multiple Page
                  </button>
                  <button class="px-6 py-3 rounded-full bg-white text-black cursor-pointer">
                    One Page
                  </button>
                </div>
              </div>

            </div>
            <div>
              <div className="bg-[#1D1D1D] p-2 h-120 border border-gray-700/50  hover:border-amber-200 transition-all duration-500 rounded-2xl ">
                <div className='h-full relative overflow-hidden hover:overflow-visible hover:*:bottom-[50px]'>
                  <img className='rounded-[30px] h-full' src={'https://fastly.picsum.photos/id/15/2500/1667.jpg?hmac=Lv03D1Y3AsZ9L2tMMC1KQZekBVaQSDc1waqJ54IHvo4'} />
                  <div className='flex items-center justify-center gap-2 absolute left-[190px] bottom-[-50px] transition-all duration-500'>
                    <button class="px-6 py-3 rounded-full bg-gray-300/10 backdrop-blur-lg text-black cursor-pointer">
                      Multiple Page
                    </button>
                    <button class="px-6 py-3 rounded-full bg-white text-black cursor-pointer">
                      One Page
                    </button>
                  </div>
                </div>

              </div>
            </div>

          </div>
          <div className='grid grid-cols-2 px-13 gap-x-9 pt-9 pb-9'>
            <div className="bg-[#1D1D1D] p-2 h-120 border border-gray-700/50  hover:border-amber-200 transition-all duration-500 rounded-2xl ">
              <div className='h-full relative overflow-hidden hover:overflow-visible hover:*:bottom-[50px]'>
                <img className='rounded-[30px] h-full' src={'https://fastly.picsum.photos/id/15/2500/1667.jpg?hmac=Lv03D1Y3AsZ9L2tMMC1KQZekBVaQSDc1waqJ54IHvo4'} />
                <div className='flex items-center justify-center gap-2 absolute left-[190px] bottom-[-50px] transition-all duration-500'>
                  <button class="px-6 py-3 rounded-full bg-gray-300/10 backdrop-blur-lg text-black cursor-pointer">
                    Multiple Page
                  </button>
                  <button class="px-6 py-3 rounded-full bg-white text-black cursor-pointer">
                    One Page
                  </button>
                </div>
              </div>

            </div>
            <div>
              <div className="bg-[#1D1D1D] p-2 h-120 border border-gray-700/50  hover:border-amber-200 transition-all duration-500 rounded-2xl ">
                <div className='h-full relative overflow-hidden hover:overflow-visible hover:*:bottom-[50px]'>
                  <img className='rounded-[30px] h-full' src={'https://fastly.picsum.photos/id/15/2500/1667.jpg?hmac=Lv03D1Y3AsZ9L2tMMC1KQZekBVaQSDc1waqJ54IHvo4'} />
                  <div className='flex items-center justify-center gap-2 absolute left-[190px] bottom-[-50px] transition-all duration-500'>
                    <button class="px-6 py-3 rounded-full bg-gray-300/10 backdrop-blur-lg text-black cursor-pointer">
                      Multiple Page
                    </button>
                    <button class="px-6 py-3 rounded-full bg-white text-black cursor-pointer">
                      One Page
                    </button>
                  </div>
                </div>

              </div>
            </div>

          </div>
          <div className='grid grid-cols-3 px-13 gap-x-9 space-y-9'>
            <div className="bg-[#1D1D1D] p-2 h-70 border border-gray-700/50  hover:border-amber-200 transition-all duration-500 rounded-2xl">
              <div className='h-60 w-full '>
                <img src="images/12.png" className='rounded-lg' />
              </div>
              <p className='text-[25px] font-bold  flex justify-center items-center mt-[-25]'>Paralax Slider</p>
            </div>

            <div className="bg-[#1D1D1D] p-2 h-70 border border-gray-700/50  hover:border-amber-200 transition-all duration-500 rounded-2xl">
              <div className='h-60 w-full '>
                <img src="images/13.png" className='rounded-lg' />
              </div>
              <p className='text-[25px] font-bold  flex justify-center items-center mt-[-25]'>Paralax Slider</p>
            </div>
            <div className="bg-[#1D1D1D] p-2 h-70 border-2 border-gray-700/50  hover:border-amber-200 transition-all duration-500 rounded-2xl">
              <div className='h-60 w-full '>
                <img src="images/14.png" className='rounded-lg' />
              </div>
              <p className='text-[25px] font-bold  flex justify-center items-center mt-[-25]'>Paralax Slider</p>
            </div>
          </div>

          <div className=''>
            <marquee direction="left" loop="-1" className="">
              <div className='flex justify-center items-center gap-30 py-15'>
                <span className='text-[100px] text-pink-200'>Abdullah</span >
                <img src="images/star.png" className='' />
                <span className='text-[100px]' >Abdullah</span>
                <img src="images/star.png" className='' />
              </div>
            </marquee>
          </div>
          <div className='grid grid-cols-2 px-13 py-9 gap-x-9 '>
            <div className="bg-[#1D1D1D] p-2 h-180 flex-col space-y-15 rounded-2xl ">
              <div className=" pt-7 ">
                <p className='text-center  py-2 w-50 border-2 border-white rounded-full mx-auto'>Perfect on all device</p>
                <span className='text-[50px] flex justify-center py-2'>Responsive</span>
                <span className='text-[15px] flex justify-center text-gray-300 '>Build responsive websites that is designed</span>
                <span className='text-[15px] flex justify-center text-gray-300'>and developed to provide optimal viewing across multiple devices.</span>
              </div>




              <div className=' w-full '>
                <img src="images/respo.png" className='rounded-lg h-108  pl-8 mb-10' />
              </div>


            </div>

            <div className="bg-[#1D1D1D] p-2 h-180 space-y-11 rounded-2xl ">
              <div className=" pt-7 ">
                <p className='text-center  py-2 w-50 border-2 border-white rounded-full mx-auto'>Perfect on all device</p>
                <span className='text-[50px] flex justify-center py-2'>Blog</span>
                <span className='text-[15px] flex justify-center text-gray-300 '>Fantastic, multiple collection of carefully designed</span>
                <span className='text-[15px] flex justify-center text-gray-300'>blog lists, grids, single templates, etc.</span>
                <div className='flex justify-center gap-1.5'>
                  <div className="h-7 w-19 border-1 border-white rounded-full flex justify-center ">Ideas</div>
                  <div className="h-7 w-19 border-1 border-white rounded-full flex justify-center ">Thoughts</div>
                  <div className="h-7 w-21 border-1 border-white rounded-full flex justify-center px-4 ">Inspiration</div>

                </div>
              </div>




              <div className=' w-full '>
                <img src="images/blogs.png" className='rounded-lg h-108  pl-8 mb-14' />
              </div>

            </div>


          </div>
          <div className='bg-[#161616] w-full h-90 pt-20'>

          </div>

        </div>
      </Scrollbar>

      <div className='back flex flex-col justify-center items-center rounded-t-3xl '>
        <p className='text-white text-[12px]   '>BUILD A TOP SITE IN A FEW MOMENTS </p>
        <div className="flex flex-col gap-0">
          <p className='text-white text-[80px]'>Let’s start a top</p>
          <p className='text-white text-[80px] '>creative website</p>
        </div>
        <div>
          <button className="h-13 w-48 rounded-full bg-[#9F8BE7] flex  justify-center items-center gap-x-6 text-[13px] cursor-pointer ">PURCHASE NOW<div className='h-8 w-8 rounded-full bg-black flex  justify-center items-center'><FaArrowRightLong color='white' size={'16'} />
          </div></button>
        </div>
        {/* <div className={ `mt-30 ml-320    `}>
              <button className="h-8 w-8 rounded-full bg-transparent  flex justify-end "><FaChevronCircleUp />

              </button>
            </div> */}


      </div>


      {/* <div className={`${isNavbarFixed ? 'fixed right-0 bottom-[80px] w-full z-50' : 'mt-[80px]'} transition-all duration-500`}>
        <div className={`mt-30 ml-360    `}>
          <button className="h-8 w-8 rounded-full bg-transparent  flex justify-end "><FaChevronCircleUp size={'50'} />

          </button>
        </div>

      </div> */}


    </div>
  )
}

export default page