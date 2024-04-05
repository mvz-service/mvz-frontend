import InfiniteScroll from 'react-infinite-scroller';
import React, { useRef, useState } from 'react';
import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { peopleListAxios } from '../../utils/fetch/people/PeopleList';
import Card from '../../components/people/Card';
import { SyncLoader } from 'react-spinners';

export default function People() {

    const peopleNmRef = useRef<HTMLInputElement>(null);
    const filmoNamesRef = useRef<HTMLInputElement>(null);

    const [peopleNm,setPeopleNm] = useState('');
    const [filmoNames,setFilmoNames] = useState('');

    const {data : peoples, hasNextPage, fetchNextPage, isFetchingNextPage } = useSuspenseInfiniteQuery({
        queryKey : ["peopleList",peopleNm,filmoNames],
        queryFn : ({pageParam})=>peopleListAxios(pageParam,peopleNm,filmoNames),
        initialPageParam : 1, // 기본 페이지 지정
        getNextPageParam : ((lastPage,pages)=>{
            const maxPage = lastPage.totCnt / 12;
            const nextPage = pages.length + 1;
            return nextPage <= maxPage ? nextPage : undefined;
        })
    });

    const onSumbit = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();

        if(!peopleNmRef.current || !filmoNamesRef.current) return;

        setPeopleNm(peopleNmRef.current.value);
        setFilmoNames(filmoNamesRef.current.value);
    }

    return (
        <main>
            <InfiniteScroll
                className="w-11/12 mx-auto my-20 flex flex-col md:flex-row justify-center gap-20 md:gap-5 xl:gap-12 max-w-7xl items-start font-pretendard tracking-custom"
                hasMore={hasNextPage}
                loadMore={()=>fetchNextPage()}
            >
                <div className="top-4 w-full md:w-64 flex-none md:sticky">
                    <form onSubmit={onSumbit}>
                        <div className="bg-white p-5 rounded-lg">
                            <h4 className="border-b border-point-color text-lg font-medium pb-2">필터</h4>
                            <div className="mt-2">
                                <label 
                                    className="text-sm"
                                    htmlFor="peopleNm"
                                >영화인명</label>
                                <input 
                                    className="border-point-color border rounded-sm mt-1 py-1 px-2 box-border w-full text-sm" 
                                    type="text"
                                    id='peopleNm'
                                    placeholder="영화인명을 입력해주세요." 
                                    ref={peopleNmRef}
                                />
                            </div>
                            <div className="mt-5">
                                <label 
                                    className="text-sm"
                                    htmlFor="filmoNames"
                                >필모리스트</label>
                                <input 
                                    className="border-point-color border rounded-sm mt-1 py-1 px-2 box-border w-full text-sm" 
                                    type="text"
                                    id='filmoNames'
                                    placeholder="필모리스트를 입력해주세요." 
                                    ref={filmoNamesRef}
                                />
                            </div>
                        </div>
                        <button className="bg-point-color w-full text-white rounded-lg mt-5 py-2 text-sm">검색하기</button>
                    </form>
                </div>

                <div className="w-full bg-white py-10 px-4 md:p-10 rounded-xl">
                    <>
                        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-5 gap-y-14">
                            {
                                peoples?.pages.map((page,i)=>
                                    <React.Fragment key={i}>
                                        {page?.peopleList.map((people)=>(
                                            <Card key={people.peopleCd} item={people}/>
                                        ))}
                                    </React.Fragment>
                                )
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