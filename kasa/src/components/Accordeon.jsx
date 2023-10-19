const Accordeon = ({title, children}) => {
    return <div>
        <div>{title}</div>
        {children}
    </div>
}

export default Accordeon;