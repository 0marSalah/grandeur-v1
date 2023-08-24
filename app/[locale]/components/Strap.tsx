import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/virtual";

interface StrapProps {
  strapActiveIdx: number;
  handleSlideChange: (swiper: any) => void;
  strapImg: string;
  caseImg: string;
  straps: { id: number; image: string | StaticImport }[];
  swiperRef: any;
  strapType: string;
}
const StrapSwiper = ({
  swiperRef,
  handleSlideChange,
  straps,
  strapActiveIdx,
  caseImg,
  strapType,
}: StrapProps) => {
  return (
    <div>
      <Swiper
        ref={swiperRef}
        style={{ padding: "0" }}
        centeredSlides={true}
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          300: { slidesPerView: 1.5 },
          400: { slidesPerView: 1.7 },
          600: { slidesPerView: 2.5 },
          900: { slidesPerView: 3.5 },
          1200: { slidesPerView: 4.5 },
          1500: { slidesPerView: 5.5 },
        }}
        onSlideChange={(swiper) => handleSlideChange(swiper)}
        initialSlide={strapActiveIdx}
      >
        {straps.map((i: { id: number; image: string | StaticImport }) => (
          <SwiperSlide key={i.id}>
            <div className="slide-container">
              <Image
                width="400"
                height="400"
                src={i.image}
                alt={"strap"}
                className="strape-slide-image"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className="case-image"
        style={{
          left:
            strapType === "normal"
              ? "calc(50% - 112.5px)"
              : "calc(50% - 116px)",
          top: strapType === "normal" ? "90px" : "85px",
        }}
      >
        <Image width="225" height="225" src={caseImg} alt="" />
      </div>
    </div>
  );
};

export default StrapSwiper;
