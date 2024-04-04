interface TextareaInterface {
    id? : string;
    placeholder : string;
    name? : string;
    onChange? : React.ChangeEventHandler<HTMLTextAreaElement>;
    value? : string;
  }
  
export const Textarea = ({id,name,onChange,placeholder,value} : TextareaInterface)=>{
    return (
      <textarea 
        className="border-2 p-2 h-20 w-full border-point-color rounded-md overflow-hidden text-sm resize-none font-pretendard tracking-custom"
        id={id}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
      ></textarea>
    )
}