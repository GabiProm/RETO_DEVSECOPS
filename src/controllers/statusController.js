exports.getStatus = (req, res) => {
  const apiKey = process.env.API_KEY; // ⚠️ Error: variable mal nombrada
  if (!apiKey) {
    return res.status(500).json({ error: 'API_KEY no definida' });
  }

  res.json({ status: 'OK', apiKey });
};

