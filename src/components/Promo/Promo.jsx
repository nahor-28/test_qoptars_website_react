import React from 'react'
import './Promo.css'
import video from '../../assets/videos/pexels2.mp4'

const Promo = () => {
  return (
    <section>
        <div className='myContainer promo'>
            <h1>Capture the highest quality photos & videos with Airdian.</h1>
            <p>
                It promises Stunning detail, Hypersmooth video, Stability and reliability. 
                A highly stable drone with rigid body and a GoPro® Hero 7  attached makes aerial videography  and photography a smooth and fun process. 
                Adding to that, learning how to fly  is so easy that anyone can fly without any prior experience.
            </p>
            <h2>Time flies, But memories stay. Keep your moments alive forever with Airdian.</h2>
            <video width="1200" controls autoPlay>
                <source src={video} type="video/mp4"/>
            </video>
        </div>
    </section>
  )
}

export default Promo