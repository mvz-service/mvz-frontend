interface TabBtnType {
    children : React.ReactNode;
    onClick? : React.MouseEventHandler<HTMLButtonElement>
    className? : string | null
}

export const TabBtn = ({onClick,children,className} : TabBtnType)=>{
    return (
        <button onClick={onClick} className={`flex-1 border-2 border-point-color py-2 rounded-lg text-xs md:text-base md:rounded-xl ${className}`}>{children}</button>
    )
}