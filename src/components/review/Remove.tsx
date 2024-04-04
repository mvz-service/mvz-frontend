import { IoTrashBin } from "react-icons/io5";
import { MySwal } from "../../utils/MySwal";
import { removeAxios } from "../../utils/fetch/review/remove";

export default function Remove({id} : {id : string}){

    const onClick = async (id : string)=>{

        if(!id) return await MySwal.fire({icon : "error", text : "에러가 발생했습니다."});

        await MySwal.fire({
            icon : "question",
            text : "정말 삭제하시겠습니까?",
            showDenyButton: true,
            confirmButtonText: "네",
            denyButtonText: `아니요`
        })
        .then( async (result)=>{
            if(result.isConfirmed){
            const deleteResult = await removeAxios(id);
            if(deleteResult){
                MySwal.fire({
                    icon : "success",
                    text : "삭제가 완료 되었습니다."
                })
            }else{
                MySwal.fire({
                    icon : "error",
                    text : "에러가 발생하였습니다."
                })
            }
            }
        })

    }

    return (
        <IoTrashBin className="ml-2 cursor-pointer text-red-400" onClick={()=>{onClick(id)}}/>
    )
  
}