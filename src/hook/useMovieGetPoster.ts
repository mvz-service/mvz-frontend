import axios from "axios";
import { useEffect, useState } from "react"

export const useMovieGetPoster = (moviecode : string)=>{

    const [poster,setPoster] = useState<string | null>(null);

    useEffect(()=>{

        axios.get(`/api/movie/poster/${moviecode}`,{responseType : "blob"}) // blob 타입으로 가져옵니다.
        .then(response=>{
            const reader = new FileReader(); // 파일을 읽어줍니다.
            reader.onloadend = () =>{
                if(typeof reader.result === "string"){ // 문자열 일경우
                    setPoster(reader.result);
                }
            }
            reader.readAsDataURL(response.data);
        })
        .catch(_=>{
            console.error('포스터를 가져오는데 에러가 발생했습니다.');
        })

    },[moviecode])

    return poster;

}