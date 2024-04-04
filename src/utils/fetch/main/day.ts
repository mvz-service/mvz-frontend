import axios from "axios";
import { MOVIE_API } from "../../../constants/api";
import moment from "moment";
import { DailyType } from "../../../types/DailyType";

const API_JSON = "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json";

// 일별 무비 데이터 가져오기
export const dayAxios = async ()=>{

  try {
    const response = await axios.get(API_JSON,{
      params : {
        key : MOVIE_API,
        targetDt : moment().subtract(1,"days").format('YYYYMMDD') // 일주일전으로 가져옵니다.
      }
    });

    const {data : {boxOfficeResult}} : {data : {boxOfficeResult : DailyType}} = response;

    return boxOfficeResult;

  }
  catch(e){
    console.error(e);
    return;
  }

}