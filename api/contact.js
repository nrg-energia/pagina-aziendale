import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const TO_EMAIL   = 'annarosa.castagnari@nrg-energia.it';
const FROM_EMAIL = 'noreply@mail.nrg-energia.it';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { nome, email, telefono, messaggio, attachment } = req.body;

    const text = [
      `Nome: ${nome}`,
      `Email: ${email}`,
      `Telefono: ${telefono}`,
      '',
      'Messaggio:',
      messaggio,
    ].join('\n');

    const attachments = [];
    if (attachment && attachment.name && attachment.content) {
      attachments.push({
        filename: attachment.name,
        content:  attachment.content,
      });
    }

    const { error } = await resend.emails.send({
      from:    `NRG Energia <${FROM_EMAIL}>`,
      to:      TO_EMAIL,
      replyTo: `${nome} <${email}>`,
      subject: `Nuovo messaggio da ${nome}`,
      text,
      attachments,
    });

    if (error) {
      return res.status(500).json({ error: error.message || 'Failed to send email' });
    }

    return res.status(200).json({ success: true });

  } catch (err) {
    return res.status(500).json({ error: err.message || 'Internal server error' });
  }
}
