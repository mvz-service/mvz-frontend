import axios from "axios";
import { MOVIE_API } from "../../../constants/api";
import { CompanyListType } from "../../../types/CompanyListType";

const API_JSON = "http://www.kobis.or.kr/kobisopenapi/webservice/rest/company/searchCompanyList.json";

// 영화사 목록
export const companyListAxios = async (page : number, companyNm? : string, ceoNm? : string) =>{

    const response = await axios.get(API_JSON,{
        params : {
            key : MOVIE_API,
            curPage : page.toString(),
            itemPerPage : "10",
            companyNm,
            ceoNm
        }
    });

    const {data : {companyListResult}} : {data : {companyListResult : CompanyListType}} = response;

    return companyListResult;

}