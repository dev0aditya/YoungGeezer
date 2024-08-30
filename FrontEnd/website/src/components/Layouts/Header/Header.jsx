import React from "react";
import { LuShoppingBag } from "react-icons/lu";
import { IoPersonOutline } from "react-icons/io5";
import { useState } from "react";
import styled from "styled-components";

function Header() {
  const [isActive, setIsActive] = useState(false);

  const toggleHamburger = (e) => {
    setIsActive(!isActive);
  };
  return (
    <>
      <div className="header fixed w-screen z-50 top-0">
        <div className="navigation flex justify-between px-6 py-4 items-center border-b-2 border-[#006d5b] drop-shadow-2xl bg-[#f7f7e7] lg:px-16 lg:py-6 xl:py-5">
          <div className="menu">
            <Hamburger
              className={`hamburger ${
                isActive ? "is-active" : ""
              } cursor-pointer`}
              id="hamburger-11"
              onClick={toggleHamburger}
            >
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </Hamburger>
          </div>
          <div className="logo font-secondaryFont font-bold text-2xl text-color-secondary lg:text-3xl absolute left-2/4 translate-x-[-50%]">
            YoungGeezer
          </div>
          <div className="bag text-xl text-color-primary bg-[#006d5b] p-2 rounded-full lg:text-2xl lg:p-3 flex gap-6 xl:rounded-2xl">
            <LuShoppingBag />
            <IoPersonOutline className="hidden xl:block" />
          </div>
        </div>
        <div
          className={`navModal-wrapper h-screen w-screen ${
            isActive ? "is-active" : ""
          }`}
        >
          <div
            className={`navModal bg-[#f7f7e7] relative w-full md:w-2/5 xl:w-1/4 h-screen ${
              isActive ? "is-active" : ""
            }`}
          >
            <ul className="navLinks">
              <li>Mens</li>
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
  -webkit-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;

  .line {
    width: 26px;
    height: 1.8px;
    border-radius: 10px;
    background-color: #006d5b;
    display: block;
    margin: 4px auto;
    -webkit-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }

  .line:nth-child(2) {
    width: 20px;
  }

  :hover {
    cursor: pointer;
  }

  &.is-active {
    transition: 0.5s ease-in-out;
    animation: smallbig 0.3s forwards;
  }

  @keyframes smallbig {
    0%,
    100% {
      -webkit-transform: scale(1);
      -ms-transform: scale(1);
      -o-transform: scale(1);
      transform: scale(1);
    }

    50% {
      -webkit-transform: scale(0);
      -ms-transform: scale(0);
      -o-transform: scale(0);
      transform: scale(0);
    }
  }

  &.is-active .line:nth-child(1),
  &.is-active .line:nth-child(2),
  &.is-active .line:nth-child(3) {
    -webkit-transition-delay: 0.2s;
    -o-transition-delay: 0.2s;
    transition-delay: 0.2s;
  }

  &.is-active .line:nth-child(2) {
    opacity: 0;
  }

  &.is-active .line:nth-child(1) {
    -webkit-transform: translateY(5.5px) rotate(45deg);
    -ms-transform: translateY(5.5px) rotate(45deg);
    -o-transform: translateY(5.5px) rotate(45deg);
    transform: translateY(5.5px) rotate(45deg);
  }

  &.is-active .line:nth-child(3) {
    -webkit-transform: translateY(-5.5px) rotate(-45deg);
    -ms-transform: translateY(-5.5px) rotate(-45deg);
    -o-transform: translateY(-5.5px) rotate(-45deg);
    transform: translateY(-5.5px) rotate(-45deg);
  }
`;

export default Header;
