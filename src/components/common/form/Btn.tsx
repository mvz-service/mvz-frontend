interface BtnInterface {
    children : React.ReactNode;
    type? : "button" | "reset" | "submit";
    className? : string
}
  
export default function Btn({children,type,className} : BtnInterface){
  
    return (
        <button 
            type={type}
            className={`py-2 px-12 text-white bg-point-color rounded-md text-sm font-pretendard tracking-custom ${className}`}
        >
            {children}
        </button>
    )

}