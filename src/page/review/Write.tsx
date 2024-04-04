import { IoStarSharp ,IoStarOutline } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { FirebaseError } from "firebase/app";
import { Textarea } from "../../components/common/form/Textarea";
import Btn from "../../components/review/Btn";
import { MySwal } from "../../utils/MySwal";
import { firebase_errors } from "../../constants/error";
import { auth, db } from "../../firebase";
import { useRecoilValue } from "recoil";
import { reviewState } from "../../recoil/review/atom";

export default function Write() {
    
    const user = auth.currentUser;

    const {movieCd} = useParams(); // id 파라미터
    const navigate = useNavigate(); // 내비게이션

    const [star,setStar] = useState(0); // 리뷰 별
    const [description,setDescription] = useState(''); // 내용

    const reviewValue = useRecoilValue(reviewState);

    useEffect(()=>{ // id값이 바뀌면 페이지 맨 위로
        window.scrollTo(0,0);
    },[movieCd])

    const starOnClick = (e : number)=>{ // 별 클릭
        setStar(e);
    }

    const prevOnClick = ()=>{ // 이전페이지
        navigate(-1);
    }

    const descriptionOnChange = (e : React.ChangeEvent<HTMLTextAreaElement>)=>{ // 내용 작성
        setDescription(e.currentTarget.value);
    }

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>)=>{ // 등록하기

        e.preventDefault();

        if(!user || !movieCd) return;

        try {

            const doc = await addDoc(collection(db,"reviews"),{
                movieNm : reviewValue.name,
                movieId : movieCd,
                star,
                description,
                userName : user.displayName, // 닉네임
                userId : user.uid, // 아이디
                createdAt : Date.now(), // 작성일
                profilePhoto : user.photoURL
            });

            if(doc){
                await MySwal.fire({
                    icon : "success",
                    text : "등록이 완료 되었습니다."
                }).then((result)=>{
                    if(result.isConfirmed){
                        navigate(`/view/${movieCd}`);
                    }
                })
            }

        }
        catch (e){
            if(e instanceof FirebaseError){
                MySwal.fire({
                    icon :"error",
                    text : firebase_errors[e.code]
                });
            }
        }

    }

  return (
    <main className="container w-11/12 max-w-4xl my-40 mx-auto">
        <div className="bg-white py-20 px-5 md:px-10 rounded-3xl">
            <h4 className="text-center text-lg font-bold text-point-color md:text-2xl">리뷰 작성 - {reviewValue.name}</h4>
            <form onSubmit={onSubmit}>
                <div className="mt-5">
                    <h2 className="text-lg font-bold text-point-color md:text-xl">만족도</h2>
                    <div className="mt-1">
                        {
                            [1,2,3,4,5].map((e)=>
                                <React.Fragment key={e}>
                                    {star >= e ? 
                                        <IoStarSharp 
                                            onClick={()=>starOnClick(e)} 
                                            className="text-yellow-400 inline-block text-xl cursor-pointer" 
                                        />
                                        : 
                                        <IoStarOutline 
                                            onClick={()=>starOnClick(e)} 
                                            className="text-yellow-400 inline-block text-xl cursor-pointer" 
                                        />
                                    }
                                </React.Fragment>
                            )
                        }
                    </div>
                </div>
                <div className="mt-5">
                    <h2 className="text-lg font-bold text-point-color md:text-xl">내용</h2>
                    <div className="mt-1">
                        <Textarea onChange={descriptionOnChange} placeholder="내용을 입력해주세요."></Textarea>
                    </div>
                </div>
                <div className="flex justify-center mt-5">
                    <Btn onClick={prevOnClick} btnType="type02" type="button">이전으로</Btn>
                    <Btn type="submit" className="ml-2">작성하기</Btn>
                </div>
            </form>
        </div>
    </main>
  )
}