"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/virtual";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import cases from "@data/cases.json";
import straps from "@data/normal-straps.json";
import ultraStraps from "@data/ultra-straps.json";
import watches from "@data/watch-size.json";
import StrapSwiper from "./Strap";

export default function CutomeSwiper() {
  const [caseImg, setCaseImg] = useState("/cases/case-8.png");
  const [strapImg, setstrapImg] = useState("/straps/strap-9.png");
  const [swiperType, setSwiperType] = useState<"case" | "strap" | "size">(
    "size"
  );
  const [caseActiveIdx, setCaseActiveIdx] = useState(0);
  const [strapActiveIdx, setStrapActiveIdx] = useState(0);
  const [strapType, setStrapType] = useState("normal");
  const [sizeActiveIdx, setSizeActiveIdx] = useState(0);

  const swiperRef = useRef(null);

  const handlePagination = (index: number) => {
    setStrapActiveIdx(index);
    swiperRef?.current && swiperRef.current.swiper.slideTo(index);
  };

  const handleSlideChange = (swiper: { activeIndex: number }) => {
    if (swiperType === "case") {
      setCaseActiveIdx(Number(swiper.activeIndex));
      setCaseImg(cases[swiper.activeIndex].image);
    } else if (swiperType === "strap") {
      setStrapActiveIdx(Number(swiper.activeIndex));
      setstrapImg(straps[swiper.activeIndex].image);
    } else if (swiperType === "size") {
      swiper.activeIndex == 0 || swiper.activeIndex == 1
        ? setStrapType("normal")
        : setStrapType("ultra");
      setSizeActiveIdx(Number(swiper.activeIndex));
    }
  };

  const handleSelectSize = (idx: number) => {
    setSizeActiveIdx(idx);
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(idx);
    }
  };
  return (
    <div style={{ position: "relative" }}>
      {swiperType === "size" && (
        <Swiper
          ref={swiperRef}
          style={{ padding: "90px 0 50px 0" }}
          centeredSlides
          slidesPerView={1}
          spaceBetween={5}
          breakpoints={{
            400: { slidesPerView: 1 },
            600: { slidesPerView: 2 },
            900: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
            1500: { slidesPerView: 5 },
          }}
          onSlideChange={(swiper) => handleSlideChange(swiper)}
          initialSlide={0}
        >
          <div className="size-swiper">
            {watches.map((i) => (
              <SwiperSlide key={i.id}>
                <div className={`watch-${i.id}`}>
                  <Image
                    width="225"
                    height="225"
                    src={i.image}
                    alt={i.image}
                    className="slide-image"
                  />
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      )}
      <div className="watch-det">
        {swiperType === "size" && (
          <div className="case-det">
            <p className="name">{watches[sizeActiveIdx].name}</p>
            <p className="price">
              From: <span>699$</span>
            </p>
          </div>
        )}
      </div>

      {swiperType === "case" && (
        <div>
          <div className="strap-image">
            <Image width="400" height="400" src={strapImg} alt="" />
          </div>
          <Swiper
            style={{ padding: "90px 0 90px 0" }}
            centeredSlides={true}
            slidesPerView={1}
            spaceBetween={5}
            breakpoints={{
              300: { slidesPerView: 1.5 },
              400: { slidesPerView: 2 },
              600: { slidesPerView: 2.5 },
              900: { slidesPerView: 3.5 },
              1200: { slidesPerView: 4.5 },
              1500: { slidesPerView: 5.5 },
            }}
            onSlideChange={(swiper) => handleSlideChange(swiper)}
            initialSlide={caseActiveIdx}
          >
            {cases.map((i) => (
              <SwiperSlide key={i.id}>
                <div className="slide-container">
                  <Image
                    width="225"
                    height="225"
                    src={i.image}
                    alt={i.image}
                    className="slide-image"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}

      {swiperType === "strap" && (
        <StrapSwiper
          strapActiveIdx={strapActiveIdx}
          handleSlideChange={handleSlideChange}
          strapImg={strapImg}
          caseImg={caseImg}
          straps={strapType === "ultra" ? ultraStraps : straps}
          swiperRef={swiperRef}
          strapType={strapType}
        />
      )}
      {/* 
        <div className="animated-slide-image">
          <Image width="115" height="144" src="/animated.gif" alt="" />
        </div>
        */}
      <div className="watch-det">
        {swiperType === "case" && (
          <div className="case-det">
            <p className="name">{cases[caseActiveIdx].name}</p>
            <p className="price">
              Price: <span>{cases[caseActiveIdx].price}</span>
            </p>
          </div>
        )}
      </div>
      <div className="swiper-btns-wrap">
        <div className="swiper-button-container">
          <div className="btn-wrap" onClick={() => setSwiperType("size")}>
            <Image width={18} height={25} src="/Frame-icon.svg" alt="" />
            <button
              className="swiper-button"
              onClick={() => setSwiperType("size")}
            >
              Case Size
            </button>
            {swiperType === "size" && (
              <div className="size-list">
                <li
                  style={{
                    color: sizeActiveIdx === 0 ? "#fff" : "#ffffff88",
                  }}
                  onClick={() => {
                    handleSelectSize(0);
                  }}
                >
                  {watches[0].size}
                </li>
                <li
                  style={{
                    color: sizeActiveIdx === 1 ? "#fff" : "#ffffff88",
                  }}
                  onClick={() => {
                    handleSelectSize(1);
                  }}
                >
                  {watches[1].size}
                </li>
                <li
                  style={{
                    color: sizeActiveIdx == 2 ? "#fff" : "#ffffff88",
                  }}
                  onClick={() => {
                    handleSelectSize(2);
                  }}
                >
                  {watches[2].size}
                </li>
              </div>
            )}
          </div>
          <div className="btn-wrap">
            <Image width={18} height={25} src="/Group-icon.svg" alt="" />
            {swiperType !== "case" ? (
              <button
                className="swiper-button"
                onClick={() => setSwiperType("case")}
              >
                Case Type
              </button>
            ) : (
              <div
                style={{
                  fontSize: "15px",
                  whiteSpace: "nowrap",
                  display: "flex",
                  fontWeight: "bold",
                }}
              >
                <p
                  style={{
                    marginRight: "10px",
                  }}
                >
                  RAW TITANIUM CASE
                </p>
                <p>{cases[caseActiveIdx].name.toUpperCase()}</p>
              </div>
            )}
          </div>
          <div
            className="color-wrap btn-wrap"
            onClick={() => setSwiperType("strap")}
          >
            <Image width={20} height={20} src="/steak-icon.svg" alt="" />
            {swiperType !== "strap" && (
              <button onClick={() => setSwiperType("strap")}>
                Strap Color
              </button>
            )}

            {swiperType === "strap" && (
              <ul>
                {straps.map((color) => (
                  <li key={color.id} onClick={() => handlePagination(color.id)}>
                    <div
                      className="circle"
                      style={{
                        backgroundColor: color.color,
                      }}
                    ></div>
                    <p>{color.name}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
