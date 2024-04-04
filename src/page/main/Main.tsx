import {Swiper,SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper/modules"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import MainSilde from "../../components/main/MainSilde";
import MovieCard from "../../components/main/MovieCard";

export default function Main() {

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
            <SwiperSlide>
                <MainSilde/>
            </SwiperSlide>
        </Swiper>

        <div className="bg-white rounded-xl w-11/12 max-w-7xl mx-auto py-10 px-4 md:p-10 mt-20 md:mt-32">

            <div className="flex justify-between">
                <h4 className="text-center text-lg font-bold text-point-color md:text-2xl">제목</h4>
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
                        <SwiperSlide>
                            <MovieCard/>
                        </SwiperSlide>
                    }
                </Swiper>
            </div>

            <div className="flex justify-between">
                <h4 className="text-center text-lg font-bold text-point-color md:text-2xl">제목</h4>
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
                        <SwiperSlide>
                            <MovieCard/>
                        </SwiperSlide>
                    }
                </Swiper>
            </div>

            <div className="flex justify-between">
                <h4 className="text-center text-lg font-bold text-point-color md:text-2xl">제목</h4>
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
                        <SwiperSlide>
                            <MovieCard/>
                        </SwiperSlide>
                    }
                </Swiper>
            </div>
            

        </div>

    </main>
  )
}
