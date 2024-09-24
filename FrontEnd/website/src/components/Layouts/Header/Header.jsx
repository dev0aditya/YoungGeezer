import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { LuShoppingBag } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { IoSearch } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

import styled from "styled-components";
import gsap from "gsap";

function Header() {
  const [isActive, setIsActive] = useState(false);
  const [openNav, setOpenNav] = useState(false);
  const navModalRef = useRef(null);
  const navModalWrapperRef = useRef(null);

  const toggleHamburger = () => {
    setIsActive(!isActive);
  };

  const handleClickOutside = (e) => {
    if (navModalRef.current && !navModalRef.current.contains(e.target)) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    if (isActive) {
      gsap.to(navModalRef.current, {
        duration: 0.5,
        x: 0,
        opacity: 1,
        display: "block",
        ease: "power3.inOut",
      });
    } else {
      gsap.to(navModalRef.current, {
        duration: 0.5,
        x: "-100%",
        opacity: 1,
        display: "none",
        ease: "power3.inOut",
      });
    }
  }, [isActive]);

  useEffect(() => {
    const wrapper = navModalWrapperRef.current;
    if (wrapper) {
      wrapper.addEventListener("click", handleClickOutside);
    }

    return () => {
      if (wrapper) {
        wrapper.removeEventListener("click", handleClickOutside);
      }
    };
  }, []);

  return (
    <>
      <div
        className={`header fixed w-screen z-50 top-0 ${
          openNav ? "isactive" : ""
        }`}
      >
        <div className="navigation flex justify-between px-6 pr-4 py-4 md:px-6 items-center drop-shadow-2xl bg-[#f6f6f1] lg:px-16 lg:py-6 xl:py-3">
          <div className="menu">
            <Hamburger
              className={`hamburger cursor-pointer ${
                isActive ? "is-active" : ""
              }`}
              onClick={toggleHamburger}
            >
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </Hamburger>
          </div>
          <div className="logo font-secondaryFont font-bold text-2xl text-color-secondary lg:text-3xl absolute left-2/4 translate-x-[-50%] cursor-pointer">
            <Link to="/">YoungGeezer</Link>
          </div>
          <div className="header-links text-xl text-color-primary bg-[#006d5b] p-2 rounded-full md:px-3 lg:text-2xl lg:p-3 lg:px-4 flex gap-5 xl:rounded-2xl ml-5 items-center">
            <div className="inner-header-links relative w-fit overflow-hidden">
              <div className="flex items-center justify-end">
                <input
                  type="text"
                  className="w-0 hidden bg-color-secondary focus:outline-none px-3 text-sm"
                  placeholder="Search"
                />

                {openNav ? (
                  <IoClose
                    className="cursor-pointer"
                    onClick={() => setOpenNav(!openNav)}
                  />
                ) : (
                  <IoSearch
                    className="cursor-pointer"
                    onClick={() => setOpenNav(!openNav)}
                  />
                )}
              </div>
              <div className="search-dropdown h-0 w-full opacity-0 overflow-hidden bg-[#f6f6f1] absolute top-9 md:top-11 rounded-lg drop-shadow-2xl text-slate-400 px-3 py-1 text-sm transition-all ease-in-out duration-300 z-[99999]">
                <ul>
                  <li className="">hsgsdfgsdey</li>
                  <li className="">hsgsdfgsdey</li>
                  <li className="">hsgsdfgsdey</li>
                  <li className="">hsgsdfgsdey</li>
                </ul>
              </div>
            </div>
            <Link to="/bag">
              <div className="relative">
                <span className="absolute bg-color-subPrimary rounded-full text-[0.5rem] font-bold w-0 h-0 p-[0.4rem] flex justify-center items-center text-color-secondary top-[-18%] right-[-20%] border-[1px] border-color-primary/60 md:top-[-12%]">
                  4
                </span>
                <LuShoppingBag className="cursor-pointer" />
              </div>
            </Link>
            <CgProfile className="hidden xl:block cursor-pointer" />
          </div>
        </div>
        <div
          ref={navModalWrapperRef}
          className={`navModal-wrapper h-screen w-screen ${
            isActive ? "is-active" : ""
          }`}
        >
          <div
            ref={navModalRef}
            className="navModal bg-[#f6f6f1] relative w-full md:w-2/5 xl:w-1/4 h-screen"
          >
            <ul className="navLinks">
              <li>
                <Link to="/collections/mens-overT-shirt">Mens</Link>
              </li>
              <li>Womens</li>
              <li>Offers</li>
              <li>Orders</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

const Hamburger = styled.div`
  .line {
    width: 26px;
    height: 1.8px;
    border-radius: 10px;
    background-color: #006d5b;
    display: block;
    margin: 4px auto;
    transition: all 0.3s ease-in-out;

    &:nth-child(2) {
      width: 20px;
    }
  }

  &.is-active .line:nth-child(2) {
    opacity: 0;
  }

  &.is-active .line:nth-child(1) {
    transform: translateY(5.5px) rotate(45deg);
  }

  &.is-active .line:nth-child(3) {
    transform: translateY(-5.5px) rotate(-45deg);
  }
`;

export default Header;
