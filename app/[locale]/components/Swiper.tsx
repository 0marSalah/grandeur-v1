"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/virtual";
import Image from "next/image";
import { Ref, useRef, useState } from "react";
import cases from "@data/cases.json";
import straps from "@data/normal-straps.json";
import ultraStraps from "@data/ultra-straps.json";
import watches from "@data/watch-size.json";
import StrapSwiper from "./Strap";
import { useLocale, useTranslations } from "next-intl";

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

  const locale = useLocale();
  const t = useTranslations("Customizer");

  const swiperRef = useRef(null);

  const handlePagination = (index: number) => {
    setStrapActiveIdx(index);
    // @ts-ignore
    swiperRef?.current && swiperRef?.current?.swiper?.slideTo(index);
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
    // @ts-ignore
    if (swiperRef.current && swiperRef.current.swiper) {
      // @ts-ignore
      swiperRef.current.swiper.slideTo(idx);
    }
  };
  return (
    <div style={{ position: "relative" }}>
      {swiperType === "size" && (
        <Swiper
          ref={swiperRef}
          centeredSlides
          slidesPerView={5}
          spaceBetween={5}
          breakpoints={{
            100: { slidesPerView: 1 },
            300: { slidesPerView: 1.5 },
            600: { slidesPerView: 2 },
            900: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
            1500: { slidesPerView: 5 },
          }}
          onSlideChange={(swiper) => handleSlideChange(swiper)}
          initialSlide={0}
          className="size-swiper-wrap"
          scrollbar
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
            <p className="name">
              {locale === "en"
                ? watches[sizeActiveIdx].name
                : watches[sizeActiveIdx].arname}
            </p>
            <p className="price">
              {t("From")}: <span>699$</span>
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
            className="swiper-case"
            style={{}}
            centeredSlides={true}
            slidesPerView={1}
            spaceBetween={5}
            breakpoints={{
              300: { slidesPerView: 1.5 },
              400: { slidesPerView: 1.5 },
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
            <p className="name">
              {locale === "en"
                ? cases[caseActiveIdx].name
                : cases[caseActiveIdx].arname}
            </p>
            <p className="price">
              {t("Price")}: <span>{cases[caseActiveIdx].price}</span>
            </p>
          </div>
        )}
      </div>
      <div className="swiper-btns-wrap">
        <div className="swiper-button-container">
          <div
            className="btn-wrap btn-wrap-size"
            onClick={() => setSwiperType("size")}
          >
            <Image width={18} height={25} src="/Frame-icon.svg" alt="" />
            <button
              className="swiper-button"
              onClick={() => setSwiperType("size")}
            >
              {swiperType === "size" ? "" : t("Case Size")}
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
                  {locale === "en" ? watches[0].size : watches[0].arsize}
                </li>
                <li
                  style={{
                    color: sizeActiveIdx === 1 ? "#fff" : "#ffffff88",
                  }}
                  onClick={() => {
                    handleSelectSize(1);
                  }}
                >
                  {locale === "en" ? watches[1].size : watches[0].arsize}
                </li>
                <li
                  style={{
                    color: sizeActiveIdx == 2 ? "#fff" : "#ffffff88",
                  }}
                  onClick={() => {
                    handleSelectSize(2);
                  }}
                >
                  {locale === "en" ? watches[2].size : watches[0].arsize}
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
                {t("Case Type")}
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
                  {t("RAW TITANIUM CASE")}
                </p>
                <p>
                  {locale === "en"
                    ? cases[caseActiveIdx].name.toUpperCase()
                    : cases[caseActiveIdx].arname}
                </p>
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
                {t("Strap Color")}
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
                    <p>{locale === "en" ? color.name : color.arname}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
          {swiperType === "strap" && (
            <div className="btn-wrap btn-complete">
              <button className="">{t("comp")}</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
