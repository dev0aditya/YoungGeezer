import React, { useState, useRef } from "react";
import { DefaultButtonG } from "../UI/Buttons";

function Login({ setReqOTP, reqOTP }) {
  const inputBox = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const [userData, setUserData] = useState(null);

  const handleSwitch = () => {
    setIsRegister(!isRegister);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userPayload = {
      email,
      password,
      ...(isRegister && { phoneNumber }), // Only include full name and phone if registering
    };

    try {
      const response = await handleLogin(userPayload);
      if (response.ok) {
        const data = await response.json();
        setUserData(data); // Set the user data
        if (isRegister) setReqOTP(!reqOTP); // Trigger OTP if it's a registration
      } else {
        console.error("Error logging in or registering:", response.statusText);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  const handleLogin = async (userPayload) => {
    const endpoint = isRegister
      ? "http://localhost:3000/api/v1/auth/register"
      : "http://localhost:3000/api/v1/auth/login";

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userPayload),
    });

    return response;
  };

  const handleError = () => {
    email.endsWith("@gmail.com")
      ? inputBox.current.classList.remove("border-rose-400")
      : inputBox.current.classList.add("border-rose-400");
  };

  return (
    <div className="loginContainer w-full h-screen flex justify-center items-center flex-col text-center">
      <div className="heading">
        <h2 className="text-[1.6rem] uppercase font-light">
          {isRegister ? "Register" : "Login"}
        </h2>
        <p className="text-xs font-light tracking-wide capitalize">
          {isRegister
            ? "Create an account to explore more!"
            : "Please enter your registered email ID"}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-5 flex flex-col items-center">
        {isRegister && (
          <div className="border-2 rounded-lg w-fit mb-2">
            <input
              className="p-[0.3rem] pl-3 font-light text-lg bg-transparent focus:outline-none"
              placeholder="Full Name"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
        )}

        <div className="border-2 rounded-lg w-fit" ref={inputBox}>
          <input
            className="p-[0.3rem] font-light pl-3 text-lg bg-transparent focus:outline-none"
            placeholder="joe@gmail.com"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {isRegister && (
          <div className="border-2 rounded-lg w-fit mt-2">
            <input
              className="p-[0.3rem] pl-3 font-light text-lg bg-transparent focus:outline-none"
              placeholder="Phone Number"
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
        )}

        <div className="border-2 rounded-lg w-fit mt-2">
          <input
            className="p-[0.3rem] font-light pl-3 text-lg bg-transparent focus:outline-none"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <DefaultButtonG
          type="submit"
          value={isRegister ? "Continue" : "Sign In"}
          className="mt-5 text-md h-[2.5rem] text-sm"
          onClick={handleError}
        />
        <p className="text-[0.72rem] tracking-normal mt-1 opacity-50 font-light">
          {isRegister
            ? "We hope you enjoy your experience!"
            : "Glad to see you back!"}
        </p>
      </form>

      <div className="optionContainer flex flex-col items-center">
        <div className="optTitle mt-5 opacity-40">
          <p className="text-base lowercase tracking-tight font-light">
            {isRegister ? "Already a member?" : "New here?"}
          </p>
        </div>

        <DefaultButtonG
          onClick={handleSwitch}
          value={isRegister ? "Sign In" : "Register"}
          className="mt-3 text-md h-[2.5rem] bg-transparent border-2 border-color-secondary/80 text-sm text-color-secondary hover:text-color-primary hover:bg-color-secondary/80 w-2/5"
        />
      </div>
    </div>
  );
}

export default Login;
