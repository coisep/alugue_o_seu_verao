

const mongoose = require("mongoose");

const clienteSchema = new mongoose.Schema({
  nomeDoCliente: { type: String, required: true },
  biDoCliente: { type: Number, required: true },
  tempoDeUso: { type: Number, required: true },
  custoDoAluger: { type: Number, required: true },
  condicocoesDoProduto: { type: String, required: true },
  descricaoImportante: { type: String, required: true },
});

module.exports =
  mongoose.models.Product || mongoose.model("cliente", clienteSchema);

