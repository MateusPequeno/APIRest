const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
require("./src/models/Linguagens");
const Linguagens = require("./src/models/Linguagens");
require("./src/models/Paradigmas");
const Paradigmas = require("./src/models/Paradigmas");
const linguagemController = require("./src/controllers/LinguagemController");
const paradigmasController = require("./src/controllers/ParadigmasController");
mongoose.connect(
  "mongodb+srv://user:user123@cluster1.molia.mongodb.net/testedb?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
);
const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.post("/linguagens", linguagemController.store);
app.post("/paradigmas", paradigmasController.store);

app.get("/", linguagemController.show);
app.get("/paradigmas", paradigmasController.show);
// API PARA COMUNICAR BACK END COM FRONT END API AXIOS

app.delete("/linguagens/:id", (req, res) => {
  const linguagens = Linguagens.deleteOne({ _id: req.body }, (err) => {
    if (err)
      return res.status(400).json({
        error: true,
        message: "Error: linguagem não foi apagada com sucesso.",
      });
    return res.json({
      error: false,
      message: "Linguagem apagada com sucesso.",
    });
  });
});
app.delete("/paradigmas/:id", (req, res) => {
  const paradigmas = Paradigmas.deleteOne({ _id: req.body }, (err) => {
    if (err)
      return res.status(400).json({
        error: true,
        message: "Error: Paradigma não foi apagado com sucesso.",
      });
    return res.json({
      error: false,
      message: "Paradigma apagado com sucesso.",
    });
  });
});
app.put("/linguagens/:id", (req, res) => {
  const linguagens = Linguagens.updateOne(
    { _id: req.body },
    req.body,
    (err) => {
      if (err)
        return res.status(400).json({
          error: true,
          message: "Error: linguagem não foi EDITADA com sucesso.",
        });
      return res.json({
        error: false,
        message: "Linguagem EDITADA com sucesso.",
      });
    }
  );
});
app.put("/paradigmas/:id", (req, res) => {
  const paradigmas = Paradigmas.updateOne(
    { _id: req.body },
    req.body,
    (err) => {
      if (err)
        return res.status(400).json({
          error: true,
          message: "Error: Paradigma não foi EDITADO com sucesso.",
        });
      return res.json({
        error: false,
        message: "Paradigma EDITADO com sucesso.",
      });
    }
  );
});
app.listen(4000);
