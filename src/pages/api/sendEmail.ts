import nodemailer from 'nodemailer';
type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export const sendEmail = async ({
  name,
  email,
  phone,
  message,
}: ContactFormData) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.dreamhost.com',
    port: 465,
    secure: true,
    auth: {
      user: 'contato@mutualiza.com.br',
      pass: 'ACY66c6P',
    },
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
