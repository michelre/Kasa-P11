import {useState} from 'react'
import UpArrow from "../assets/chevron-up.png";
import DownArrow from "../assets/chevron-down.png";

const Accordeon = ({title, children}) => {

    const [display, setDisplay] = useState(false)


    return <div className='accordeon'>
                <div className="according-container">
                    <span className='accordeon-header' onClick={() => setDisplay(!display)}>{title}
                        <img src={UpArrow} alt="uparrow" className={display ? 'rotate' : ''}  />
                    </span>
                    <div className='accordeon-description' style={{display: display ? 'block' : 'none'}}>{children}</div>
                </div>
            </div>
}


export default Accordeon;