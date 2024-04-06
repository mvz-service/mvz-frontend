import { MovieInfoType } from "../../types/movieInfoType"
import MoivePoster from "../../asset/image/poster.jpg";

export default function SmallPoster({info} : {info : MovieInfoType}) {

    /* const {data : poster,isLoading,isError} = useQuery({
        queryKey : ["SmallPosterkey",info.movieInfo.movieCd],
        queryFn : ()=>listGetAjax(info.movieInfo.movieCd)
    }) */

    return (
        <div className="w-52 h-64 bg-point-color relative">
            <img 
                src={MoivePoster}
                className="absolute top-0 left-0 w-full h-full object-cover" 
                alt={`${info.movieInfo.movieNm} 포스터`}
            />
        </div>
    )
}
