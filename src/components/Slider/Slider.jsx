import React, { useState } from 'react'
import ImageComp from './ImageComp'
import './Slider.scss'
import image_1 from '../../assets/images/gallery-0.jpg'
import image_2 from '../../assets/images/gallery-1.jpg'
import image_3 from '../../assets/images/gallery-2.jpg'
import image_4 from '../../assets/images/gallery-3.jpg'
import image_5 from '../../assets/images/gallery-4.jpg'

import { TiChevronLeft, TiChevronRight } from 'react-icons/ti';

const Slider = () => {
    let slideArr = [<ImageComp src={image_1} />, <ImageComp src={image_2} />, <ImageComp src={image_3} />, <ImageComp src={image_4} />, <ImageComp src={image_5} />];
    const [x, setX] = useState(0);

    const goLeft = () => {
        console.log(x);
        x === 0 ? setX(-100 * (slideArr.length - 1)) : setX(x + 100);    }
    const goRight = () => {
        console.log(x);
        x === -100 * (slideArr.length - 1) ? setX(0) : setX(x - 100);
    }

  return (
    <div className='slider'>
        {
            slideArr.map((item, index) => {
                return(
                    <div key={index} className='slide' style={{ transform: `translateX(${x}%)` }}>
                        {item}
                    </div>
                )
            })
        }
        <button id='goLeft' onMouseEnter={goLeft}><TiChevronLeft size={32}/></button>
        <button id='goRight' onMouseEnter={goRight}><TiChevronRight size={32}/></button>
    </div>
  )
}

export default Slider