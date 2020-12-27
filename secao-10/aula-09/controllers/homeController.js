exports.paginaInicial = (req, res) => {
  res.send(`
    <a href="http://localhost:3000/contato">Contato</a>

    <br><br>
  
    <form action="/" method="POST">
      <label>Nome do cliente: <input type="text" name="nome"></label><br>
      <label>Senha: <input type="password" name="senha"></label><br>
      <button type="submit">Enviar formulário!</button>
    </form>
  `);
};

exports.trataPost = (req, res) => {
  res.send('Ei, sou sua nova rota de POST.');
};
