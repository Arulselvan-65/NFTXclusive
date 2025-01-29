const Button = (props : any) => {
    return(
        <button onClick={props.onclick} type="button" className={`h-10 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold shadow-md text-[16px] rounded-lg w-36`}>
            <span> {props.text}</span>
        </button>
    )
}


export default Button;