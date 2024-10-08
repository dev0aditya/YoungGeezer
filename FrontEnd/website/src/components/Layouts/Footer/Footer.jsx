import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footerContainer text-sm px-6 pt-7 bg-[#006d5b] mt-14 md:mt-16 w-full xl:px-36 2xl:px-48 3xl:px-60 4xl:px-72">
      <div className="footerlinks grid grid-cols-2 md:grid-cols-3 mb-7 gap-y-2">
        <div className="category">
          <h4 className="footer-heading">Category</h4>
          <ul>
            <li className="footer-links">
              <a href="amazon.com">Home</a>
            </li>
            <li className="footer-links">Men</li>
            <li className="footer-links">Women</li>
            <li className="footer-links">New Arrival</li>
            <li className="footer-links">About us</li>
            <li className="footer-links">Contact</li>
          </ul>
        </div>
        <div className="policies">
          <h4 className="footer-heading">Policies</h4>
          <ul>
            <li className="footer-links">Search</li>
            <li className="footer-links">
              <Link to="/termsandcondition">Terms and Condition</Link>
            </li>
            <li className="footer-links">Privacy Policy</li>
            <li className="footer-links">Return Policy</li>
            <li className="footer-links">Shopping Policy</li>
            <li className="footer-links">FAQ</li>
            <li className="footer-links">Return your Order</li>
            <li className="footer-links">Track your Order</li>
          </ul>
        </div>
        <div className="contact col-span-2 md:col-span-1">
          <h4 className="footer-heading">Contact Info:</h4>
          <ul>
            <li className="text-[#d2b48c]">
              Email : <span className="footer-links">dummymail@gmail.com</span>
            </li>
            <li className="text-[#d2b48c]">
              Mobile : <span className="footer-links">+9190000000</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright pb-1">
        <p className="text-center md:text-left text-sm xl:text-base">
          © 2024,{" "}
          <span className="font-bold font-secondaryFont text-[#d2b48c]">
            Young Geezer
          </span>{" "}
          Designed & Developed By <span className="font-normal">SPA Dev`s</span>
        </p>
      </div>
    </div>
  );
}

export default Footer;
