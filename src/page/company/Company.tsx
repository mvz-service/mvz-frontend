import React, {useRef, useState } from "react";
import { useSuspenseInfiniteQuery} from "@tanstack/react-query";
import InfiniteScroll from "react-infinite-scroller";
import { companyListAxios } from "../../utils/fetch/company/CompanyList";
import { Card } from "../../components/company/Card";
import { SyncLoader } from "react-spinners";

export default function Company() {

    const companyNmRef = useRef<HTMLInputElement>(null);
    const ceoNmRef = useRef<HTMLInputElement>(null);

    const [companyNm,setCompanyNm] = useState('');
    const [ceoNm,setCeoNm] = useState('');

    const {data, hasNextPage, fetchNextPage, isFetchingNextPage} = useSuspenseInfiniteQuery({
        queryKey : ["companyList",companyNm,ceoNm],
        queryFn : ({pageParam}) => companyListAxios(pageParam,companyNm,ceoNm),
        initialPageParam : 1,
        getNextPageParam : (lastPage, pages)=>{
            const maxPage = lastPage.totCnt / 10;
            const nextPage = pages.length + 1;
            return nextPage <= maxPage ? nextPage : undefined;
        }
    });
  
    const onSubmit = (e : React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();

        if(!companyNmRef.current || !ceoNmRef.current) return;

        setCompanyNm(companyNmRef.current.value);
        setCeoNm(ceoNmRef.current.value);
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
                                    htmlFor="companyNm"
                                >영화사명</label>
                                <input 
                                    className="border-point-color border rounded-sm mt-1 py-1 px-2 box-border w-full text-sm" 
                                    type="text"
                                    id="companyNm"
                                    placeholder="영화사명을 입력해주세요." 
                                    ref={companyNmRef}
                                />
                                </div>
                                <div className="mt-5">
                                <label 
                                    className="text-sm"
                                    htmlFor="ceoNm"
                                >대표자명</label>
                                <input 
                                    className="border-point-color border rounded-sm mt-1 py-1 px-2 box-border w-full text-sm"
                                    type="text"
                                    id="ceoNm"
                                    placeholder="대표자명 입력해주세요."
                                    ref={ceoNmRef}
                                />
                            </div>
                        </div>
                        <button 
                            className="bg-point-color w-full text-white rounded-lg mt-5 py-2 text-sm"
                        >검색하기</button>
                    </form>
                </div>

                <div className="rounded-xl py-10 px-4 md:p-10 bg-white w-full md:w-auto flex-1">
                    <>
                        <div className="container max-w-screen-xl mx-auto grid grid-cols-1 gap-5 gap-y-5 xl:gap-y-14 xl:grid-cols-2">
                            {
                                data?.pages.map((page,i)=>(
                                    <React.Fragment key={i}>
                                        {
                                            page.companyList.map(list=><Card key={list?.companyCd} list={list}/>)
                                        }
                                    </React.Fragment>
                                ))
                            }
                        </div>
                        {
                            isFetchingNextPage && <div className='flex justify-center mt-5'><SyncLoader size={5} color='#7bb7fe'/></div>
                        }
                    </>
                </div>

            </InfiniteScroll>
        </main>
    )
  
}