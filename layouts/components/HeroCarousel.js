import { useRef } from "react";
import { storyblokEditable } from "@storyblok/react";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const HeroCarousel = ({ blok }) => {

    const swiperRef = useRef();

    return (
        <div className="items-center" {...storyblokEditable(blok)}>
            {/* Carousel */}
            <div className={`service-carousel ${blok.imagePosition == "right" && "md:order-2"}`}>
                <Swiper
                modules={[Autoplay, Pagination]}
                pagination={
                    blok.images.length > 1 ? { clickable: true } : false
                }
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                init={blok?.images > 1 ? false : true}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
                >
                {/* Slides */}
                {blok?.images.map((slide, index) => (
                    <SwiperSlide key={index}>
                    <img src={slide.filename} alt="" className="w-full h-96" />
                    </SwiperSlide>
                ))}
                <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={() => swiperRef.current.slidePrev()}>
                    <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg aria-hidden="true" class="w-6 h-6 text-white dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                        <span class="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={() => swiperRef.current.slideNext()}>
                    <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg aria-hidden="true" class="w-6 h-6 text-white dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                        <span class="sr-only">Next</span>
                    </span>
                </button>
                </Swiper>
            </div>
        </div>
        );
} 

export default HeroCarousel;



