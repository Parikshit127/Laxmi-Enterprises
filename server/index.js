import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(helmet());
app.use(express.json());

// Optional: Basic rate limiting to prevent spam
const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 10, // limit each IP to 10 requests per minute
});
app.use(limiter);

// Nodemailer setup
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

transporter.verify()
  .then(() => console.log('✅ SMTP transporter ready'))
  .catch(err => console.warn('⚠️ SMTP transporter issue:', err.message));

// Escape HTML helper
const escapeHtml = (str = '') =>
  String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

// API endpoint
app.post('/api/leads', async (req, res) => {
  try {
    const {
      name,
      phone,
      email,
      city,
      loan_type,
      details,
      preferred_bank,
      budget,
    } = req.body || {};

    // Validate
    if (!name || !phone) {
      return res.status(400).json({ error: 'Name and phone are required' });
    }

    // Build email
    const html = `
      <h2>New Loan Application</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email || '-')}</p>
      <p><strong>City:</strong> ${escapeHtml(city || '-')}</p>
      <p><strong>Loan Type:</strong> ${escapeHtml(loan_type || '-')}</p>
      <p><strong>Budget:</strong> ₹${escapeHtml(budget || '-')}</p>
      <p><strong>Preferred Bank:</strong> ${escapeHtml(preferred_bank || '-')}</p>
      <p><strong>Details:</strong> ${escapeHtml(details || '-')}</p>
      <hr/>
      <small>Received on ${new Date().toLocaleString()}</small>
    `;

    // Send email
    await transporter.sendMail({
      from: `"Laxmi Enterprises" <${process.env.SMTP_FROM}>`,
      to: process.env.TO_EMAIL,
      subject: `New Loan Application — ${escapeHtml(name)} (${escapeHtml(phone)})`,
      html,
    });

    console.log(`📩 Lead sent: ${name} (${phone})`);
    res.status(200).json({ ok: true });
  } catch (err) {
    console.error('❌ Error sending lead:', err);
    res.status(500).json({ error: 'Failed to send email' });
  }
});
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  next();
});


// Start server
const PORT = Number(process.env.PORT || 3001);
app.listen(PORT, () => {
  console.log(`🚀 Leads API running on http://localhost:${PORT}`);
});
