const mongoose = require('mongoose');

const storeSchema = new mongoose.Schema({
  nomeDaLoja: { type: String, required: true },
  localizacao: { type: String, required: true },
  abertura: { type: String, required: true },
  fecho: { type: String, required: true },
});

module.exports = mongoose.models.Store || mongoose.model('Store', storeSchema);
