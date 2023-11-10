import {useState} from 'react'
import PropTypes from 'prop-types';


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


    return <div>
        <button onClick={() => previous()}>&lt;</button>
        <button onClick={() => next()}>&gt;</button>
        <p>{idx + 1} / {pictures.length}</p>

        <div className="slider">
            <div className="slider-container"  style={{transform: `translateX(-${idx * 100}%)`}}>
                {pictures.map((p, idx) => <img src={p} key={`slider-${idx}`}/>)}
            </div>
        </div>
    </div>
}

Slider.propTypes = {
    pictures: PropTypes.array
}

export default Slider;