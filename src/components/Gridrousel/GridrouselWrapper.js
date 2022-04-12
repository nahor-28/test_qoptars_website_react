import React from 'react'
import Gridrousel from './index';
import photo_0 from '../../assets/images/gallery-0.jpg';
import photo_1 from '../../assets/images/gallery-1.jpg';
import photo_2 from '../../assets/images/gallery-2.jpg';
import photo_3 from '../../assets/images/gallery-3.jpg';
import photo_4 from '../../assets/images/gallery-4.jpg';

function GridrouselWrapper() {
  return (
    <Gridrousel>
        <div className='col-span-2 row-span-2 object-fill'><img src={photo_0} alt='' /></div>
        <div><img src={photo_1} alt='' /></div>
        <div><img src={photo_2} alt='' /></div>
        <div><img className='h-full' src={photo_3} alt='' /></div>
        <div><img src={photo_4} alt='' /></div>
    </Gridrousel>
  )
}

export default GridrouselWrapper