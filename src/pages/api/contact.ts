import type { NextApiRequest, NextApiResponse } from 'next';
import { sendEmail } from './sendEmail';

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, phone, message }: ContactFormData = req.body;
    try {
      sendEmail({ name, email, phone, message });
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to send email' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
