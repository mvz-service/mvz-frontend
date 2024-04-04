import { useParams } from "react-router-dom";
import moment from "moment";
import { useEffect, useState } from "react";
import { movieInfoFetch } from "../../utils/fetch/view/movieInfo";
import { useQuery } from "@tanstack/react-query";
import List from "../../components/review/List";

export default function View() {

    const {movieCd} = useParams();
    const [poster,setPoster] = useState({});

    const {data : info} = useQuery({
        queryKey : ["infoData",movieCd],
        queryFn : ()=>movieInfoFetch(movieCd || "")
    });

    /* useEffect(()=>{

        const {data, isLoading} = useQuery({
            queryKey : ["infoPosterKey",info],
            queryFn : ()=>moviePosterAPI(info?.movieInfo.movieCd || "")
        });

        setPoster({
            data,
            isLoading
        });

    },[info]) */

    useEffect(()=>{
        window.scrollTo(0,0);
    },[movieCd]);

    return (
        <main className="font-pretendard tracking-custom">

            <div className="h-[450px] bg-black relative md:h-[550px]">
                <img src="/image/poster.jpg" className="absolute top-0 left-0 w-full h-full object-cover" alt="포스터 이미지" />
                <dl className="absolute left-1/2 bottom-20 -translate-x-1/2 w-11/12 max-w-screen-xl mx-auto text-white">
                    <dt className="text-2xl font-bold">{info?.movieInfo.movieNm}</dt>
                    <dd className="text-base">개봉일 {info?.movieInfo.openDt ? moment(info.movieInfo.openDt).format("YYYY.MM.DD") : ""}</dd>
                </dl>
            </div>

            <div className="px-4">
                <div className="container max-w-screen-xl mx-auto py-20">

                    <div className="flex flex-wrap gap-5 bg-white p-5 rounded-xl">
                        <div className="w-52 h-64 bg-point-color relative">
                            <img src="/image/poster.jpg" className="absolute top-0 left-0 w-full h-full object-cover" alt="포스터 이미지" />
                        </div>
                        <div className="flex-none">
                            <p>
                                <span 
                                    className="text-point-color text-middle"
                                >제작국가 : </span>
                                {info?.movieInfo.nations.map((nation,i)=><span key={i}>{nation.nationNm}</span>)}
                            </p>
                            <p>
                                <span className="text-point-color text-middle">제작연도 : </span>
                                {info?.movieInfo.prdtYear}년
                            </p>
                            <p>
                                <span className="text-point-color text-middle">영화유형 : </span>
                                {info?.movieInfo.typeNm}
                            </p>
                            <p>
                                <span className="text-point-color text-middle">장르 : </span>
                                {info?.movieInfo.genres.map((genre,i)=><span key={i}>{genre.genreNm}, </span>)}
                            </p>
                            <p>
                                <span className="text-point-color text-middle">상영시간 : </span>
                                {info?.movieInfo.showTm} 분
                            </p>
                            <p>
                                <span className="text-point-color text-middle">심의 : </span>
                                {info?.movieInfo.audits.map((audit,i)=><span key={i}>{audit.watchGradeNm} </span>)}
                            </p>
                        </div>
                    </div>

                    <div className="mt-12 bg-white p-5 rounded-xl">
                        <h2 className="text-lg font-bold text-point-color md:text-xl">감독 및 출연</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:flex md:flex-wrap gap-5 mt-3">
                            { 
                                info?.movieInfo.directors.map((item,i)=>(
                                    <div key={i} className="border box-border border-point-color p-2 flex-none w-full md:w-[11.8rem]">
                                        { item?.peopleNm }
                                        <p className="text-sm text-gray-500">감독</p>
                                    </div>
                                ))
                            }
                            { 
                                info?.movieInfo.actors.map((item,i)=>(
                                    <div key={i} className="border box-border border-point-color p-2 flex-none w-full md:w-[11.8rem]">
                                        { item?.peopleNm }
                                        <p className="text-sm text-gray-500">출연</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className="mt-12 bg-white p-5 rounded-xl">
                        <h2 className="text-lg font-bold text-point-color md:text-xl">참여 영화사</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:flex md:flex-wrap gap-5 mt-3">
                            { 
                                info?.movieInfo.companys.map((item,i)=>(
                                    <div key={i} className="border box-border border-point-color p-2 flex-none w-full md:w-[11.8rem]">
                                        { item?.companyNm }
                                        <p className="text-sm text-gray-500">{item?.companyPartNm}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className="mt-12 bg-white p-5 rounded-xl">
                        <h2 className="text-lg font-bold text-point-color md:text-xl">참여 스태프</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:flex md:flex-wrap gap-5 mt-3">
                            { 
                                info?.movieInfo.staffs.map((item,i)=>(
                                    <div key={i} className="border box-border border-point-color p-2 flex-none w-full md:w-[11.8rem]">
                                        { item?.peopleNm }
                                        <p className="text-sm text-gray-500">{item?.staffRoleNm}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className="mt-12 bg-white p-5 rounded-xl">
                        <List movieCd={movieCd} movieName={info?.movieInfo.movieNm}/>
                    </div>

                </div>
            </div>            

        </main>
    )

}
