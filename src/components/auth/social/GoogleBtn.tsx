import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import g_logo from "../../../asset/image/g-logo.png";
import { auth } from "../../../firebase";
import { useNavigate } from "react-router-dom";
import { FirebaseError } from "firebase/app";
import { MySwal } from "../../../utils/MySwal";
import { firebase_errors } from "../../../constants/error";

export function GoogleBtn(){

    const navigate = useNavigate();

    const onClick = async ()=>{

        try {
            const provider = new GoogleAuthProvider();
            await signInWithPopup(auth,provider);
            navigate('/');
        } catch (e){
            if(e instanceof FirebaseError){
                await MySwal.fire({
                    icon : "error",
                    text : firebase_errors[e.code]
                });
            }
        }

    }

    return (
        <button onClick={onClick} className="w-8 h-8 relative">
            <img src={g_logo} alt="구글 로그인" />
        </button>
    )

}