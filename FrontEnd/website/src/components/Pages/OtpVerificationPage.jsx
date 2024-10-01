import React from "react";

import { DefaultButtonG } from "../UI/Buttons";
import * as Yup from "yup";

function OtpVerificationPage() {
  return (
    <div className="loginContainer w-full h-screen flex justify-center items-center flex-col text-center">
      <div className="heading">
        <h2 className="text-[1.6rem] uppercase tracking-wide">Enter OTP</h2>
        <p className="text-xs font-light tracking-wide capitalize">
          5 digit OTP has been sent to your register email
        </p>
      </div>

      <form className="mt-5 flex w-2/3 md:w-1/3 xl:w-1/4 3xl:w-1/5 flex-col items-center">
        <div className={`border-2 rounded-lg w-full mb-2`}>
          <input
            className="p-[0.3rem] w-full pl-3 text-lg md:text-xl bg-transparent focus:outline-none text-center font-medium"
            style={{ letterSpacing: "1.5rem" }}
            placeholder="OTP"
            name="name"
            type="text"
          />
        </div>

        <DefaultButtonG
          type="submit"
          value={"Register"}
          className="mt-5 text-md h-[2.5rem] text-sm 3xl:h-11"
        />
        <p className="text-[0.72rem] tracking-normal mt-1 opacity-50 font-light">
          We hope you enjoy your experience!
        </p>
      </form>
    </div>
  );
}

export default OtpVerificationPage;
