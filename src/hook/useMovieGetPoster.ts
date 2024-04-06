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

    },[moviecode])

    return poster;

}