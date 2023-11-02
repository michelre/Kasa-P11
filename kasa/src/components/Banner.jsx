import React from 'react'

const Banner = ({image, alt, title}) => {
    return (
        <div className="banner">
        <h1 className="banner-title">{title}</h1>
            {(image) ? <img className="banner-image" src={image}/> : ''}
        </div>
    )
}

export default Banner;