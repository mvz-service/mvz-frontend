
import { Link } from "react-router-dom";
import { MovieList } from "../../types/MovieListType";
import MoivePoster from "../../asset/image/poster.jpg";
import { listGetAjax } from "../../utils/fetch/poster/ListGet";
import { useQuery } from "@tanstack/react-query";

export default function Card({item} : {item : MovieList}) {
    
    const {data : poster,isLoading,isError} = useQuery({
        queryKey : ["MovieCardPosterKey",item.movieCd],
        queryFn : ()=>listGetAjax(item.movieCd)
    })

    return (
        <Link to={`/view/${item?.movieCd}`} className="group">
            <div
                className={`w-full bg-cyan-50 relative overflow-hidden pb-[calc(470/329*100%)] after:pb-2.5 after:content-[''] after:block`}
            >
                <img 
                    className="absolute left-0 top-0 w-full h-full object-cover transition-transform group-hover:scale-110"
                    src={ 
                        isError 
                            ?
                                MoivePoster
                            :
                                !isLoading && poster ? poster : MoivePoster
                    }
                    alt="영화 포스터" 
                />
            </div>

            <div className="mt-3">

                <dl>
                    <dt className="text-base font-semibold break-keep">{item?.movieNm}</dt>
                    <dd className="text-sm mt-1 text-neutral-500">개봉일 : {item?.openDt ? item?.openDt : "미개봉"}</dd>
                </dl>

            </div>
            
        </Link>
    )
}