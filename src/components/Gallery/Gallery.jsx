import React from 'react'
import './Gallery.css'
import photo_0 from '../../assets/images/gallery-0.jpg';
import photo_1 from '../../assets/images/gallery-1.jpg';
import photo_2 from '../../assets/images/gallery-2.jpg';
import photo_3 from '../../assets/images/gallery-3.jpg';
import photo_4 from '../../assets/images/gallery-4.jpg';

function Gallery() {
  return (
    <section>
      <div className="gallery_image">
        <div className=""><img className="h-full object-cover object-center" src={photo_0} alt="" /></div>
      </div>
  </section>
  )
}

export default Gallery