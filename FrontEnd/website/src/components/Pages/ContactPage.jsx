import React, { useState } from "react";
import { ButtonFullWidth } from "../UI/Buttons";
import toast from "react-hot-toast";

function ContactPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);
  const [messageTouched, setMessageTouched] = useState(false);

  const validEmail = email.endsWith("@gmail.com");
  const validMessage = message.length > 10;

  const onSubmit = async (event) => {
    event.preventDefault();
    if (validEmail && validMessage) {
      const formData = new FormData(event.target);
      formData.append("access_key", "9673ed21-4b09-47b8-9b0a-a69910021ad8");

      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        toast.success("Message sent successfully");
      }
    }
  };

  return (
    <>
      <div className="bagHeading mt-[4.5rem] flex justify-start px-6 py-5 drop-shadow-2xl border-b-2 border-color-secondary/5 md:mb-5">
        <h1 className="text-2xl text-color-secondary tracking-normal font-medium xl:px-10">
          Contact Us
        </h1>
      </div>
      <div className="flex justify-center">
        <form
          className="contactForm flex flex-col justify-center w-full px-6 md:w-3/5 xl:w-3/6 py-5 gap-4"
          onSubmit={onSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            className="border-2 border-[#006d5b]/80 rounded-lg h-10 px-3 focus:outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="email@gmail.com"
            className={`border-2 rounded-lg h-10 px-3 focus:outline-none ${
              emailTouched && !validEmail
                ? "border-red-400"
                : "border-[#006d5b]/80"
            }`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => setEmailTouched(true)}
          />
          <textarea
            rows="10"
            name="message"
            placeholder="Message"
            className={`border-2 rounded-lg px-3 py-2 focus:outline-none resize-none ${
              messageTouched && !validMessage
                ? "border-red-400"
                : "border-[#006d5b]/80"
            }`}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onBlur={() => setMessageTouched(true)}
          ></textarea>
          <ButtonFullWidth value={"Send"} type="submit" />
        </form>
      </div>
    </>
  );
}

export default ContactPage;
