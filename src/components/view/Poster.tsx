import moment from "moment";
import { MovieInfoType } from "../../types/movieInfoType";
import { useQuery } from "@tanstack/react-query";
import { viewGetAjax } from "../../utils/fetch/poster/ViewGet";
import MoivePoster from "../../asset/image/poster.jpg";

export default function Poster({info} : {info : MovieInfoType}) {

    const {data : poster,isLoading,isError} = useQuery({
        queryKey : ["ViewPosterKey",info.movieInfo.movieCd],
        queryFn : ()=>viewGetAjax(info.movieInfo.movieCd)
    })

    return (
        <div className="h-[450px] bg-black relative md:h-[550px]">
            <img 
                src={ 
                    isError 
                        ?
                            MoivePoster
                        :
                            !isLoading && poster ? poster : MoivePoster
                }
                className="absolute top-0 left-0 w-full h-full object-cover" 
                alt={`${info.movieInfo.movieNm} 포스터`}
            />
            <dl className="absolute left-1/2 bottom-20 -translate-x-1/2 w-11/12 max-w-screen-xl mx-auto text-white">
                <dt className="text-2xl font-bold">{info?.movieInfo.movieNm}</dt>
                <dd className="text-base">개봉일 {info?.movieInfo.openDt ? moment(info.movieInfo.openDt).format("YYYY.MM.DD") : ""}</dd>
            </dl>
        </div>
    )
}
