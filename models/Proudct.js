const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  nomeDoProduto: { type: String, required: true },
  quantidade: { type: Number, required: true },
  preco: { type: Number, required: true },
  quantidadeAlugada: { type: Number, required: true },
  imageUrl: { type: String, required: true }

});

module.exports = mongoose.models.Product || mongoose.model('Product', productSchema);
