import InfiniteScroll from 'react-infinite-scroller';
import React, { useEffect, useRef, useState } from "react";
import { useInfiniteQuery, useSuspenseInfiniteQuery } from "@tanstack/react-query";
import moment from "moment";
import { movieListAxios } from '../../utils/fetch/movie/MovieList';
import Card from '../../components/movie/Card';

export default function List() {

  const movieNmRef = useRef<HTMLInputElement>(null);
  const directorNmRef = useRef<HTMLInputElement>(null);
  const openStartRef = useRef<HTMLSelectElement>(null);
  const openEndRef = useRef<HTMLSelectElement>(null);
  const prdtStartRef = useRef<HTMLSelectElement>(null);
  const prdtEndRef = useRef<HTMLSelectElement>(null);

  const [movieNmInput,setMovieNmInput] = useState('');
  const [directorNmInput,setDirectorNmInput] = useState('');

  const [openStartDt,setOpenStartDt] = useState('');
  const [openEndDt,setOpenEndDt] = useState('');
  const [prdtStartYear,setPrdtStartYear] = useState('');
  const [prdtEndYear,setPrdtEndYear] = useState('');

  const { data, hasNextPage, fetchNextPage,isFetchingNextPage } = useSuspenseInfiniteQuery({
    queryKey : [
        "movieList",
        movieNmInput,
        directorNmInput,
        openStartDt,
        openEndDt,
        prdtStartYear,
        prdtEndYear
    ],
    queryFn : ({pageParam})=>movieListAxios(pageParam, {
        movieNm : movieNmInput,
        directorNm : directorNmInput,
        openStartDt,
        openEndDt,
        prdtStartYear,
        prdtEndYear
    }),
    initialPageParam : 1,
    getNextPageParam : (lastPage, pages) => {
        if(!lastPage) return;
        const maxPage = lastPage.totCnt / 12; // 12개씩 보여주기
        const nextPage = pages.length + 1;
        return nextPage <= maxPage ? nextPage : undefined;
    }
  });

  useEffect(()=>{
    movieListAxios(1);
  },[])

  const onSubmit = (e : React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();

    if(!movieNmRef.current || !directorNmRef.current || !openStartRef.current || !openEndRef.current || !prdtStartRef.current || !prdtEndRef.current) return;

    setMovieNmInput(movieNmRef.current?.value);
    setDirectorNmInput(directorNmRef.current?.value);
    setOpenStartDt(openStartRef.current.value);
    setOpenEndDt(openEndRef.current.value);
    setPrdtStartYear(prdtStartRef.current.value);
    setPrdtEndYear(prdtEndRef.current.value);

  }

  return (
    
    <main>
        <InfiniteScroll 
            className="w-11/12 mx-auto my-20 flex flex-col md:flex-row justify-center gap-20 md:gap-5 xl:gap-12 max-w-7xl items-start font-pretendard tracking-custom" 
            hasMore={hasNextPage} 
            loadMore={()=>fetchNextPage()}
        >

            <div className="top-4 w-full md:w-64 flex-none z-50 md:sticky">
                <form onSubmit={onSubmit}>
                    <div className="bg-white p-5 rounded-lg">
                        <h4 className="border-b border-point-color text-lg font-medium pb-2">필터</h4>

                        <div className="mt-2">
                        <label 
                            className="text-sm"
                            htmlFor="movieNm"
                        >영화명</label>
                        <input 
                            name="movieNm"
                            ref={movieNmRef}
                            className="border-point-color border rounded-sm mt-1 py-1 px-2 box-border w-full text-sm" 
                            type="text" 
                            placeholder="영화명을 입력해주세요."
                        />
                        </div>

                        <div className="mt-5">
                        <label 
                            className="text-sm"
                            htmlFor="directorNm"
                        >감독명</label>
                        <input 
                            className="border-point-color border rounded-sm mt-1 py-1 px-2 box-border w-full text-sm" 
                            type="text" 
                            ref={directorNmRef}
                            placeholder="감독명을 입력해주세요."
                            id="directorNm"
                        />
                        </div>

                        <div className="mt-5">
                        <p className="text-sm">개봉연도</p>
                        <div className="md:flex relative items-center mt-1">
                            <p className="text-nowrap mr-5 text-xs">시작</p>
                            <div className="relative w-full">
                            <select 
                                className="border-point-color border rounded-sm py-1 px-2 box-border w-full text-sm" 
                                ref={openStartRef}
                            >
                                <option value="">개봉연도를 선택해주세요.</option>
                                {
                                Array.from({length : (parseInt(moment().format("YYYY"))-1990 + 1) }, (_,index)=> parseInt(moment().format("YYYY")) - index ).map(e => 
                                    <option key={e} value={e}>{e}년</option>
                                )
                                }
                            </select>
                            </div>
                        </div>
                        <div className="md:flex relative items-center mt-2">
                            <p className="text-nowrap mr-5 text-xs">종료</p>
                            <div className="relative w-full">
                            <select 
                                className="border-point-color border rounded-sm py-1 px-2 box-border w-full text-sm" 
                                ref={openEndRef}
                            >
                                <option value="">개봉연도를 선택해주세요.</option>
                                {
                                Array.from({length : (parseInt(moment().format("YYYY"))-1990 + 1) }, (_,index)=> parseInt(moment().format("YYYY")) - index ).map(e => 
                                    <option key={e} value={e}>{e}년</option>
                                )
                                }
                            </select>
                            </div>
                        </div>
                        </div>

                        <div className="mt-5">
                        <p className="text-sm">제작연도</p>
                        <div className="md:flex items-center mt-1">
                            <p className="text-nowrap mr-5 text-xs">시작</p>
                            <div className="relative w-full">
                            <select 
                                className="border-point-color border rounded-sm py-1 px-2 box-border w-full text-sm" 
                                ref={prdtStartRef}
                            >
                                <option value="">제작연도를 선택해주세요.</option>
                                {
                                Array.from({length : (parseInt(moment().format("YYYY"))-1990 + 1) }, (_,index)=> parseInt(moment().format("YYYY")) - index ).map(e => 
                                    <option key={e} value={e}>{e}년</option>
                                )
                                }
                            </select>
                            </div> 
                        </div>
                        <div className="md:flex items-center mt-2">
                            <p className="text-nowrap mr-5 text-xs">종료</p>
                            <div className="relative w-full">
                            <select 
                                className="border-point-color border rounded-sm py-1 px-2 box-border w-full text-sm" 
                                ref={prdtEndRef}
                            >
                                <option value="">제작연도를 선택해주세요.</option>
                                {
                                Array.from({length : (parseInt(moment().format("YYYY"))-1990 + 1) }, (_,index)=> parseInt(moment().format("YYYY")) - index ).map(e => 
                                    <option key={e} value={e}>{e}년</option>
                                )
                                }
                            </select>
                            </div> 
                        </div>
                        </div>

                    </div>
                    <button className="bg-point-color w-full text-white rounded-lg mt-5 py-2 text-sm">검색하기</button>
                </form>
            </div>

            <div className="rounded-xl py-10 px-4 md:p-10 bg-white w-full md:w-auto flex-1">
                <div className="container max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 gap-y-14">
                    {
                        data?.pages.map((page,index)=>
                            <React.Fragment key={index}>
                                {page?.movieList.map((item)=><Card key={item.movieCd} item={item}/>)}
                            </React.Fragment>
                        )
                    }
                </div>
                {/* {
                    isFetchingNextPage && <p>로딩중<p/>
                    <Type02 isLoading={isFetchingNextPage}/>
                } */}
            </div>

        </InfiniteScroll>
    </main>

  )
}
