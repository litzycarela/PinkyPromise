const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (for gallery.html, etc.)
app.use(express.static(__dirname));

// Endpoint to receive notification requests from frontend
app.post('/notify', async (req, res) => {
  const { title, message } = req.body;
  if (!message) {
    return res.status(400).json({ error: 'Missing message' });
  }
  try {
    // Build payload: 'msg' is required, 'title' is optional
    const payload = {
      key: 's9ZRhV',
      msg: message
    };
    if (title) payload.title = title;
    const response = await axios.post('https://simplepu.sh', payload, {
      headers: { 'Content-Type': 'application/json' }
    });
    res.json({ success: true, data: response.data });
  } catch (error) {
    // Try to return more info if available
    const apiError = error.response && error.response.data ? error.response.data : error.message;
    res.status(500).json({ error: apiError });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});