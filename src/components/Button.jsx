const Button = (props) => {
    const {text} = props;

    return(
        <button className="btn btn-primary">{text}</button>
    )
}

export default Button;