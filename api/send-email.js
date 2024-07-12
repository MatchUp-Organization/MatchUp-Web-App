const mailgun = require('mailgun-js');
require('dotenv').config(); // Load environment variables from .env file

const mg = mailgun({ apiKey: process.env.MAILGUN_API_KEY, domain: process.env.MAILGUN_DOMAIN });

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  const { firstName, lastName, email, phone, message } = req.body;

  const data = {
    from: `MatchUp Contact <mailgun@${process.env.MAILGUN_DOMAIN}>`,
    to: process.env.EMAIL_RECIPIENT,
    subject: `Contact from ${firstName} ${lastName}`,
    text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\n\nMessage: ${message}`,
  };

  try {
    await mg.messages().send(data);
    res.status(200).json({ status: 'success', message: 'Email sent' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ status: 'error', message: error.message });
  }
};
