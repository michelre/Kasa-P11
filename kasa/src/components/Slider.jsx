import {useState} from 'react'
import PropTypes from 'prop-types';
import LeftArrow from "../assets/chevron-left.svg";
import RightArrow from "../assets/chevron-right.svg";

const Slider = ({pictures}) => {
    const [idx, setIdx] = useState(0)

    const previous = () => {
        if(idx === 0){
            setIdx(pictures.length - 1)
            return
        }
        setIdx(idx - 1)
    }

    const next = () => {
        if(idx === (pictures.length - 1)){
            setIdx(0)
            return
        }
        setIdx(idx + 1)
    }

    return <div className="caroussel">
                <div className="slider">
                    <div className="slider-container"  style={{transform: `translateX(-${idx * 100}%)`}}>
                        {pictures.map((p, idx) => <img src={p} key={`slider-${idx}`}/>)}
                    </div>
                </div>
                {pictures.length > 1 ?
                    <div className="slider-infos">
                        <a onClick={() => previous()} className="slider-chevron-left"><img className="banner-image"
                                                                                           src={LeftArrow} alt="leftarrow"/></a>
                        <a onClick={() => next()} className="slider-chevron-right"><img className="banner-image"
                                                                                        src={RightArrow} alt="rightarrow"/></a>
                    </div>
                : ''}
                <p>{pictures.length > 1 ? `${idx + 1} / ${pictures.length}` : ''}</p>

            </div>
}

Slider.propTypes = {
    pictures: PropTypes.array
}

export default Slider;
