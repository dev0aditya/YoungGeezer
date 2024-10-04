import React, { useState } from "react";
import { DefaultButtonG } from "../UI/Buttons";
import * as Yup from "yup";

function OtpVerificationPage() {
  const [otp, setOtp] = useState("");
  const [errors, setErrors] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await validationSchema.validate({ otp }, { abortEarly: false });
      console.log("Form Submitted", otp);
    } catch (error) {
      const newError = {};
      error.inner.forEach((err) => {
        newError[err.path] = err.message;
      });
      setErrors(newError);
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;

    if (/^\d*$/.test(value) && value.length <= 5) {
      setOtp(value);
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      otp: "",
    }));
  };

  const validationSchema = Yup.object({
    otp: Yup.string()
      .required("OTP is required")
      .length(5, "Please enter exactly 5 digits"),
  });

  return (
    <div className="loginContainer w-full h-screen flex justify-center items-center flex-col text-center">
      <div className="heading">
        <h2 className="text-[1.6rem] uppercase tracking-wide">Enter OTP</h2>
        <p className="text-xs font-light tracking-wide capitalize">
          A 5-digit OTP has been sent to your registered email
        </p>
      </div>

      <form className="mt-5 flex w-2/3 md:w-1/3 xl:w-1/4 3xl:w-1/5 flex-col items-center">
        <div
          className={`border-2 rounded-lg w-full mb-2 ${
            errors?.otp ? "border-red-400" : ""
          }`}
        >
          <input
            className="p-[0.3rem] w-full pl-3 text-lg md:text-xl bg-transparent focus:outline-none text-center font-medium"
            style={{ letterSpacing: "1.5rem" }}
            placeholder="OTP"
            name="otp"
            type="text"
            value={otp}
            onChange={handleChange}
            maxLength={5}
          />
        </div>

        <DefaultButtonG
          onClick={handleSubmit}
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
