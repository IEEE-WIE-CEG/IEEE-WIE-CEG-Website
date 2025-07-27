import { Router, Request, Response } from 'express';
import nodemailer from 'nodemailer';

const router = Router();

router.post('/', async (req: Request, res: Response) => {
  const { firstName, lastName, email, department, university, subject, message } = req.body;

  if (!firstName || !lastName || !email || !subject || !message) {
    return res.status(400).json({ success: false, message: 'Missing required fields' });
  }

  const fullName = `${firstName} ${lastName}`;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"WIE Contact Form" <${process.env.EMAIL_USER}>`,  
      to: process.env.EMAIL_USER,
      replyTo: email,  

      subject: `IEEE-WIE Contact: ${subject} - From ${fullName}`,

      text: `
      New message from IEEE-WIE Contact Form:

      Name: ${fullName}
      Email: ${email}
      Department: ${department || 'N/A'}
      University: ${university || 'N/A'}

      Message:
      ${message}
        `,
      };

    const info = await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Email sent successfully', id: info.messageId });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ success: false, message: 'Email failed to send' });
  }
});


export default router;
