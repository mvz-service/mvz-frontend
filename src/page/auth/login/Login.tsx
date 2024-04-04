import { FirebaseError } from "firebase/app";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../../firebase";
import { MySwal } from "../../../utils/MySwal";
import { firebase_errors } from "../../../constants/error";
import Input from "../../../components/common/form/Input";
import Btn from "../../../components/common/form/Btn";

export default function Login() {

  const navigate = useNavigate();
  const [email,setEmail] = useState('');
  const [pwd,setPwd] = useState('');

  const onChange = (e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{

    e.preventDefault();

    const {target : {name,value}} = e; // target을 가져오고 target 안의 name ,value 을 가져오기

    switch(name){
      case "email":
        setEmail(value);
        break
      case "pwd":
        setPwd(value);
        break
    }

  }

  const onSubmit = async (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();

    if(email === "" || pwd === "") return MySwal.fire({text : "아이디 혹은 비밀번호를 입력해주세요"});

    try {
      await signInWithEmailAndPassword(auth,email,pwd);
      navigate('/');
    }
    catch(e){
      if(e instanceof FirebaseError){
        await MySwal.fire({
          text : firebase_errors[e.code]
        });
      }
    }

  }

  return (
    <div className="container mx-auto py-40 px-4 font-pretendard tracking-custom">
      <div className="border-2 border-point-color rounded-3xl overflow-hidden py-20 max-w-md mx-auto bg-white">
        
        <div
          className="mx-auto px-8"
        >

          <h3 className="text-point-color font-bold text-2xl text-center">로그인</h3>
          
          <form onSubmit={onSubmit}>

            <div
              className=" flex flex-col gap-3 mt-7 "
            >
              <Input
                type="email" 
                name="email"
                placeholder="이메일을 입력해주세요."
                onChange={onChange}
                required={false}
              />
              <Input 
                type="password" 
                name="pwd"
                placeholder="비밀번호를 입력해주세요." 
                onChange={onChange}
                required={false}
              />
            </div>

            <div
              className=" text-center mt-5 "
            >
              <Btn type="submit">로그인</Btn>
            </div>

          </form>

          <div
            className=" text-center mt-4 "
          >
            <Link 
              className=" text-point-color text-sm "
              to={'/sign'}
            >처음이신가요? 회원가입</Link>
          </div>

          <nav className=" flex gap-3 justify-center mt-4 ">
            {/* <Google_Btn/> */}
            {/* <GitHub_Btn/> */}
          </nav>

        </div>

      </div>
    </div>
  )
}