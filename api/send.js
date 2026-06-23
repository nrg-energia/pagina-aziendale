import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const TO_EMAIL   = 'info@nrg-energia.it';   // where submissions land
const FROM_EMAIL = 'noreply@nrg-energia.it'; // must be a verified Resend domain

export default async function handler(req, res) {
  // ── CORS headers ──────────────────────────────────────────────────────────
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { service, name, phone, email, message, fileName, fileBase64 } = req.body;

    // ── Basic server-side validation ─────────────────────────────────────────
    if (!service || !name || !phone || !email) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(email)) {
      return res.status(400).json({ error: 'Invalid email address' });
    }

    // ── Build email HTML ─────────────────────────────────────────────────────
    const html = `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
        <div style="background:#1a4d2e;padding:24px 32px;border-radius:8px 8px 0 0;">
          <h2 style="color:#f5c842;margin:0;font-size:20px;">Nuova richiesta di preventivo</h2>
        </div>
        <div style="background:#f7f6f2;padding:32px;border-radius:0 0 8px 8px;border:1px solid #ece9e3;">
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;color:#888;font-size:13px;width:140px;">Servizio</td><td style="padding:8px 0;font-weight:600;">${escHtml(service)}</td></tr>
            <tr><td style="padding:8px 0;color:#888;font-size:13px;">Nome</td><td style="padding:8px 0;">${escHtml(name)}</td></tr>
            <tr><td style="padding:8px 0;color:#888;font-size:13px;">Telefono</td><td style="padding:8px 0;"><a href="tel:${escHtml(phone)}">${escHtml(phone)}</a></td></tr>
            <tr><td style="padding:8px 0;color:#888;font-size:13px;">Email</td><td style="padding:8px 0;"><a href="mailto:${escHtml(email)}">${escHtml(email)}</a></td></tr>
            ${message ? `<tr><td style="padding:8px 0;color:#888;font-size:13px;vertical-align:top;">Messaggio</td><td style="padding:8px 0;">${escHtml(message).replace(/\n/g,'<br>')}</td></tr>` : ''}
            ${fileName ? `<tr><td style="padding:8px 0;color:#888;font-size:13px;">Allegato</td><td style="padding:8px 0;">📎 ${escHtml(fileName)}</td></tr>` : ''}
          </table>
        </div>
        <p style="color:#aaa;font-size:12px;margin-top:16px;text-align:center;">Inviato da nrg-energia.it</p>
      </div>
    `;

    // ── Build attachments if file was included ────────────────────────────────
    const attachments = [];
    if (fileBase64 && fileName) {
      attachments.push({
        filename: fileName,
        content:  fileBase64, // base64 string
      });
    }

    // ── Send via Resend ───────────────────────────────────────────────────────
    const { data, error } = await resend.emails.send({
      from:        `NRG Energia <${FROM_EMAIL}>`,
      to:          [TO_EMAIL],
      replyTo:     email,
      subject:     `Preventivo — ${service} (${name})`,
      html,
      attachments,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({ error: 'Failed to send email' });
    }

    return res.status(200).json({ ok: true, id: data.id });

  } catch (err) {
    console.error('Handler error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

// Escape HTML to prevent injection in email body
function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
