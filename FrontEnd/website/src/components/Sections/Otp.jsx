import React from "react";
import { DefaultButtonG } from "../UI/Buttons";

function Otp(setReqOTP, reqOtp) {
  return (
    <div className="loginContainer w-full h-screen flex justify-center items-center flex-col text-center">
      <div className="heading">
        <h2 className="text-[1.6rem] uppercase font-medium tracking-tight font-secondaryFont">
          Please Enter OTP for
          <span className="text-color-secondary"> verification</span>
        </h2>
        <p className="text-xs tracking-wide mt-1 opacity-70">
          Verification code has been sent to your Phone Number
        </p>
        <p className="text-xs tracking-wide mt-1 opacity-70">+917276000996</p>
      </div>
      <div className="optInput flex flex-col mt-7 items-center">
        <input
          type="number"
          className="border-2 rounded-xl w-fit p-2 pl-3 text-xl bg-transparent focus:outline-none"
        />
        <DefaultButtonG
          value={"Verify to proceed"}
          className="mt-4 text-sm w-3/5 h-[2.7rem]"
        />
        <p className="mt-2 opacity-70 text-sm">
          Didn't receive the OTP? Resend in 01:00
        </p>
      </div>
    </div>
  );
}

export default Otp;
