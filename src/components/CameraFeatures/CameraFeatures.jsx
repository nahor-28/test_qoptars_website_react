import React from 'react'
import './CameraFeatures.css'
import Feature from './Feature/Feature'

const CameraFeatures = () => {
  return (
    <section>
        <div className='myContainer camerafeatures'>
            <h1>All time legendary camera is with Airdian.</h1>
            <p>GoPro® - The all time people's favourite action camera, trusted for its quality and performance now comes with Airdian. </p>
            <Feature image={'/assets/videos/480p-gopro-4k_2.mp4'} text={['Killer 4K@60fps Videos.', '12 megapixel photos']} shift={'left'}/>
            <Feature image={'assets/videos/480-gimble.mp4'} text={['3-Axis Mechanical Gimbal.', 'Camera inbuilt hypersmooth stabilisation']} shift={'right'}/>
            <Feature image={'assets/videos/480-DC-angle.mp4'} text={['Detachable Camera.', 'Capture all the action even without flying']} shift={'left'}/>
            {/* <Feature image={''} text={['Linear/Wide', 'See the world the way you want']} shift={'right'}/> */}

        </div>
    </section>
  )
}

export default CameraFeatures