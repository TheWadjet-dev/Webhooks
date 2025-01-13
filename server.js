const express = require('express');
const app = express();
app.use(express.json());

app.post('/webhook', (req, res) => {
  console.log('Evento recibido:', req.body);
  res.send('¡Hola desde el Webhook!');
});

app.listen(3000, () => console.log('Servidor escuchando en http://localhost:3000'));
