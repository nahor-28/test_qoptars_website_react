import React from 'react'
import './ProFeatures.css'

const ProFeatures = () => {
  return (
    <section className='profeatures_bg'>
        <div className=' profeatures'>
            <div className='featureWrapper align_right'>
                <div className='profeature'>
                    <h2>Strong And Rugged</h2>
                    <p>Always ready for action / Any situation . The most rugged made with fully carbon fibre for wall-breaking strength and lightweight.</p>
                </div>
                <div className='profeature'>
                    <h2>Flight Time</h2>
                    <p>The most ideal flight endurance. Airdian re-engineered intelligent li-ion technology gives you 30 minutes of flight time with a single battery.</p>
                </div>
            </div>
            <div className='profeatures_video'>VIDEO</div>
            <div className='featureWrapper align_left'>
                <div className='profeature'>
                    <h2>Internal sensors</h2>
                    <p>State of the art internal sensors that give the most advanced  redundancy improving your flight performance and safety.</p>
                </div>
                <div className='profeature'>
                    <h2>Camera Control</h2>
                    <p>Click, Capture, Switch.. All you need and right where you need. Control your camera right from the remote controller. Switch from video/photo and capture, Click or stop at just a click of a button.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProFeatures