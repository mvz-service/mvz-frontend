import {Swiper,SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper/modules"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import MainSilde from "../../components/main/MainSilde";
import MovieCard from "../../components/main/MovieCard";
import { movieFetch } from "../../utils/fetch/main/movie";
import { useSuspenseQuery } from "@tanstack/react-query";
import { dayAxios } from "../../utils/fetch/main/day";

export default function Main() {

    // 주간
    const {data : weekly} = useSuspenseQuery({
        queryKey : ["weekly"],
        queryFn : ()=>movieFetch("0")
    });

    // 주말
    const {data : weekend} = useSuspenseQuery({
        queryKey : ["weekend"],
        queryFn : ()=>movieFetch("1")
    });

    // 주중
    const {data : weekday} = useSuspenseQuery({
        queryKey : ["weekday"],
        queryFn : ()=>movieFetch("2")
    });

    // 일별
    const {data : days} = useSuspenseQuery({
        queryKey : ["days"],
        queryFn : dayAxios
    });

    return (
        <main
            className="pt-12 pb-40 font-pretendard tracking-custom"
        >
            <Swiper
                slidesPerView={1.2}
                spaceBetween={20}
                centeredSlides={true}
                loop={true}
                breakpoints={{
                    821 : {
                        slidesPerView : 1.3,
                        spaceBetween : 40
                    }
                }}
                modules={[Autoplay]}
                autoplay={{
                    delay : 3000
                }}
                speed={600}
            >
                
                {
                    weekly && weekly.weeklyBoxOfficeList.map((item,index)=>
                        <SwiperSlide key={index}>
                            <MainSilde item={item}/>
                        </SwiperSlide>
                    )
                }
            </Swiper>

            <div className="bg-white rounded-xl w-11/12 max-w-7xl mx-auto py-10 px-4 md:p-10 mt-20 md:mt-32">

                <div className="flex justify-between">
                    <h4 className="text-center text-lg font-bold text-point-color md:text-2xl">주말 박스오피스</h4>
                    <div className="text-point-color text-3xl flex items-center">
                        <button><FaAngleLeft/></button>
                        <button><FaAngleRight/></button>
                    </div>
                </div>

                <div className="mt-3">
                    <Swiper
                        slidesPerView={1.2}
                        spaceBetween={10}
                        loop={true}
                        speed={600}
                        modules={[Navigation]}
                        /* navigation={{
                            nextEl : rightRef.current,
                            prevEl : leftRef.current
                        }} */
                        breakpoints={{
                            481 : {
                                slidesPerView : 2.3,
                                spaceBetween : 20,
                            },
                            821 : {
                                slidesPerView : 4,
                                spaceBetween : 30,
                            }
                        }}
                    >
                        {
                            weekend && weekend.weeklyBoxOfficeList.map((item,index)=>
                                <SwiperSlide key={index}>
                                    <MovieCard item={item}/>
                                </SwiperSlide>
                            )
                        }
                    </Swiper>
                </div>

                <div className="flex justify-between mt-20">
                    <h4 className="text-center text-lg font-bold text-point-color md:text-2xl">주중 박스오피스</h4>
                    <div className="text-point-color text-3xl flex items-center">
                        <button><FaAngleLeft/></button>
                        <button><FaAngleRight/></button>
                    </div>
                </div>

                <div className="mt-3">
                    <Swiper
                        slidesPerView={1.2}
                        spaceBetween={10}
                        loop={true}
                        speed={600}
                        modules={[Navigation]}
                        /* navigation={{
                            nextEl : rightRef.current,
                            prevEl : leftRef.current
                        }} */
                        breakpoints={{
                            481 : {
                                slidesPerView : 2.3,
                                spaceBetween : 20,
                            },
                            821 : {
                                slidesPerView : 4,
                                spaceBetween : 30,
                            }
                        }}
                    >
                        {
                            weekday && weekday.weeklyBoxOfficeList.map((item,index)=>
                                <SwiperSlide key={index}>
                                    <MovieCard item={item}/>
                                </SwiperSlide>
                            )
                        }
                    </Swiper>
                </div>

                <div className="flex justify-between mt-20">
                    <h4 className="text-center text-lg font-bold text-point-color md:text-2xl">일별 박스오피스</h4>
                    <div className="text-point-color text-3xl flex items-center">
                        <button><FaAngleLeft/></button>
                        <button><FaAngleRight/></button>
                    </div>
                </div>

                <div className="mt-3">
                    <Swiper
                        slidesPerView={1.2}
                        spaceBetween={10}
                        loop={true}
                        speed={600}
                        modules={[Navigation]}
                        /* navigation={{
                            nextEl : rightRef.current,
                            prevEl : leftRef.current
                        }} */
                        breakpoints={{
                            481 : {
                                slidesPerView : 2.3,
                                spaceBetween : 20,
                            },
                            821 : {
                                slidesPerView : 4,
                                spaceBetween : 30,
                            }
                        }}
                    >
                        {
                            days && days.dailyBoxOfficeList.map((item,index)=>
                                <SwiperSlide key={index}>
                                    <MovieCard item={item}/>
                                </SwiperSlide>
                            )
                        }
                    </Swiper>
                </div>
                
            </div>

        </main>
    )

}
