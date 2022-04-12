import React from 'react'
import './FeatureGroup.css'

import v_4k from '../../assets/images/features/4k.png';
import battery from '../../assets/images/features/battery-status-full.png'
import liveStreaming from '../../assets/images/features/live-streaming.png';
import axis_3 from '../../assets/images/features/video-camera.png';
import radio from '../../assets/images/features/radio.png';
import easy from '../../assets/images/features/pilot.png';



function FeatureGroup() {
  return (
    <div className='myContainer mx-auto grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-y-8 lg:text-lg text-center font-medium'>
      <div className='w-16 md:w-28 mx-auto'>
        <div className=''><img src={v_4k} alt="" /></div>
        <div className='mt-4'>4K@60fps</div>
      </div>
      <div className='w-16 md:w-28 mx-auto'>
        <div className=''><img src={battery} alt="" /></div>
        <div className='mt-4'>30 Mins Flight Time</div>
      </div>
      <div className='w-16 md:w-28 mx-auto'>
        <div className=''><img src={liveStreaming} alt="" /></div>
        <div className='mt-4'>Live Video Feed</div>
      </div>
      <div className='w-16 md:w-28 mx-auto'>
        <div className=''><img src={axis_3} alt="" /></div>
        <div className='mt-4'>3-axis Gimbal Stabilization</div>
      </div>
      <div className='w-16 md:w-28 mx-auto'>
        <div className=''><img src={radio} alt="" /></div>
        <div className='mt-4'>5 Kms Range</div>
      </div>
      <div className='w-16 md:w-28 mx-auto'>
        <div className=''><img src={easy} alt="" /></div>
        <div className='mt-4'>Easy To Fly</div>
      </div>
    </div>
  )
}

export default FeatureGroup