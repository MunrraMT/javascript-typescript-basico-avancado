const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`
    <form action="/" method="POST">
      <label>Nome do cliente: <input type="text" name="nome"></label>
      <label>Senha: <input type="password" name="senha"></label>
      <button type="submit">Enviar formulário!</button>
    </form>
  `);
});

app.get('/testes/:idUsuarios?', (req, res) => {
  console.log(req.params); // /profiles/Andre
  console.log(req.query); // /profiles/?chave1=valor1&chave2=valor2

  res.send(`${req.query.nome} ${req.query.sobrenome}`);
});

app.post('/', (req, res) => {
  console.log(req.body);
  res.send(
    `${req.body.nome} foi logado com sucesso.<br> A senha usada foi: ${req.body.senha}`,
  );
});

app.listen(3000, () => {
  console.log('Acessar http://localhost:3000');
  console.log('Servidor executando na porta 3000...');
});
