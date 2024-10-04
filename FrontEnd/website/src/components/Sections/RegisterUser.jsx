import { useState } from "react";
import axios from "axios";
import { DefaultButtonG } from "../UI/Buttons";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

function RegisterUserYup() {
  const navigate = useNavigate();
  const [registerData, setRegisterData] = useState({
    phone: "",
    email: "",
    password: "",
    name: "",
  });
  const [errors, setErrors] = useState({});
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const validationSchema = Yup.object({
    name: Yup.string().required("Please enter your name"),
    email: Yup.string()
      .required("Please enter your email")
      .email("Invalid email format"),
    phone: Yup.string()
      .matches(/^\d{10}$/, "Enter a valid phone number")
      .required("Phone number is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Please add at least 8 characters")
      .matches(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Password should contain at least one symbol"
      )
      .matches(/[0-9]/, "Passwords must have at least one number")
      .matches(/[A-Z]/, "Passwords must have at least one uppercase letter")
      .matches(/[a-z]/, "Passwords must have at least one lowercase letter"),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));

    setRegisterData({
      ...registerData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await validationSchema.validate(registerData, { abortEarly: false });

      const response = await axios.post("/api/v1/auth/register", registerData);
      if (response.data.success) {
        setOtpSent(true);
        alert("OTP sent to your email.");
      }
    } catch (error) {
      if (error.inner) {
        const newErrors = {};
        error.inner.forEach((err) => {
          newErrors[err.path] = err.message;
        });
        setErrors(newErrors);
      } else {
        console.error("Error during registration:", error);
      }
    }
  };

  const handleOtpVerification = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/v1/auth/verify-otp", {
        email: registerData.email,
        otp: otp,
      });
      if (response.data.success) {
        setIsVerified(true);
        alert("OTP verified successfully!");
        navigate("/dashboard");
      } else {
        alert("Invalid OTP");
      }
    } catch (error) {
      console.error("Error during OTP verification:", error);
    }
  };

  return (
    <div className="loginContainer w-full h-screen flex justify-center items-center flex-col text-center">
      <div className="heading">
        <h2 className="text-[1.6rem] uppercase tracking-wide">Register</h2>
        <p className="text-xs font-light tracking-wide capitalize">
          Create an account to explore more!
        </p>
      </div>

      {!otpSent ? (
        <form
          className="mt-5 flex w-2/3 md:w-1/3 xl:w-1/4 3xl:w-1/5 flex-col items-center"
          onSubmit={handleSubmit}
        >
          <div
            className={`border-2 rounded-lg w-full mb-2 ${
              errors?.name ? "border-red-400" : ""
            }`}
          >
            <input
              className="p-[0.3rem] w-full pl-3 font-light text-lg bg-transparent focus:outline-none"
              placeholder="Full Name"
              name="name"
              value={registerData.name}
              onChange={handleChange}
              type="text"
            />
          </div>

          <div
            className={`border-2 rounded-lg w-full mb-2 ${
              errors?.email ? "border-red-400" : ""
            }`}
          >
            <input
              className="p-[0.3rem] w-full font-light pl-3 text-lg bg-transparent focus:outline-none"
              placeholder="joe@gmail.com"
              type="email"
              name="email"
              value={registerData.email}
              onChange={handleChange}
            />
          </div>

          <div
            className={`border-2 rounded-lg w-full mb-2 ${
              errors?.phone ? "border-red-400" : ""
            }`}
          >
            <input
              className="p-[0.3rem] w-full pl-3 font-light text-lg bg-transparent focus:outline-none"
              placeholder="Phone Number"
              type="tel"
              name="phone"
              value={registerData.phone}
              onChange={handleChange}
            />
          </div>

          <div
            className={`border-2 rounded-lg w-full mb-2 ${
              errors?.password ? "border-red-400" : ""
            }`}
          >
            <input
              className="p-[0.3rem] w-full font-light pl-3 text-lg bg-transparent focus:outline-none"
              placeholder="Password"
              type="password"
              name="password"
              value={registerData.password}
              onChange={handleChange}
            />
          </div>

          <DefaultButtonG
            type="submit"
            value={"Proceed"}
            className="mt-5 text-md h-[2.5rem] text-sm 3xl:h-11"
          />
        </form>
      ) : (
        <form onSubmit={handleOtpVerification}>
          <input
            className="p-[0.3rem] w-full pl-3 font-light text-lg bg-transparent focus:outline-none"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            type="text"
            required
          />
          <DefaultButtonG
            type="submit"
            value={"Verify OTP"}
            className="mt-5 text-md h-[2.5rem] text-sm 3xl:h-11"
          />
        </form>
      )}

      {isVerified && <p>Your account has been successfully registered!</p>}

      <div className="optionContainer flex flex-col items-center">
        <div className="optTitle mt-5 opacity-40">
          <p className="text-base lowercase tracking-tight font-light">
            Already a member?
          </p>
        </div>

        <DefaultButtonG
          value={"Sign In"}
          className="mt-3 text-md h-[2.5rem] 3xl:h-11 bg-transparent border-2 border-color-secondary/80 text-sm text-color-secondary hover:text-color-primary hover:bg-color-secondary/80 w-2/5"
        />
      </div>
    </div>
  );
}

export default RegisterUserYup;
