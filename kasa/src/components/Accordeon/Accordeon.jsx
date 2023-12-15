import {useEffect, useRef, useState} from 'react'
import UpArrow from "../../assets/chevron-up.png";
import "./Accordeon.css";

const Accordeon = ({title, children, opened}) => {

    const [display, setDisplay] = useState(null)
    const accordeonContent = useRef(null)

    useEffect(() => {
        setDisplay(opened)
    }, [])


    return <div className='accordeon'>
                <div className="according-container">
                    <span className='accordeon-header' onClick={() => setDisplay(!display)}>{title}
                        <img src={UpArrow} alt="uparrow" className={display ? 'rotate' : ''}  />
                    </span>
                    <div
                        className='accordeon-description'
                        style={{height: display ? `${accordeonContent.current.clientHeight + 40}px` : '0'}}
                    >
                        <div ref={accordeonContent}>{children}</div>
                    </div>
                </div>
            </div>
}

export default Accordeon;