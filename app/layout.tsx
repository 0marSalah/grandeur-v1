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
  Vector8,
} from "@styles/Vectors";
import Link from "next/link";
import { styled } from "styled-components";
import { SelectedProvider } from "@context/active";
import StyledComponentsRegistry from "./registry";
import Image from "next/image";
import "@styles/globals.css";
import { useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const list = [
    {
      name: "Premium Watches",
      link: "/",
    },
    {
      name: "Newsletter",
      link: "/",
    },
    {
      name: "FAQs",
      link: "/",
    },
    {
      name: "Contact us",
      link: "/",
    },
    {
      name: "Shopping cart",
      link: "/",
    },
    {
      name: "Payment page",
      link: "/",
    },
  ];
  const [clicked, setClicked] = useState(false);

  const handleBurger = () => {
    setClicked(true);
  };

  const handleX = () => {
    setClicked(false);
  };

  return (
    <html lang="en">
      <body
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <StyledComponentsRegistry>
          <SelectedProvider>
            <AppWrapper>
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
                    <img
                      onClick={handleBurger}
                      src="/burger.svg"
                      alt=""
                      className="burgermob"
                    />
                    <LogoWrapperMob>
                      <LinkC href="/">
                        <img src={"logo.png"} alt="logo" />
                      </LinkC>
                    </LogoWrapperMob>
                  </HeaderConMob>
                </HeaderMob>
                <div
                  style={{
                    display: `${clicked ? "block" : "none"}`,
                    position: "fixed",
                    backgroundColor: "#000",
                    color: "white",
                    padding: "20px 70px 20px 30px",
                    left: "0",
                    top: "0",
                    zIndex: "9",
                  }}
                >
                  <Image
                    src="./x.svg"
                    alt=""
                    onClick={handleX}
                    width={25}
                    height={25}
                    className={"x-icon"}
                  />
                  <ul className="mobile-list">
                    {list.map((item, index) => (
                      <>
                        <li key={index}>{item.name}</li>
                      </>
                    ))}
                    <li>English/عربي</li>
                    <p className="mob-login-btn">Login/Regisger</p>
                  </ul>
                </div>
                <Header>
                  <LogoWrapper>
                    <Link href="/">
                      <img src={"logo.png"} alt="logo" />
                    </Link>
                  </LogoWrapper>
                  <Ul>
                    {list.slice(0, 4).map((item, index) => (
                      <li key={index}>{item.name}</li>
                    ))}
                  </Ul>
                  <div className="right-div">
                    <Image
                      src="/search.svg"
                      alt="search"
                      width={20}
                      height={20}
                      className="se"
                    />
                    <Image
                      src="/cart.svg"
                      alt="search"
                      width={20}
                      height={20}
                      className="se"
                    />
                    <button className="login-btn">Login/Regisger</button>
                  </div>
                  <img src="/burger.svg" alt="" className="burger" />
                </Header>
                {children}
              </AppContainer>
            </AppWrapper>
          </SelectedProvider>
        </StyledComponentsRegistry>
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

  @media screen and (min-width: 950px) {
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
    padding: 80px 0px 30px 0;
    min-height: 100%;
    min-width: 100%;
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

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 25px;
  width: 100%;

  .burger {
    display: none;
    width: 25px;
    margin-right: 50px;

    @media screen and (max-width: 950px) {
      display: block;
    }
  }

  @media screen and (max-width: 950px) {
    display: none;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 210px;
  margin-top: -10px;
`;

const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;

  @media screen and (max-width: 950px) {
    display: none;
  }

  li {
    font-size: 14px;
    font-weight: 400;
    color: #000000;
    cursor: pointer;
    height: 68px;
    margin-right: 10px;
    display: flex;
    align-items: center;

    &:not(:last-child):after {
      content: "|";
      margin-left: 10px;
    }
  }
`;
