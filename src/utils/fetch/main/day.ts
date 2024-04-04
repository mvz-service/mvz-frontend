import axios from "axios";
import { MOVIE_API } from "../../../constants/api";
import moment from "moment";

const API_JSON = "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json";

// 일별 무비 데이터 가져오기
export const dayFetch = async ()=>{

    if(MOVIE_API) {
  
      try {
        const response = await axios.get(API_JSON,{
          params : {
            key : MOVIE_API,
            targetDt : moment().subtract(1,"days").format('YYYYMMDD') // 일주일전으로 가져옵니다.
          }
        });
  
        const {data} = response;

        console.log(data);
  
        // return boxOfficeResult;
  
      }
      catch(e){
        return null;
      }
  
    }
  
    return null;
    
}