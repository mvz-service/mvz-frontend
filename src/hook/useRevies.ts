import { Unsubscribe } from "firebase/auth";
import { collection, onSnapshot, orderBy, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { FirebaseError } from "firebase/app";
import { ReviewType } from "../types/ReviewType";

export const useReviews = (movieCd? : string, userId? : string)=>{
    
    const [reviews,setReviews] = useState<ReviewType[]>([]);

    useEffect(()=>{

        let unsubscribe : Unsubscribe | null;

        const fetchReview = async (movieCd? : string, userId? : string)=>{

            try {
            
                let fetchQuery;
            
                if(movieCd && movieCd !== "") {
                
                    fetchQuery = query(
                        collection(db,"reviews"),
                        where("movieId","==",movieCd),
                        orderBy('createdAt','desc')
                    );
            
                }else{
            
                    fetchQuery = query(
                        collection(db,"reviews"),
                        where("userId","==",userId),
                        orderBy('createdAt','desc')
                    );
            
                }
                
                unsubscribe = onSnapshot(fetchQuery,(snapshot)=>{ // onSnapshot() 실시간으로 데이터를 가져와줍니다.
                    const reviews = snapshot.docs.map(doc=>{
                        const {movieId,userName,description,star,profilePhoto,movieNm,createdAt,userId} = doc.data();
                        return {
                            movieId,
                            userName,
                            description,
                            star,
                            profilePhoto,
                            movieNm,
                            createdAt,
                            userId,
                            id : doc.id
                        };
                    });
                    setReviews(reviews);
                })

            }
            catch(e){
                if(e instanceof FirebaseError){
                    console.log(e.code, e.message);
                }
                return [];
            }
        
        }

        fetchReview(movieCd,userId);

        return ()=>{
            unsubscribe && unsubscribe();
        }

    },[]);

    return reviews;

}
