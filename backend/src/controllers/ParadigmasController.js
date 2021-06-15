const mongoose = require("mongoose");
const Paradigmas = require("../models/Paradigmas");
//index, show ,store ,update,destroy

module.exports = {
  async store(req, res) {
    //If dedicado a retornar mensagem de erro
    const { nomeParad } = req.body;
    if (await Paradigmas.findOne({ nomeParad }))
      return res.status(400).send({ error: "Paradigma ja existe" });

    const paradigmas = await Paradigmas.create(req.body);
    return res.json(paradigmas);
  },
  async show(req, res) {
    //let variavel que pode ser modificada
    //find busca tudo que está dentro do esquema
    let paradigmas = await Paradigmas.find();
    return res.json(paradigmas);
  },
  async delete(req, res) {
    const paradigmas = await paradigmas.deleteOne("/paradigmas/:_id");
    return res.json();
  },
};
