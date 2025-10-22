// api/leads.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const {
      name, phone, email, city, loan_type, details, preferred_bank, budget,
    } = req.body || {};

    if (!name || !phone) {
      return res.status(400).json({ error: 'Name and phone are required' });
    }

    // Create transporter using environment variables set in Vercel
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // tiny html escape to avoid injection in email body
    const escapeHtml = (str = '') =>
      String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');

    const html = `
      <h2>New Loan Application</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email || '-')}</p>
      <p><strong>City:</strong> ${escapeHtml(city || '-')}</p>
      <p><strong>Loan Type:</strong> ${escapeHtml(loan_type || '-')}</p>
      <p><strong>Budget:</strong> ${escapeHtml(budget || '-')}</p>
      <p><strong>Preferred Bank:</strong> ${escapeHtml(preferred_bank || '-')}</p>
      <p><strong>Details:</strong> ${escapeHtml(details || '-')}</p>
      <hr />
      <small>Received: ${new Date().toLocaleString()}</small>
    `;

    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.TO_EMAIL,
      subject: `New Loan Application — ${escapeHtml(name)} (${escapeHtml(phone)})`,
      html,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('api/leads error:', err);
    // nodemailer / provider errors may expose sensitive info; return generic message
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
