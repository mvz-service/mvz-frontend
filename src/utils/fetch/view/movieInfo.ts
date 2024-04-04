import axios from "axios";
import { MOVIE_API } from "../../../constants/api";
import { MovieInfoType } from "../../../types/movieInfoType";

const API_JSON = "http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json";

// 영화 정보
export const movieInfoFetch = async (movieCd : string) => {

    if(!movieCd) return undefined;
  
    const response = await axios.get(API_JSON,{
      params : {
        key : MOVIE_API,
        movieCd : movieCd
      }
    });
    const {data : {movieInfoResult}} : {data : { movieInfoResult : MovieInfoType}} = response;  
    
    return movieInfoResult;

  }