import React from 'react'

export default function Btn(
    {btnType,className,type,children, onClick} : 
    {btnType? : "type01" | "type02",className?: string,type : "button"|"submit",children : React.ReactNode, onClick? : React.MouseEventHandler<HTMLButtonElement>}
){

    let btn_color;

    switch(btnType){
        case "type01" :
            btn_color = "bg-point-color text-white"
            break;
        case "type02" :
            btn_color = "bg-red-500 text-white"
            break;
        default :
            btn_color = "bg-point-color text-white"
            break;
    }
    
    return (
        <button
            onClick={onClick}
            className={`${btn_color} text-white text-sm w-24 p-2 rounded-lg font-pretendard tracking-custom ${className}`} 
            type={type}>
                {children}
        </button>
    )
}