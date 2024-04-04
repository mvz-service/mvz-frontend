import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { useNavigate } from "react-router-dom";
import { MySwal } from "../../../utils/MySwal";
import { auth } from "../../../firebase";
// import { MenuTitle } from "../../component/Mypage/MenuTitle";
// import { Input } from "../../component/Mypage/Input";
// import { Btn } from "../../component/Mypage/Btn";
// import { Label } from "../../component/Mypage/Label";

/* export const InputBox = ({children} : Props)=>{

  return (
    <div className={`block gap-3`}>
      {children}
    </div>
  )

}
 */

export default function Sign() {

  const navigate = useNavigate();

  const [email,setEmail] = useState('');
  const [pwd,setPwd] = useState('');
  const [pwdchk,setPwdchk] = useState('');
  const [nickname,setNickname] = useState('');

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
      case "pwdchk":
        setPwdchk(value);
        break
      case "nickname":
        setNickname(value);
        break
    }

  }

  const onSubmit = async (e : React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();

    if(email === "" || pwd === "" || pwdchk === "" || nickname === "") return;

    if(pwd !== pwdchk) {
      return MySwal.fire({text : '비밀번호가 서로 다릅니다.'}).then(()=>setPwdchk(''));
    }

    try {

      //firebase의 이메일 패스워드 연동
      const credentials = await createUserWithEmailAndPassword(auth,email,pwd);

      // 프로필 업데이트로 이름을 nickname으로 설정
      await updateProfile(credentials.user,{
        displayName : nickname
      });

      MySwal.fire({
        icon : "success",
        text : "회원가입이 완료되었습니다."
      })
      .then(()=>navigate('/login'));

    } catch(e){
      if(e instanceof FirebaseError){
        console.log(e.code,e.message);
      }
    }

  }

  return (
    <div className="container px-4 my-40 mx-auto">
      <div className="border-2 border-point-color px-10 py-20 bg-white rounded-3xl text-left max-w-md mx-auto">
        {/* <MenuTitle>회원가입</MenuTitle> */}
        <form onSubmit={onSubmit}>
          <div className="flex mt-7 gap-4 flex-col max-w-4xl mx-auto">

            {/* <InputBox>
              <label htmlFor="email" className="text-sm">이메일 <span className="text-red-500 ml-1">*</span></label>
              <Input 
                id="email"
                name="email"
                type="email" 
                placeholder="이메일을 입력해주세요"
                onChange={onChange}
                required
              />
            </InputBox> */}

            <input type="email" id="email" name="email" placeholder="이메일을 입력해주세요" onChange={onChange} required />

            {/* <InputBox>
            <label htmlFor="nickname" className="text-sm">닉네임 <span className="text-red-500 ml-1">*</span></label>
              <Input 
                id="nickname" 
                name="nickname" 
                type="text" 
                placeholder="닉네임을 입력해주세요" 
                onChange={onChange}
                required
              />
            </InputBox> */}
            
            <input id="nickname" name="nickname" type="text" placeholder="닉네임을 입력해주세요" onChange={onChange} required/>

            {/* <InputBox>
            <label htmlFor="nickname" className="text-sm">비밀번호 <span className="text-red-500 ml-1">*</span></label>
              <Input 
                id="pwd"
                name="pwd"
                type="password" 
                placeholder="비밀번호을 입력해주세요" 
                onChange={onChange}
                required
              />
            </InputBox> */}
            
            <input id="pwd" name="pwd" type="password"  placeholder="비밀번호을 입력해주세요"  onChange={onChange} required/>

            {/* <InputBox>
            <label htmlFor="nickname" className="text-sm">비밀번호 확인 <span className="text-red-500 ml-1">*</span></label>
              <Input 
                id="pwdchk" 
                name="pwdchk" 
                type="password" 
                placeholder="비밀번호을 다시한번 입력해주세요" 
                onChange={onChange}
                required
              />
            </InputBox> */}
            
            <input id="pwdchk" name="pwdchk" type="password" placeholder="비밀번호을 다시한번 입력해주세요" onChange={onChange} required/>

            <div className="text-center mt-5">
                <button type="submit">회원가입</button>
              {/* <Btn type="submit">회원가입</Btn> */}
            </div>

          </div>
        </form>
      </div>
    </div>
  )

}
