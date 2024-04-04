import axios from "axios";
import { MOVIE_API } from "../../../constants/api";
import moment from "moment";
import { WeeklyType } from "../../../types/weeklyType";

const API_JSON = "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json";

// 주간/주말 무비 데이터 가져오기
export const movieFetch = async (weekGb : string)=>{

    try {
        const response = await axios.get(API_JSON,{
            params : {
                key : MOVIE_API || "",
                targetDt : moment().subtract(7,'days').format("YYYYMMDD"),
                weekGb : weekGb
            }
        });

        const {data : {boxOfficeResult}} : {data: {boxOfficeResult : WeeklyType}} = response;

        return boxOfficeResult;

    }
    catch (e){
        console.error(e);
        return;
    }

}