import { storyblokEditable } from "@storyblok/react";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";

const ServicesCarousel = ({ blok }) => {
    return (
        <div className="items-center gap-8 md:grid md:grid-cols-2" {...storyblokEditable(blok)}>
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
                >
                {/* Slides */}
                {blok?.images.map((slide, index) => (
                    <SwiperSlide key={index}>
                    <Image src={slide.filename} alt="" width={600} height={500} />
                    </SwiperSlide>
                ))}
                </Swiper>
            </div>
        
            {/* Content */}
            <div
                className={`service-content text-left mt-5 md:mt-0 ${blok.imagePosition == "right" && "md:order-1"}`}
            >
                <h2 className="font-bold leading-[40px]">{blok?.title}</h2>
                <p className="mt-4 mb-2">{blok?.content}</p>
                {blok.button?.title && (
                    <Link
                      href={blok.button.url}
                      className="cta-link inline-flex items-center text-primary"
                    >
                      {blok?.button.title}
                      <Image
                        className="ml-1"
                        src="/images/arrow-right.svg"
                        width={18}
                        height={14}
                        alt="arrow"
                      />
                    </Link>
                  )}
            </div>
        </div>
        );
} 

export default ServicesCarousel;



