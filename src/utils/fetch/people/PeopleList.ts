import axios from "axios";
import { MOVIE_API } from "../../../constants/api";
import { PeopleListType } from "../../../types/PeopleListType";

const API_JSON = 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/people/searchPeopleList.json';

// 영화인 리스트
export const peopleListAxios = async (page : number,peopleNm? : string, filmoNames? : string)=>{
  
    const res = await axios.get(API_JSON,{
        params : {
            key : MOVIE_API,
            curPage : page.toString(),
            itemPerPage : "12",
            peopleNm,
            filmoNames
        }
    });

    const {data : {peopleListResult}} : {data : {peopleListResult : PeopleListType}} = res;

    return peopleListResult;
  
}
  