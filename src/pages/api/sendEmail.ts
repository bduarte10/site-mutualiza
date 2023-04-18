import nodemailer from 'nodemailer';
import type { NextApiRequest, NextApiResponse } from 'next';

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
  res: NextApiResponse;
};

export const sendEmail = async ({
  name,
  email,
  phone,
  message,
  res
}: ContactFormData) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.dreamhost.com',
    port: 465,
    secure: true,
    auth: {
      user: 'contato@mutualiza.com.br',
      pass: 'ACY66c6P',
    },
    tls: {
      // do not fail on invalid certs
      rejectUnauthorized: false,
    }
  });
  // verify connection configuration
  transporter.verify(function (error, success) {
    if (error) {
      console.log(error);
      res.status(500).json(error);
    } else {
      console.log("Server is ready to take our messages");
      res.status(200).json('ok');
    }
  });

  const mailOptions = {
    from: 'nicolas@mutualiza.com.br',
    to: 'contato@mutualiza.com.br',
    subject: `[Site] Nova mensagem de ${name}`,
    html: `
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>
            <p>Message: ${message}</p>
        `,
  };
  await transporter.sendMail(mailOptions);
};
