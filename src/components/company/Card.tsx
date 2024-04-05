import { CompanyList } from "../../types/CompanyListType";
import companyImage from "../../asset/image/company.jpg";

export function Card({list} : {list : CompanyList}){

    return (
        <div className="border border-point-color rounded-md p-5">
            <div className="flex flex-col min-[480px]:flex-row gap-3 sm:gap-5">
                <div className="h-28 w-28 md:h-40 md:w-40 bg-purple-100 flex-none relative">
                    <img src={companyImage} className="absolute top-0 left-0 object-cover w-full h-full" alt="영화사 사진" />
                </div>
                <div>
                <p className="text-point-color font-bold text-lg">{list.companyNm}</p>
                <p className="text-sm"><span className="text-point-color">영화사 분류</span> : {list?.companyPartNames}</p>
                <p className="text-sm"><span className="text-point-color">대표</span> : {list?.ceoNm}</p>
                </div>
            </div>
            <div className="mt-2">
                <p className="text-point-color font-bold text-base">필모리스트</p> 
                <p className="text-sm text-ellipsis overflow-hidden line-clamp-2">{list?.filmoNames}</p>
            </div>
        </div>
    )
    
}