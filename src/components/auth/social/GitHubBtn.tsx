import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../firebase";
import { IoLogoGithub } from "react-icons/io5";
import { FirebaseError } from "firebase/app";
import { MySwal } from "../../../utils/MySwal";
import { firebase_errors } from "../../../constants/error";

export function GitHubBtn(){

    const navigate = useNavigate();
  
    const onClick = async ()=>{
  
      try {
        const provider = new GithubAuthProvider();
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

        <button className=" w-8 h-8 relative text-3xl ">
            <IoLogoGithub
                onClick={onClick} 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" 
            />
        </button>

    )
  
}