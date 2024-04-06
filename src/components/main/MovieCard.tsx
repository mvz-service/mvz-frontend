import { Link } from "react-router-dom";
import MoivePoster from "../../asset/image/poster.jpg";
import { WeeklyBoxOfficeList } from "../../types/weeklyType";

export default function MovieCard({item} : {item : WeeklyBoxOfficeList}) {

    /* const {data : poster,isLoading,isError} = useQuery({
        queryKey : ["MovieCardPosterKey",item.movieCd],
        queryFn : ()=>listGetAjax(item.movieCd)
    }) */

    return (
        <Link to={`/view/${item.movieCd}`} className="group">
            <div
                className={`w-full bg-cyan-50 relative overflow-hidden pb-[calc(470/329*100%)] after:pb-2.5 after:content-[''] after:block`}
            >
                <img 
                    className="absolute left-0 top-0 w-full h-full object-cover transition-transform group-hover:scale-110"
                    src={MoivePoster}
                    alt={`${item.movieNm} 포스터`}
                />

            </div>
            <div className="mt-3">
                {
                    item.rankOldAndNew === "NEW" ?
                        <div className="text-white bg-red-500 inline-block p-1 text-xs rounded mb-2">{item.rankOldAndNew}</div>
                    : null
                }
                <p className="text-xs text-point-color">{item.rank} 위</p>

                <dl>
                    <dt className="text-base font-semibold break-keep">{item.movieNm}</dt>
                    <dd className="text-sm mt-1 text-neutral-500">개봉일 : {item.openDt}</dd>
                </dl>
                <p className="text-xs mt-1 text-neutral-500">누적 관객수 - {item.audiAcc} 명</p>
                
            </div>
        </Link>
    )

}
