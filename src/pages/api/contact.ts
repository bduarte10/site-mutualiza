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
    const { name, email, phone, message } = req.body as ContactFormData;
    sendEmail({ name, email, phone, message });
    res.status(200).json({ message: 'Email sent' });
  } else {
    res.status(400).json({ message: 'Invalid request' });
  }
}
