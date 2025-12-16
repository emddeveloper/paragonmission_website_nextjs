// app/components/HeaderSection.tsx or directly in page.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import "../../../app/globals.css"

const slides = [
  {
    id: 1,
    image: "https://paragonmission.com/wp-content/uploads/2025/01/IMG-20240808-WA0042.jpg",
    title: "Welcome to Paragon Mission School",
    subtitle: "Shaping Future Leaders Since 2005",
  },
  {
    id: 2,
    image: "https://paragonmission.com/wp-content/uploads/2025/01/20211112_133040-1024x694.jpg",
    title: "Excellence in Education",
    subtitle: "A Legacy of Academic Brilliance",
  },
  {
    id: 3,
    image: "https://paragonmission.com/wp-content/uploads/elementor/thumbs/s5-e1738060074110-r0o237erv2ybxfws76e43vga2qtmcnl99salucjy70.jpg",
    title: "Holistic Development",
    subtitle: "Nurturing Minds, Building Character",
  },
  {
    id: 4,
    image: "https://paragonmission.com/wp-content/uploads/elementor/thumbs/Screenshot_20241212-205532_Facebook-r0nyqcbxvupdemd4n2nt163scxgxi2kz3wllvcmz3s.jpg",
    title: "State-of-the-Art Campus",
    subtitle: "Where Learning Meets Innovation",
  },
];

function HeaderSection() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <section className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
        <Swiper
          modules={[Autoplay, EffectFade, Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={2000}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
            bulletClass: "swiper-pagination-bullet !bg-white/70",
            bulletActiveClass: "swiper-pagination-bullet-active !bg-yellow-400 !opacity-100",
          }}
          className="h-full"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="relative w-full h-full">
                {/* Background Image */}
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority
                  className="object-cover brightness-75"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                {/* Content Overlay */}
                <div className="absolute inset-0 flex items-center justify-center text-center px-6">
                  <div className="mx-auto flex flex-col items-center gap-20">
                    <div className="">
                      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-2xl">
                        {slide.title}
                      </h1>
                      <p className="mt-4 text-lg md:text-2xl text-yellow-300 font-medium drop-shadow-lg hidden md:block">
                        {slide.subtitle}
                      </p>
                    </div>
                    <div className="">
                      <Link href={"/admission-procedure"} className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-black font-semibold rounded-lg transition-all cursor-pointer">
                        Admission Procedure
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Arrows */}
        <div className="swiper-button-prev !text-white !w-12 !h-12 after:!text-3xl hover:!text-yellow-400 transition-colors " />
        <div className="swiper-button-next !text-white !w-12 !h-12 after:!text-3xl hover:!text-yellow-400 transition-colors " />

        {/* Pagination Dots */}
        <div className="swiper-pagination !bottom-6" />
      </section>

      <div className="grid md:grid-cols-3 text-center">
        <div className="bg-yellow-400 p-6 flex flex-col items-center justify-center">
          <Image
            src="https://paragonmission.com/wp-content/uploads/2025/01/IMG-20240808-WA0042.jpg"
            alt="Students"
            width={80}
            height={60}
            className="mb-2 rounded"
          />
          <h3 className="text-3xl font-bold">1200+</h3>
          <p className="text-sm font-medium">Total Students</p>
        </div>

        <div className="bg-pink-500 text-white p-6 flex flex-col items-center justify-center">
          <Image
            src="https://paragonmission.com/wp-content/uploads/2025/01/20211112_133040-1024x694.jpg"
            alt="Teachers"
            width={80}
            height={60}
            className="mb-2 rounded"
          />
          <h3 className="text-3xl font-bold">40+</h3>
          <p className="text-sm font-medium">Teachers and Staff</p>
        </div>

        <div className="bg-blue-600 text-white p-6 flex flex-col items-center justify-center">
          <Image
            src="https://paragonmission.com/wp-content/uploads/elementor/thumbs/s5-e1738060074110-r0o237erv2ybxfws76e43vga2qtmcnl99salucjy70.jpg"
            alt="Classes"
            width={80}
            height={60}
            className="mb-2 rounded"
          />
          <h3 className="text-3xl font-bold">12+</h3>
          <p className="text-sm font-medium">Total Classes</p>
        </div>
      </div>

    </div>
  );
}

export default HeaderSection;
