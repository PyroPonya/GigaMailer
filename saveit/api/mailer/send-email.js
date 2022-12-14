import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  
  const { firstName, lastName, email, message } = JSON.parse(req.body);
  const baseMail = 'info@kosmospromedia.ru';

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "myEmail@gmail.com",
        pass: "password",
    },
  });

  await new Promise((resolve, reject) => {
      // verify connection configuration
      transporter.verify(function (error, success) {
          if (error) {
              console.log(error);
              reject(error);
          } else {
              console.log("Server is ready to take our messages");
              resolve(success);
          }
      });
  });

  const mailData = {
      from: {
          name: `${firstName} ${lastName}`,
          address: "myEmail@gmail.com",
      },
      replyTo: email,
      to: "recipient@gmail.com",
      subject: `form message`,
      text: message,
      html: `${message}`,
  };

  await new Promise((resolve, reject) => {
      // send mail
      transporter.sendMail(mailData, (err, info) => {
          if (err) {
              console.error(err);
              reject(err);
          } else {
              console.log(info);
              resolve(info);
          }
      });
  });
  res.status(200).json({ status: "OK" });
  const { body } = req;
  return res.send(`Hello ${body.name}, you just parsed the request body!`);
};
