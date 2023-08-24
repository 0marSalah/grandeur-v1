"use client";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { useTransition } from "react";
import styled from "styled-components";
import LocaleSwitcher from "./LocaleSwitcher";
import Link from "next/dist/client/link";

type HeaderType = {
  clicked: boolean;
  handleX: () => void;
};

const HeaderCom = ({ clicked, handleX }: HeaderType) => {
  const locale = useLocale();

  const list = [
    {
      name: locale === "en" ? "Premium Watches" : "الساعات المميزة",
      link: "/",
    },
    {
      name: locale === "en" ? "Newsletter" : "النشرة الإخبارية",
      link: "/",
    },
    {
      name: locale === "en" ? "FAQs" : "الأسئلة الشائعة",
      link: "/",
    },
    {
      name: locale === "en" ? "Contact us" : "اتصل بنا",
      link: "/",
    },

    {
      name: locale === "en" ? "Shopping cart" : "عربة التسوق",
      link: "/",
    },

    {
      name: locale === "en" ? "Payment page" : "الدفع الالكتروني",
      link: "/",
    },
  ];
  return (
    <>
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
          src="/x.svg"
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
          <LocaleSwitcher />
          <p className="mob-login-btn">Login/Regisger</p>
        </ul>
      </div>
      <Header>
        <LogoWrapper>
          <Link href="/">
            <Image width={195} height={37} src={"/logo.png"} alt="logo" />
          </Link>
        </LogoWrapper>
        <Ul>
          <LocaleSwitcher />
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
          <p className="-btn">{locale === "en" ? "Register" : "انشاء حساب"}</p>
          <button className="login-btn">
            {locale === "en" ? "Login" : "تسجيل دخول"}
          </button>
        </div>
        <Image
          width={30}
          height={30}
          src="/burger.svg"
          alt=""
          className="burger"
        />
      </Header>
    </>
  );
};

export default HeaderCom;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 25px;
  width: 100%;
  direction: ltr;

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
    white-space: nowrap;

    &:not(:last-child):after {
      content: "|";
      margin-left: 10px;
    }
  }
`;
