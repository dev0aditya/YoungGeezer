import React, { useState, useRef } from "react";
import { DefaultButtonG } from "../UI/Buttons";

function Login({ setReqOTP, reqOTP }) {
  const inputBox = useRef();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [switchToEmail, setSwitchToEmail] = useState(false);

  const handleSwitch = () => {
    setSwitchToEmail(!switchToEmail);
    inputBox.current.classList.contains("border-rose-400")
      ? inputBox.current.classList.remove("border-rose-400")
      : "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleError = () => {
    setReqOTP(!reqOTP);
    switchToEmail
      ? email.endsWith("@gmail.com")
        ? inputBox.current.classList.remove("border-rose-400")
        : inputBox.current.classList.add("border-rose-400")
      : phoneNumber.length < 10
      ? inputBox.current.classList.add("border-rose-400")
      : inputBox.current.classList.remove("border-rose-400");
  };

  return (
    <div className="loginContainer w-full h-screen flex justify-center items-center flex-col text-center">
      <div className="heading">
        <h2 className="text-[1.6rem] uppercase font-medium tracking-tight font-secondaryFont">
          Login with{" "}
          <span className="text-color-secondary">
            {switchToEmail ? "email" : "otp"}
          </span>
        </h2>
        <p className="text-xs tracking-wide mt-1">
          {switchToEmail
            ? "Please enter your valid email ID"
            : "Please enter your 10 digit mobile number"}
        </p>
      </div>
      <form onSubmit={handleSubmit} className="mt-5 flex flex-col items-center">
        <div className="border-2 rounded-xl w-fit" ref={inputBox}>
          {switchToEmail ? (
            <input
              className="p-2 pl-3 text-xl bg-transparent focus:outline-none"
              placeholder="name@gmail.com"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          ) : (
            <>
              <label className="inline-block p-2 px-4 text-xl border-r-2">
                +91
              </label>
              <input
                className="p-2 pl-3 text-xl bg-transparent focus:outline-none"
                placeholder="Phone Number"
                type="number"
                value={phoneNumber}
                onChange={(e) => {
                  const value = e.target.value;
                  if (value.length <= 10) {
                    setPhoneNumber(value);
                  }
                }}
                required
              />
            </>
          )}
        </div>
        <DefaultButtonG
          type="submit"
          value={"Request OTP"}
          className="mt-5 text-md h-[2.7rem] text-sm"
          onClick={handleError}
        />
        <p className="text-[0.72rem] tracking-normal mt-1 opacity-50 font-light">
          A 6 digit otp will be sent to your{" "}
          {switchToEmail ? "email ID" : "phone number"}
        </p>
      </form>
      <div className="optionContainer flex flex-col items-center">
        <div className="optTitle mt-10">
          <p className="text-base opacity-80 lowercase">Or Sign-in with</p>
        </div>
        <DefaultButtonG
          onClick={handleSwitch}
          value={switchToEmail ? "Phone" : "Email"}
          className="mt-5 text-md h-[2.7rem] bg-transparent border-2 border-color-secondary/80 text-sm text-color-secondary hover:text-color-primary hover:bg-color-secondary/80"
        />
      </div>
    </div>
  );
}

export default Login;
