const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const POSTMARK_API_TOKEN = process.env.POSTMARK_API_TOKEN;

app.post('/api/send-email', async (req, res) => {
  const { to, subject, body } = req.body;
  console.log('Received email request:', { to, subject, body });
  try {
    const response = await axios.post('https://api.postmarkapp.com/email', {
      From: 'vaishnavis2892002@gmail.com',
      To: to,
      Subject: subject,
      TextBody: body
    }, {
      headers: {
        'X-Postmark-Server-Token': POSTMARK_API_TOKEN
      }
    });
    console.log('Email sent response:', response.data);
    res.send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error.response ? error.response.data : error.message);
    res.status(500).send(error.response ? error.response.data : error.message);
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));