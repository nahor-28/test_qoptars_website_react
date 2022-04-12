import React from 'react'
import './Video.css'
import video1 from '../../assets/videos/pexels.mp4'

function Video() {
  return (
    <section>
      <div className='myContainer mx-auto relative'>
        <video className='relative -z-10'>
          <source src={video1} />
        </video>
        <div className='absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 text-center'>
          <div className='font-semibold text-3xl md:text-5xl lg:text-6xl xl:text-7xl mb-4'>
            Lorem Ipsum
          </div>
          <div className='invisible sm:visible md:text-lg lg:text-xl'>
            Lorem ipsum dolor sit amet consectetur.
          </div>
        </div>
      </div>
    </section>
  )
}

export default Video
{/* <div class="relative myContainer mx-auto">
  <div class="z-50 flex flex-col">
    <div class="text-4xl md:text-5xl lg:text-7xl font-bold mb-3 mx-auto pt-20 sm:pt-32 md:pt-44 lg:pt-56">Lorem Ipsum</div>
    <div class="text-xl text-center invisible sm:visible mx-auto px-20 ">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div>
  </div>
  <video autoPlay loop playsInline class="absolute top-0 left-0 -z-50">
    <source src={video1} type="video/mp4" />
  </video> 
</div> */}