import nodemailer from 'nodemailer';

// In-memory rate limit store (resets on serverless cold start)
const rateLimit = {};
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 3;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, company, subject, message, honey } = req.body;

  // Honeypot spam protection
  if (honey) {
    return res.status(200).json({ ok: true }); // Silently accept spam
  }

  // Basic rate limiting by IP
  const ip = req.headers['x-forwarded-for']?.split(',')[0] || req.socket?.remoteAddress || 'unknown';
  const now = Date.now();
  if (!rateLimit[ip]) rateLimit[ip] = [];
  rateLimit[ip] = rateLimit[ip].filter(ts => now - ts < RATE_LIMIT_WINDOW);
  if (rateLimit[ip].length >= MAX_REQUESTS_PER_WINDOW) {
    return res.status(429).json({ error: 'Too many requests. Please try again later.' });
  }
  rateLimit[ip].push(now);

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `Portfolio Contact <${process.env.GMAIL_USER}>`,
      to: 'salamasaikiran@gmail.com',
      subject: `New message from ${name} (${subject})`,
      text: `
        Name: ${name}
        Email: ${email}
        Company: ${company}
        Subject: ${subject}
        Message: ${message}
      `,
    });
    res.status(200).json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: 'Failed to send message.' });
  }
} 