import { useRef, useState } from "react"
import { IoPersonSharp } from "react-icons/io5"
import { FirebaseError } from "firebase/app"
import { signOut, updatePassword, updateProfile } from "firebase/auth"
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import { auth, storage } from "../../../firebase"
import { MySwal } from "../../../utils/MySwal"
import Input from "../../../components/common/form/Input"
import Btn from "../../../components/common/form/Btn"
import { firebase_errors } from "../../../constants/error"

const Container = ({children} : {children : React.ReactNode})=>{
    return (
        <div className="container mx-auto py-40 px-4">
            <div className="border-2 border-point-color rounded-3xl overflow-hidden py-10 px-4 md:p-10 max-w-4xl mx-auto bg-white font-pretendard tracking-custom">
                {children}
            </div>
        </div>
    )
}

const InputBox = ({children} : {children : React.ReactNode})=>{

    return (
        <div className={`block gap-3`}>
        {children}
        </div>
    )
  
}

interface TabBtn {
    children : React.ReactNode;
    onClick? : React.MouseEventHandler<HTMLButtonElement>
    className? : string | null
}

const TabBtn = ({onClick,children,className} : TabBtn)=>{
    return (
        <button onClick={onClick} className={`flex-1 border-2 border-point-color py-2 rounded-lg text-xs md:text-base md:rounded-xl ${className}`}>{children}</button>
    )
}

export default function Mypage() {

    const fileRef = useRef<HTMLInputElement>(null);

    const user = auth.currentUser;
    const [providerId,setProviderId] = useState(user?.providerData[0].providerId); // 로그인 방식
    const [profile,setProfile] = useState(user?.photoURL);
    const [tab,setTab] = useState(false);
    const [nickname,setNickname] = useState('');
    const [pwd,setPwd] = useState('');
    const [pwdchk,setPwdchk] = useState('');

    const onChange = (e : React.ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault();
        const {target : {name,value}} = e;

        if(providerId === "password"){
         
            switch(name){
                case "nickname":
                    setNickname(value);
                    break;
                case "pwd":
                    setPwd(value);
                    break;
                case "pwdchk":
                    setPwdchk(value);
                    break;
            }
            
        }else{

            switch(name){
                case "nickname":
                    setNickname(value);
                    break;
            }

        }

    }

    const onSubmit = async (e : React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();

        if(providerId === "password"){
            if(!user || nickname === "" || pwd === "" || pwdchk === "") {
                return MySwal.fire({icon : "error",text : "입력하지 않는 칸이 존재합니다."});
            }
            if(pwd !== pwdchk){
                return MySwal.fire({icon : "error",text : '비밀번호가 서로 다릅니다.'}).then(()=>setPwdchk(''));
            }
        }else{
            if(!user || nickname === "") {
                return MySwal.fire({icon : "error",text : "입력하지 않는 칸이 존재합니다."});
            }
        }

        try {

            await updateProfile(user,{
                displayName : nickname
            });
            
            if(providerId === "password"){
                await updatePassword(user,pwd);
            }

            await MySwal.fire({
                icon : "success",
                text : "회원정보가 수정되었습니다."
            })
            .then(()=>{
                setNickname('');
                if(providerId === "password"){
                    setPwd('');
                    setPwdchk('');
                }
            });
            

        } catch(e){
            if(e instanceof FirebaseError){
                MySwal.fire({
                    icon : "error",
                    text : firebase_errors[e.code]
                })
                .then(()=>{
                    auth.signOut();
                })
            }
        }

    }

    const profileChange = async (e : React.ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault();

        const {files} = e.currentTarget

        if(!user) return;

        if(files && files.length === 1) {
            const file = files[0];
            const locationRef = ref(storage,`profile/${user.uid}`); // ref() 로 스토리지 지정
            const result = await uploadBytes(locationRef,file); // 업로드
            const avataUrl = await getDownloadURL(result.ref); // 퍼블릭 URL
            await updateProfile(user,{
                photoURL : avataUrl
            });
            setProfile(avataUrl);
        }

    }
    const profileChangeClick = ()=>{
        fileRef.current?.click();
    }

  return (
    <Container>
                
        <h3 className="text-point-color font-bold text-2xl text-center">마이페이지</h3>

        <input type="file" className="hidden" ref={fileRef} onChange={(e)=>profileChange(e)}/>

        <div onClick={profileChangeClick} className='rounded-full border-2 border-point-color w-28 h-28 md:w-32 md:h-32 mx-auto mt-5 bg-cover bg-no-repeat bg-center relative overflow-hidden cursor-pointer'>
            {
                profile ?
                <img className="absolute left-0 top-0 w-full h-full object-cover" src={profile} alt="프로필이미지" />
                :
                <IoPersonSharp className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl text-point-color" />
            }
        </div>
        
        <p className="text-center text-base font-bold mt-5">{user?.displayName}</p>

        <div className="flex justify-between gap-2 md:gap-5 mt-14">
            <TabBtn onClick={()=>setTab(false)} className={!tab ? "bg-point-color text-white" : null} >회원 정보</TabBtn>
            <TabBtn onClick={()=>setTab(true)} className={tab ? "bg-point-color text-white" : null}>작성 리뷰</TabBtn>
        </div>

        {
            !tab ?
                user ?
                <form onSubmit={onSubmit}>
                    <div className="flex gap-8 flex-col mt-5 mx-auto md:gap-4">

                    <InputBox>
                        <label htmlFor="email">이메일 <span className=" text-red-500 ml-1 " >*</span></label>
                        <Input 
                            id="email"
                            name="email"
                            type="email" 
                            placeholder="이메일을 입력해주세요"
                            onChange={onChange}
                            value={user?.email as string}
                            disabled
                        />
                    </InputBox>

                    <InputBox>
                        <label htmlFor="nickname">닉네임 <span className=" text-red-500 ml-1 " >*</span></label>
                        <Input
                            id="nickname" 
                            name="nickname" 
                            type="text" 
                            placeholder="변경할 닉네임을 입력해주세요" 
                            onChange={onChange}
                            value={nickname as string}
                        />
                    </InputBox>

                    {
                        providerId === "password" &&
                        <>
                            <InputBox>
                                <label htmlFor="pwd">비밀번호 <span className=" text-red-500 ml-1 " >*</span></label>
                                <Input 
                                    id="pwd"
                                    name="pwd"
                                    type="password" 
                                    placeholder="변경할 비밀번호을 입력해주세요" 
                                    onChange={onChange}
                                    value={pwd as string}
                                />
                            </InputBox>

                            <InputBox>
                                <label htmlFor="pwdchk">비밀번호 확인 <span className=" text-red-500 ml-1 " >*</span></label>
                                <Input 
                                    id="pwdchk" 
                                    name="pwdchk" 
                                    type="password" 
                                    placeholder="변경할 비밀번호을 다시한번 입력해주세요" 
                                    onChange={onChange}
                                    value={pwdchk as string}
                                    
                                />
                            </InputBox>
                        </>
                    }
                    

                    <div className=" text-center mt-10 ">
                        <Btn type="submit" >회원수정</Btn>
                    </div>

                    </div>
                </form>
                : null
            : 
            <div className="mt-5">
                {/* <Reviews userId={user?.uid}/> */}
            </div>
        }

        


    </Container>
  )
}
