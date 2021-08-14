const Contato = require('../models/ContatoModel');

exports.index = async (req, res) => {
  const contatos = await Contato.buscaContatos();
  res.render('index', { contatos });
};

exports.delete = async function (req, res) {
  try {
    if (!req.params.id) return res.render('404');

    const contato = await Contato.delete(req.params.id);
    if (!contato) return res.render('404');

    req.flash('success', 'Contato apagado com sucesso.');
    req.session.save(() => res.redirect('/'));
  } catch (error) {
    console.log(error);
    return res.render('404');
  }
};
