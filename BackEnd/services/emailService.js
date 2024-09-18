const mailjet = require("node-mailjet").apiConnect(
  process.env.MAILJET_API_KEY,
  process.env.MAILJET_SECRET_KEY
);

const sendRegistrationEmail = async (userEmail) => {
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

  try {
    const result = await request;
    console.log("Registration mail send to: ", userEmail);
  } catch (error) {
    console.error("Error sending Registration mail: ", error.message);
  }
};

module.exports = {
  sendRegistrationEmail,
};
