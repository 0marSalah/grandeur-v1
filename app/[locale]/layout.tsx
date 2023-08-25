"use client";
import {
  Vector,
  Vector1,
  Vector3,
  Vector2,
  Vector4,
  Vector5,
  Vector6,
  Vector7,
} from "@styles/Vectors";
import Link from "next/link";
import { styled } from "styled-components";
import StyledComponentsRegistry from "../registry";
import "@styles/globals.css";
import { useEffect, useState } from "react";
import { NextIntlClientProvider } from "next-intl";
import HeaderCom from "./components/Header";
import Image from "next/image";

export default function Rootlayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}) {
  const [messages, setMessages] = useState({});
  useEffect(() => {
    const f = async () => {
      setMessages((await import(`../../messages/${locale}.json`)).default);
    };
    f();
  }, [locale]);

  const [clicked, setClicked] = useState(false);

  const handleBurger = () => {
    setClicked(true);
  };

  const handleX = () => {
    setClicked(false);
  };

  return (
    <html dir={locale === "ar" ? "rtl" : "ltr"} lang={locale}>
      <body
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <StyledComponentsRegistry>
            <AppWrapper>
              {/* <HeaderCom /> */}
              <Vector className="anim" src={"svgs/Isolationtop.svg"} alt="" />
              <Vector1
                className="anim"
                src={"svgs/Isolation_Mode2.svg"}
                alt=""
              />
              <Vector3
                className="anim"
                src={"svgs/Isolation_Mode4.svg"}
                alt=""
              />
              <Vector2
                className="anim"
                src={"svgs/Isolation_Mode3.svg"}
                alt=""
              />
              <Vector4 className="anim" src={"svgs/Frame6.svg"} alt="" />
              <Vector5 className="anim" src={"svgs/Frame.svg"} alt="" />
              <Vector6
                className="anim"
                src={"svgs/Isolation_Mode.svg"}
                alt=""
              />
              <Vector7
                className="anim"
                src={"svgs/Isolation_Mode(1).svg"}
                alt=""
              />
              <AppContainer>
                <HeaderMob>
                  <HeaderConMob>
                    <Image
                      width={30}
                      height={30}
                      onClick={handleBurger}
                      src="/burger.svg"
                      alt=""
                      className="burgermob"
                    />
                    <LogoWrapperMob>
                      <LinkC href="/">
                        <Image
                          width={195}
                          height={35}
                          src={"/logo.png"}
                          alt="logo"
                        />
                      </LinkC>
                    </LogoWrapperMob>
                  </HeaderConMob>
                </HeaderMob>
                <HeaderCom clicked={clicked} handleX={handleX} />

                {children}
              </AppContainer>
            </AppWrapper>
          </StyledComponentsRegistry>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

const HeaderMob = styled.div`
  width: 100%;
  position: fixed;
  top: 3vh;
  left: 0vw;
  display: flex;
  justify-content: center;
  direction: rtl;

  @media screen and (min-width: 1190px) {
    display: none;
  }
`;

const HeaderConMob = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 60px;

  .burgermob {
    display: block;
    position: absolute;
    left: 10%;
    top: 50%;
    width: 30px;
    transform: translate(0, -50%);
    cursor: pointer;

    @media screen and (max-width: 732px) {
      left: 7%;
      width: 25px;
    }
  }
`;

const LogoWrapperMob = styled.div`
  cursor: pointer;
`;

const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;

  overflow: hidden;
  margin: 0;
  padding: 0;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 0;
  position: relative;
  /* overflow: hidden; */

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: url("/back.png") no-repeat fixed;
    background-size: cover;
    z-index: 0;
  }

  * {
    font-family: "Roboto", sans-serif;
  }

  img {
    user-select: none;
    -webkit-user-select: none;
  }

  .anim {
    @media screen and (max-width: 950px) {
      width: 0;
    }
  }
`;
const AppContainer = styled.div`
  width: 95vw;
  height: 95vh;
  padding: 10px 0px 30px 0;
  position: relative;
  /* overflow-y: auto; */

  @media screen and (max-width: 950px) {
    padding: 170px 0px 30px 0;
    min-height: 100%;
    min-width: 100%;
  }

  @media screen and (max-width: 620px) {
    padding: 120px 0px 30px 0;
  }

  * {
    z-index: 2;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: rgba(217, 217, 217, 0.189);
    box-shadow: 0px 0px 3px 2px rgba(0, 0, 0, 0.08);
    backdrop-filter: blur(14.616px);
    -webkit-backdrop-filter: blur(14.616px);
    border-radius: 25px;

    @media screen and (max-width: 700px) {
      border-radius: 0px;
    }

    @media screen and (max-height: 700px) {
      height: 115%;
    }
  }
`;

const LinkC = styled(Link)`
  text-decoration: none;
  color: black;
  cursor: pointer;
`;
