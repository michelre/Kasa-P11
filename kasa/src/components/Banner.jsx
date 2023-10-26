import React from 'react'

/*
const Banner = ({image, title, alt}) => {
    return (
        <div className="banner">
        <h1 className="banner-title">{title}</h1>
            <img className="banner-image" src={image} alt={alt} />
        </div>
    )
}
*/

const Banner = ({image, alt, title}) => {
    return (
        <div className="banner">
        <h1 className="banner-title">{title}</h1>
            {(image) ? <img className="banner-image" src={image}/> : ''}
        </div>
    )
}

export default Banner;