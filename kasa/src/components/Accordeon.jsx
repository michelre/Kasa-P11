import {useState} from 'react'

const Accordeon = ({title, children}) => {

    const [display, setDisplay] = useState(false)

    return <div>
        <button onClick={() => setDisplay(!display)}>{title}</button>
        <div style={{display: display ? 'block' : 'none'}}>{children}</div>
    </div>
}

export default Accordeon;