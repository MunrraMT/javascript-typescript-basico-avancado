const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`
    <form action="/" method="POST">
      <label>Nome do cliente: <input type="text" name="nome"></label>
      <button type="submit">Enviar formulário!</button>
    </form>
  `);
});

app.post('/', (req, res) => {
  res.send('Recebi o formulário.');
});

app.get('/contato', (req, res) => {
  res.send('Obrigado por entrar  em contato com a gente.');
});

app.listen(port, () => {
  console.log('Acessar http://localhost:3000');
  console.log('Servidor executando na porta 3000...');
});
