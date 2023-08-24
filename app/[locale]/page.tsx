"use client";
import Link from "next/link";
import React from "react";
import { keyframes, styled } from "styled-components";

import "@styles/globals.css";
import { useTranslations } from "next-intl";

type LandingType = {
  params: { locale: "ar" | "en" };
};

const LandingPage = ({ params: { locale } }: LandingType) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const t = useTranslations("Index");

  return (
    <Container>
      <TextWrapper>
        <Title src="/title.png" alt="GRANDEUR" />
        <div className="P-wrap">
          <P>{t("landing-title")}</P>
        </div>
        <Caption>{t("landing-subtitle")}</Caption>
        <>
          <Link href={"/customizer"}>
            <Button
              lang={locale}
              onMouseEnter={() => {
                setIsHovered(true);
              }}
              onMouseLeave={() => {
                setIsHovered(false);
              }}
              isHovered={isHovered}
            >
              <Icon isHovered={isHovered} src={"/Vector.svg"} alt="" />
            </Button>
          </Link>
        </>
      </TextWrapper>
      <div className="hero-wrap">
        <div className="her-con">
          <Hero src={"/hero_watch.png"} alt="GRANDEUR" />
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  margin: 0;
  padding: 0px 150px;
  height: calc(80vh - 100px);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  @media screen and (max-width: 1100px) {
    padding: 0px 45px;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 0px 25px;
  }

  .hero-wrap {
    width: 100% !important;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

    @media screen and (max-width: 1100px) {
      width: 28vw;
    }

    @media screen and (max-width: 768px) {
      justify-content: flex-end;
    }
  }

  .her-con {
    width: 22.5vw;

    @media screen and (max-width: 1300px) {
      width: 25vw;
    }

    @media screen and (max-width: 920px) {
      width: 35vw;
    }

    @media screen and (max-width: 600px) {
      width: 50vw;
    }
  }

  * {
    box-sizing: border-box;
    font-family: sans-serif;
  }
`;

const TextWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: auto 0;

  @media screen and (max-width: 768px) {
    padding: 0;
  }

  .P-wrap {
    width: 30vw;

    @media screen and (max-width: 1200px) {
      width: 40vw;
    }

    @media screen and (max-width: 768px) {
      width: 50vw;
    }
  }
`;

const Title = styled.img`
  @media screen and (max-width: 1200px) {
    width: 35vw;
  }

  @media screen and (max-width: 768px) {
    width: 50vw;
  }
`;

const P = styled.p`
  /* Build a Watch on your Style */
  color: #484848;
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: 500;
  margin: 20px 0 0px 0;
  height: 65px;
  font-size: 35px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  @media screen and (max-width: 1200px) {
    font-size: 30px;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 768px) {
    font-size: 25px;
  }
`;

const Caption = styled.p`
  /* Starts from $380 */
  width: 200px;
  height: 29px;
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  display: flex;
  align-items: center;
  color: #000000;
`;

const ButtonAnimation = keyframes`
  0% {
      padding: 10px 100px 10px 15px;
  }
  100% {
      padding: 10px 105px 10px 15px;
  }
`;

const Button = styled.button<{ isHovered: boolean; lang: "en" | "ar" }>`
  padding: 10px 100px 10px 15px;
  animation: ${({ isHovered }) => (isHovered ? ButtonAnimation : "none")} 0.2s
    forwards;
  animation-delay: 0.2s;
  margin: 20px 0;
  background: #00000086;
  border: none;
  border-radius: 20px;
  font-size: 14px;
  display: flex;
  align-items: center;
  color: #ffffff;
  font-family: "Lato", sans-serif;
  cursor: pointer;
  overflow: hidden;
  position: relative;

  &::before {
    content: "${({ lang }) => (lang == "en" ? "New" : "الان")}";
    position: absolute;
    left: -30px;
    top: 10px;
    width: 20px;
    height: 20px;
    font-size: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    transition: transform 0.01;
    animation: ${({ isHovered }) => (isHovered ? NewAnimation : "none")} 0.5s
      forwards ease-in-out;
    animation-delay: 2s;
  }
  &::after {
    content: "${({ lang }) => (lang == "en" ? "Start Now" : "ابداء الان")}";
    position: absolute;
    right: 15px;
    top: 12.5px;
    font-size: 14px;
    color: #ffffff;
    animation: ${({ isHovered }) => (isHovered ? GetStartedAnimation : "none")}
      1.523s forwards;
    animation-delay: 0.3s;
  }
`;

const GetStartedAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(15px);
  }
  50% {
    transform: translateX(5px);
  }
  75% {
    transform: translateX(10px);
  }
  100% {
    transform: translateX(100px);
  }
`;

const NewAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(90px);
  }
`;

const IconAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  30% {
    transform: rotate(45deg);
  }
  60% {
    transform: rotate(90deg);
  }
  90% {
    transform: scale(1.3) translateX(80px) rotate(90deg);
  }
  100% {
    transform: scale(1.9) translateX(25px) rotate(90deg);
  }
`;

const Icon = styled.img<{ isHovered: boolean }>`
  width: 15px;
  margin-right: 10px;
  animation: ${({ isHovered }) => (isHovered ? IconAnimation : "none")} 2.2s
    forwards;
`;

const Hero = styled.img`
  width: 100%;
`;

export default LandingPage;
