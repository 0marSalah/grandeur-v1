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
  const [caseImg, setCaseImg] = useState("/cases/case-1.png");
  const [strapImg, setstrapImg] = useState("/straps/strap-1.png");
  const [swiperType, setSwiperType] = useState<"case" | "strap" | "size">(
    "size"
  );
  const [caseActiveIdx, setCaseActiveIdx] = useState(0);
  const [strapActiveIdx, setStrapActiveIdx] = useState(0);
  const [strapType, setStrapType] = useState("normal");

  const swiperRef = useRef(null);

  const handlePagination = useCallback(
    (index: number) => {
      setStrapActiveIdx(index);
      swiperRef?.current && swiperRef.current.swiper.slideTo(strapActiveIdx);
    },
    [strapActiveIdx]
  );

  const handleSlideChange = (swiper: { activeIndex: number }) => {
    if (swiperType === "case") {
      setCaseActiveIdx(Number(swiper.activeIndex));
      setCaseImg(cases[swiper.activeIndex].image);
      console.log(swiper.activeIndex);
    } else if (swiperType === "strap") {
      setStrapActiveIdx(Number(swiper.activeIndex));
      setstrapImg(straps[swiper.activeIndex].image);
    } else if (swiperType === "size") {
      swiper.activeIndex == 0 || swiper.activeIndex == 1
        ? setStrapType("normal")
        : setStrapType("ultra");
    }
  };
  useEffect(() => {
    handlePagination(strapActiveIdx);
  }, [strapActiveIdx, handlePagination]);

  return (
    <div style={{ position: "relative" }}>
      {swiperType === "size" && (
        <Swiper
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
        </Swiper>
      )}

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
      <div className="swiper-btns-wrap">
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
        <div className="swiper-button-container">
          <div className="btn-wrap" onClick={() => setSwiperType("size")}>
            <Image width={18} height={25} src="/Frame-icon.svg" alt="" />
            <button
              className="swiper-button"
              onClick={() => setSwiperType("size")}
            >
              Case Size
            </button>
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
