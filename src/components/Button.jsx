
const Button = ({bg = "yellow-400", border = "white", shadow = "white", children}) => {
    const style = `px-6 py-3 border-3 border-${border} 
                    shadow-${shadow} shadow-lg bg-${bg}
                    transition hover:-translate-y-2 hover:-translate-x-2
                    hover:shadow`
    return(
        <button className={style}>
            {children}
        </button>
    )
}
export default Button;