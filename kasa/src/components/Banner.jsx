import React from 'react'

const Banner = ({image, alt, title}) => {
    return (
        <div className="banner">
        {(image) ? <img className="banner-image" src={image}/> : ''}
        <h1 className="banner-title">{title}</h1>
            
        </div>
    )
}

export default Banner;