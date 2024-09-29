const mailjet = require("node-mailjet").apiConnect(
  process.env.MAILJET_API_KEY,
  process.env.MAILJET_SECRET_KEY
);

const sendOtpEmail = async (userEmail, otp) => {
  try {
    const request = mailjet.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: "jaquenvhagar@gmail.com",
            Name: "YoungGeezer",
          },
          To: [
            {
              Email: userEmail,
            },
          ],
          Subject: "Your OTP Code",
          TextPart: `Your OTP for registration is: ${otp}`,
        },
      ],
    });

    await request;
    console.log("OTP email sent to", userEmail, "and otp is ", otp);
  } catch (error) {
    console.error("Cant send Otp ", error.message);
  }
};

const sendRegistrationEmail = async (userEmail) => {
  try {
    const request = mailjet.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: "jaquenvhagar@gmail.com",
            Name: "YoungGeezer",
          },

          To: [
            {
              Email: userEmail,
              Name: "Bro",
            },
          ],
          Subject: "Welcome to YoungGeezer",
          TextPart: `Hi,

Thanks for registering with YoungGeezer! You can now log in and start exploring.

Log in here to access your account.

If you need help, contact us at ${process.env.SUPPORT_EMAIL}.

Welcome aboard!

Best,
YoungGeezer Team
YoungGeezer.com`,
        },
      ],
    });

    await request;
    console.log("Registration mail send to: ", userEmail);
  } catch (error) {
    console.error("Error sending Registration mail: ", error.message);
  }
};

module.exports = {
  sendRegistrationEmail,
  sendOtpEmail,
};
