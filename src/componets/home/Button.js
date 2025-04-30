const Button = ({children, className}) => {
    return(
        <button className={`bg-[#12AF9B] text-white px-4 py-2 rounded-full ${className}`}>{children}</button>
    )
};
export default Button