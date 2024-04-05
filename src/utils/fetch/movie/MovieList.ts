import axios from "axios";
import { MOVIE_API } from "../../../constants/api";
import { MovieListType } from "../../../types/MovieListType";

const API_JSON = "http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json";

type InputData = {
    movieNm? : string,
    directorNm? : string,
    openStartDt? : string, 
    openEndDt? : string,
    prdtStartYear? : string,
    prdtEndYear? : string
}

export const movieListAxios = async (page : number, data? : InputData) =>{
  
    const params = {
        key : MOVIE_API,
        curPage : page.toString(),
        itemPerPage : "12",
        ...data
    }

    try{

        const response = await axios.get(API_JSON,{
            params
        });

        const {data : {movieListResult}} : {data : {movieListResult : MovieListType}} = response;

        return movieListResult;

    }
    catch(e){
        console.error(e);
    }
  
}