import {Swiper,SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules"
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

    </main>
  )
}
