const Button = (props : any) => {
    return(
        <button onClick={props.onclick} type="button" className={`h-10 bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-white font-semibold text-[16px] rounded-lg w-36 hover:shadow-md hover:shadow-purple-500/25`}>
            <span> {props.text}</span>
        </button>
    )
}


export default Button;