import React from 'react'
import "./Banner.css";

const Banner = ({image, alt, title}) => {
    return (

        <div className="banner">
        {(image) ? <img className="banner-image" src={image}/> : ''}
            {title ? <div className="banner-container">
                <h1 className="banner-title">{title}</h1>
            </div> : ''}
        </div>
        
    )
}

export default Banner;