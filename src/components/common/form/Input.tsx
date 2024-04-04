type InputProps = {
    placeholder : string,
    type : "text" | "password" | "email",
    id? : string,
    name? : string,
    required? : boolean,
    disabled? : boolean,
    value? : string,
    onChange? : React.ChangeEventHandler<HTMLInputElement>
}
  
export default function Input({value,placeholder,type,id,name,required,disabled,onChange} : InputProps){
    return (
      <input 
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
        value={value}
        disabled={disabled}
        autoComplete="off"
        className="border-2 px-2 h-10 w-full border-point-color rounded-md overflow-hidden text-sm disabled:border-gray-300 disabled:text-gray-500 font-pretendard tracking-custom"
      />
    )
}