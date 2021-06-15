const mongoose = require("mongoose");
const Linguagens = require("../models/Linguagens");
const Paradigmas = require("../models/Paradigmas");
//index, show ,store ,update,destroy
module.exports = {
  async store(req, res) {
    //If dedicado a retornar mensagem de erro
    const { nome } = req.body;
    if (await Linguagens.findOne({ nome }))
      return res.status(400).send({ error: "Linguagem ja existe" });

    const linguagens = await Linguagens.create(req.body);
    return res.json(linguagens);
  },
  async show(req, res) {
    //let variavel que pode ser modificada
    //find busca tudo que está dentro do esquema
    let linguagens = await Linguagens.find().populate("linguagens");
    return res.json(linguagens);
  },
};
