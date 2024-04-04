import { FirebaseError } from "@firebase/util";
import { doc, getDoc } from "@firebase/firestore";
import { db } from "../../../firebase";

// 영화 리뷰 내용
export const getReviewAxios = async (docId : string) =>{

    try {
      const docSnap = await getDoc(doc(db,'reviews',docId));
  
      if(docSnap.exists()){
        const {movieId,userName,description,star,profilePhoto,movieNm,createdAt} = docSnap.data();
        return {
          movieId,
          userName,
          description,
          star,
          profilePhoto,
          movieNm,
          createdAt,
          id : docSnap.id
        };
      }
  
    }
    catch(e){
      if(e instanceof FirebaseError){
        console.log(e.code, e.message);
      }
      return undefined;
    }

}