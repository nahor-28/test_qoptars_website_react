import React from 'react'

const ImageComp = ({ src }) => {
    let imgStyles = {
        width: 100 + '%',
        height: "auto"
    }
  return (
    <img src={src} alt='' style={imgStyles}></img>
  )
}

export default ImageComp