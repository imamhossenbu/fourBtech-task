
"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { AiFillStar } from "react-icons/ai";

type Item = { text: string; name: string; role: string; avatar: string; rating: number };

export default function TestimonialsSlider({ items }: { items: Item[] }) {
    return (
        <div className="relative overflow-hidden">
            <Swiper
                modules={[Navigation]}
                navigation={{ prevEl: "#t-prev", nextEl: "#t-next" }}
                loop
                speed={500}
                spaceBetween={18}
                slidesPerView={1.2}
                breakpoints={{
                    768: { slidesPerView: 1.5, spaceBetween: 18 },
                    1024: { slidesPerView: 1.6, spaceBetween: 20 },
                    1440: { slidesPerView: 1.8, spaceBetween: 22 },
                }}
                className="overflow-visible!"
            >
                {items.map((t, i) => (
                    <SwiperSlide key={i}>
                        <article
                            className="
                h-full rounded-2xl border border-[#E8EAF0] shadow-sm 
                p-5 sm:p-6 md:p-6        /* 👉 padding কমানো হয়েছে */
                bg-[radial-gradient(130%_140%_at_0%_0%,#F6F9FF_0%,transparent_48%),radial-gradient(130%_140%_at_100%_0%,#F4EAFE_0%,transparent_48%)]
                dark:border-white/10 
                dark:bg-[linear-gradient(135deg,#0E1424_0%,#161B2B_100%)]
                flex flex-col
                min-h-[300px] sm:min-h-80 lg:min-h-[280px]  
              "
                        >
                            {/* stars */}
                            <div className="mb-2 flex items-center gap-0.5 text-[#F59E0B]">
                                {Array.from({ length: t.rating }).map((_, s) => (
                                    <AiFillStar key={s} className="h-4 w-4" />
                                ))}
                            </div>

                            {/* text */}
                            <p className="text-[14px] leading-6 text-[#0B1020]/90 dark:text-gray-200 line-clamp-6">
                                {t.text}
                            </p>

                            {/* author */}
                            <div className="mt-auto pt-4 flex items-center gap-3">
                                <Image
                                    src={t.avatar}
                                    alt={t.name}
                                    width={40}
                                    height={40}
                                    className="rounded-full object-cover"
                                />
                                <div>
                                    <p className="font-semibold text-[#0B1020] dark:text-white text-[15px]">
                                        {t.name}
                                    </p>
                                    <p className="text-sm text-gray-600 dark:text-gray-300">{t.role}</p>
                                </div>
                            </div>
                        </article>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
