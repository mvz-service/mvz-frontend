import {Swiper,SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper/modules"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <main
        className="pt-12 pb-40"
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
                <Link
                    to={`/movie/view/`}
                    className="block bg-point-color relative overflow-hidden rounded-2xl h-[250px] xl:h-[560px] md:h-[360px] md:rounded-[20px]"
                    >
                    <div className="absolute left-0 top-0 object-cover w-full h-full after:content-[''] after:block after:absolute after:left-0 after:top-0 after:bg-black after:z-10 after:w-full after:h-full after:opacity-30">
                        <img 
                            className="absolute left-0 top-0 object-cover w-full h-full object-[50%_20%]"
                            src="/image/poster.jpg"
                            alt=""
                        />
                        </div>
                    <div
                        className=" absolute top-1/2 -translate-y-1/2  z-10 text-white px-5 md:pl-16 "
                    >
                        <h4
                        className=" text-xl md:text-2xl xl:text-4xl font-bold "
                        >주간 박스오피스</h4>
                        <dl className="mt-2 md:mt-3">
                            <dt className=" text-base md:text-lg xl:text-2xl"></dt>
                            <dd className=" text-xs md:text-sm opacity-70 mt-2 md:mt-3 ">개봉일 - </dd>
                        </dl>
                    </div>

                </Link>
            </SwiperSlide>
            <SwiperSlide>
                <Link
                    to={`/movie/view/`}
                    className="block bg-point-color relative overflow-hidden rounded-2xl h-[250px] xl:h-[560px] md:h-[360px] md:rounded-[20px]"
                    >
                    <div className="absolute left-0 top-0 object-cover w-full h-full after:content-[''] after:block after:absolute after:left-0 after:top-0 after:bg-black after:z-10 after:w-full after:h-full after:opacity-30">
                        <img 
                            className="absolute left-0 top-0 object-cover w-full h-full object-[50%_20%]"
                            src="/image/poster.jpg"
                            alt=""
                        />
                        </div>
                    <div
                        className=" absolute top-1/2 -translate-y-1/2  z-10 text-white px-5 md:pl-16 "
                    >
                        <h4
                        className=" text-xl md:text-2xl xl:text-4xl font-bold "
                        >주간 박스오피스</h4>
                        <dl className="mt-2 md:mt-3">
                            <dt className=" text-base md:text-lg xl:text-2xl"></dt>
                            <dd className=" text-xs md:text-sm opacity-70 mt-2 md:mt-3 ">개봉일 - </dd>
                        </dl>
                    </div>

                </Link>
            </SwiperSlide>
            <SwiperSlide>
                <Link
                    to={`/movie/view/`}
                    className="block bg-point-color relative overflow-hidden rounded-2xl h-[250px] xl:h-[560px] md:h-[360px] md:rounded-[20px]"
                    >
                    <div className="absolute left-0 top-0 object-cover w-full h-full after:content-[''] after:block after:absolute after:left-0 after:top-0 after:bg-black after:z-10 after:w-full after:h-full after:opacity-30">
                        <img 
                            className="absolute left-0 top-0 object-cover w-full h-full object-[50%_20%]"
                            src="/image/poster.jpg"
                            alt=""
                        />
                        </div>
                    <div
                        className=" absolute top-1/2 -translate-y-1/2  z-10 text-white px-5 md:pl-16 "
                    >
                        <h4
                        className=" text-xl md:text-2xl xl:text-4xl font-bold "
                        >주간 박스오피스</h4>
                        <dl className="mt-2 md:mt-3">
                            <dt className=" text-base md:text-lg xl:text-2xl"></dt>
                            <dd className=" text-xs md:text-sm opacity-70 mt-2 md:mt-3 ">개봉일 - </dd>
                        </dl>
                    </div>

                </Link>
            </SwiperSlide>
            <SwiperSlide>
                <Link
                    to={`/movie/view/`}
                    className="block bg-point-color relative overflow-hidden rounded-2xl h-[250px] xl:h-[560px] md:h-[360px] md:rounded-[20px]"
                    >
                    <div className="absolute left-0 top-0 object-cover w-full h-full after:content-[''] after:block after:absolute after:left-0 after:top-0 after:bg-black after:z-10 after:w-full after:h-full after:opacity-30">
                        <img 
                            className="absolute left-0 top-0 object-cover w-full h-full object-[50%_20%]"
                            src="/image/poster.jpg"
                            alt=""
                        />
                        </div>
                    <div
                        className=" absolute top-1/2 -translate-y-1/2  z-10 text-white px-5 md:pl-16 "
                    >
                        <h4
                        className=" text-xl md:text-2xl xl:text-4xl font-bold "
                        >주간 박스오피스</h4>
                        <dl className="mt-2 md:mt-3">
                            <dt className=" text-base md:text-lg xl:text-2xl"></dt>
                            <dd className=" text-xs md:text-sm opacity-70 mt-2 md:mt-3 ">개봉일 - </dd>
                        </dl>
                    </div>

                </Link>
            </SwiperSlide>
            <SwiperSlide>
                <Link
                    to={`/movie/view/`}
                    className="block bg-point-color relative overflow-hidden rounded-2xl h-[250px] xl:h-[560px] md:h-[360px] md:rounded-[20px]"
                    >
                    <div className="absolute left-0 top-0 object-cover w-full h-full after:content-[''] after:block after:absolute after:left-0 after:top-0 after:bg-black after:z-10 after:w-full after:h-full after:opacity-30">
                        <img 
                            className="absolute left-0 top-0 object-cover w-full h-full object-[50%_20%]"
                            src="/image/poster.jpg"
                            alt=""
                        />
                        </div>
                    <div
                        className=" absolute top-1/2 -translate-y-1/2  z-10 text-white px-5 md:pl-16 "
                    >
                        <h4
                        className=" text-xl md:text-2xl xl:text-4xl font-bold "
                        >주간 박스오피스</h4>
                        <dl className="mt-2 md:mt-3">
                            <dt className=" text-base md:text-lg xl:text-2xl"></dt>
                            <dd className=" text-xs md:text-sm opacity-70 mt-2 md:mt-3 ">개봉일 - </dd>
                        </dl>
                    </div>

                </Link>
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
                            <Link to={`/movie/view/1`} className="group">
                                <div
                                    className={`w-full bg-cyan-50 relative overflow-hidden pb-[calc(470/329*100%)] after:pb-2.5 after:content-[''] after:block`}
                                >
                                    <img 
                                        className="absolute left-0 top-0 w-full h-full object-cover transition-transform group-hover:scale-110 "
                                        src="/image/poster.jpg"
                                        alt="영화 포스터" 
                                    />
                                </div>
                                <div className="mt-3">

                                    <div>"NEW"</div>
                                    <p className="text-xs text-point-color">순위</p>

                                    <dl>
                                        <dt className="text-base font-semibold break-keep">123</dt>
                                        <dd className="text-sm mt-1 text-neutral-500">개봉일 : 0</dd>
                                    </dl>
                                    <p className="text-xs mt-1 text-neutral-500">누적 관객수 - 0 명</p>
                                    
                                </div>
                            </Link>
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
                            <Link to={`/movie/view/1`} className="group">
                                <div
                                    className={`w-full bg-cyan-50 relative overflow-hidden pb-[calc(470/329*100%)] after:pb-2.5 after:content-[''] after:block`}
                                >
                                    <img 
                                        className="absolute left-0 top-0 w-full h-full object-cover transition-transform group-hover:scale-110 "
                                        src="/image/poster.jpg"
                                        alt="영화 포스터" 
                                    />
                                </div>
                                <div className="mt-3">

                                    <div>"NEW"</div>
                                    <p className="text-xs text-point-color">순위</p>

                                    <dl>
                                        <dt className="text-base font-semibold break-keep">123</dt>
                                        <dd className="text-sm mt-1 text-neutral-500">개봉일 : 0</dd>
                                    </dl>
                                    <p className="text-xs mt-1 text-neutral-500">누적 관객수 - 0 명</p>
                                    
                                </div>
                            </Link>
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
                            <Link to={`/movie/view/1`} className="group">
                                <div
                                    className={`w-full bg-cyan-50 relative overflow-hidden pb-[calc(470/329*100%)] after:pb-2.5 after:content-[''] after:block`}
                                >
                                    <img 
                                        className="absolute left-0 top-0 w-full h-full object-cover transition-transform group-hover:scale-110 "
                                        src="/image/poster.jpg"
                                        alt="영화 포스터" 
                                    />
                                </div>
                                <div className="mt-3">

                                    <div>"NEW"</div>
                                    <p className="text-xs text-point-color">순위</p>

                                    <dl>
                                        <dt className="text-base font-semibold break-keep">123</dt>
                                        <dd className="text-sm mt-1 text-neutral-500">개봉일 : 0</dd>
                                    </dl>
                                    <p className="text-xs mt-1 text-neutral-500">누적 관객수 - 0 명</p>
                                    
                                </div>
                            </Link>
                        </SwiperSlide>
                    }
                </Swiper>
            </div>
            

        </div>

    </main>
  )
}
