import React from "react"
import { IoCreate, IoStarOutline, IoStarSharp } from "react-icons/io5"
import { auth } from "../../firebase";
import { Link, useNavigate } from "react-router-dom";
import moment from "moment";
import { useReviews } from "../../hook/useReview";
import Remove from "./Remove";
import { MySwal } from "../../utils/MySwal";
import { useSetRecoilState } from "recoil";
import { reviewState } from "../../recoil/review/atom";

export default function List({movieCd,movieName,userId} : {movieCd? : string, movieName? : string, userId? : string}) {

    const user = auth.currentUser;
    const navigate = useNavigate();
    const reviews = useReviews(movieCd,userId);
    const setReviewState = useSetRecoilState(reviewState);

    const writeHandler = (movieCd : string)=>{
        if(!user) {
            return MySwal.fire({
                icon : "warning",
                text : "로그인을 하셔야 작성하실수 있습니다."
            })
            .then(()=>{
                navigate(`/login`);
            })
        }

        setReviewState(prev=>({
            ...prev,
            name : movieName || "",
        }));

        navigate(`/review/write/${movieCd}`);
    }

    return (
        <>
            <div className="flex justify-between">
                <h2 className="text-lg font-bold text-point-color md:text-xl">리뷰 {reviews ? <span className="text-sm">({reviews.length})</span> : ""}</h2>
                {
                    movieCd ?
                        <button 
                            className="rounded-xl bg-point-color text-white px-5 py-2 text-sm" 
                            onClick={()=>writeHandler(movieCd)}
                        >리뷰 작성</button>
                    : null
                }
            </div>

            <div className="flex flex-col gap-5 mt-3">

                {reviews?.map((review,index)=>(
                    <div key={index} className="border border-point-color box-border p-4 rounded-lg">
                        <div className="border-b pb-2">
                            <div className="font-medium flex justify-between">
                                <div className="flex items-center">
                                    <div className="rounded-full w-8 h-8 border border-point-color relative overflow-hidden">
                                        <img src={review.profilePhoto} alt="유저 이미지" className="absolute left-0 top-0 object-cover w-full h-full" />
                                    </div>
                                    <p className="ml-2 text-xs">{review.userName}</p>
                                </div>
                                <div className="flex items-center text-base text-yellow-500">
                                    {
                                        [1,2,3,4,5].map(e=>(
                                            <React.Fragment key={e}>
                                                {review.star >= e 
                                                ?
                                                <IoStarSharp
                                                    className="text-yellow-400 inline-block" 
                                                />
                                                :
                                                <IoStarOutline
                                                    className="inline-block"
                                                />}
                                            </React.Fragment>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        
                        <div className="mt-2">
                            {
                                !movieCd 
                                ?
                                    <p className="text-point-color text-sm">{review.movieNm}</p>
                                :
                                null
                            }
                            <p className="text-base">{review.description}</p>
                        </div>

                        <div className="flex justify-between items-center mt-2">
                            <p className="text-xs text-slate-500">{moment(review.createdAt).format("YYYY.MM.DD")}</p>
                            {
                                user?.uid === review.userId &&
                                <div className="flex text-xl">
                                    <Link 
                                        to={`/review/edit/${review.id}`}
                                    >
                                        <IoCreate className='cursor-pointer text-point-color' />
                                    </Link>
                                    <Remove id={review.id}/>
                                </div>
                            }
                        </div>
                    </div>
                ))}

            </div>
        </>
    )

}

