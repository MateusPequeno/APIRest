const mongoose = require("mongoose");
const Paradigmas = require("./Paradigmas");
//Schema, campos que teremos dentro do DB para linguagem
const LingSchema = new mongoose.Schema({
  nome: {
    type: String,
    unique: true,
    required: true,
  },
  caracteristica: {
    type: String,
    unique: false,
    required: false,
  },
  paradigmas: {
    type: String,
    unique: false,
    require: false,
  },
  dataCriacao: {
    type: Date,
    default: Date.now,
  },
});

const Linguagens = mongoose.model("Linguagens", LingSchema);
module.exports = Linguagens;