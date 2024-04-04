import { deleteDoc, doc } from "@firebase/firestore";
import { auth, db } from "../../../firebase";
import { FirebaseError } from "@firebase/util";
import { MySwal } from "../../MySwal";
import { firebase_errors } from "../../../constants/error";

// 영화 리뷰 삭제
export const removeAxios = async (id : string)=>{

    const user = auth.currentUser;
    if(!user) return false;

    try {
        await deleteDoc(doc(db,"reviews",id));
        return true;
    }
    catch(e){
        if(e instanceof FirebaseError){
            MySwal.fire({
                icon : "error",
                text : firebase_errors[e.code]
            })
        }
        return false;
    }

}