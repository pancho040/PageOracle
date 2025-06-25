const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());

app.get('/api', (req, res) => {
  res.json({ message: 'Bienvenido a nuestra tienda en Oracle Cloud 🚀' });
});

app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});
