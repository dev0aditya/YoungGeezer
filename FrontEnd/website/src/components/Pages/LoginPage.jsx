import React, { useState } from "react";
import Login from "../Sections/Login";
import Otp from "../Sections/Otp";

function LoginPage() {
  const [reqOTP, setReqOTP] = useState(false);

  return reqOTP ? (
    <Otp setReqOTP={setReqOTP} reqOTP={reqOTP} />
  ) : (
    <Login setReqOTP={setReqOTP} reqOTP={reqOTP} />
  );
}

export default LoginPage;
