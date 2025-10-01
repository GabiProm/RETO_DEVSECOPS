exports.getStatus = (req, res) => {
  const apiKey = process.env.APIKEY_DEV; 
  if (!apiKey) {
    return res.status(500).json({ error: 'API_KEY no definida' });
  }

  res.json({ status: 'OK', apiKey });
};

