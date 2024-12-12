const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service:'gmail', // true for port 465, false for other ports
    auth: {
      user: "phpenquiry@gmail.com",
      pass: "rvce xaor nxzc ppbh",
    },
  });

  async function main() {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: '<phpenquiry@gmail.com>', // sender address
      to: "mdoijade0@gmail.com, riteshwakale121@gmail.com", // list of receivers
      subject: "NODE EMAIL ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body
    });
  
    console.log("Message sent: %s", info.messageId);
    // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
  }
  
  main().catch(console.error);