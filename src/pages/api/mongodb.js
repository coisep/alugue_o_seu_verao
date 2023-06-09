const express = require("express");
const { v4: uuid } = require("uuid");
const { ObjectId } = require("mongodb");
const router = express.Router();
const { getMongoCollection } = require("../../../data/db");
const artigosCollectionName = "artigos";
const lojasCollectionName = "lojas";
const utilizadoresCollectionName = "utilizadores";

function addArtigo(artigo) {
  
  return new Promise(async (resolve, reject) => {

    const mongoClient = await getMongoCollection();
    const collection = mongoClient.db().collection(artigosCollection);
    collection.insertOne(artigo, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result.ops[0]);
      }
    });
  });
}

function getArtigos() {
  return new Promise(async (resolve, reject) => {
    const mongoClient = await getMongoCollection();
    const collection = mongoClient.db().collection(artigosCollection);
    collection.find({}).toArray((err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

function getArtigo(id) {
  return new Promise(async (resolve, reject) => {
    const mongoClient = await getMongoCollection();
    const collection = mongoClient.db().collection(artigosCollection);
    collection.findOne({ _id: ObjectId(id) }, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

function updateArtigo(id, artigo) {
  return new Promise(async (resolve, reject) => {
    const mongoClient = await getMongoCollection();
    const collection = await getMongoCollection(artigosCollection);
    collection.updateOne(
      { _id: ObjectId(id) },
      { $set: artigo },
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      }
    );
  });
}

function retirarArtigo(id, stock) {
  return new Promise(async (resolve, reject) => {
    const collection = await getMongoCollection(artigosCollection);
    collection.updateOne(
      { _id: ObjectId(id) },
      { $inc: { stock: -stock }, $set: { stockEmTransito: quantidade } },
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      }
    );
  });
}

function deleteArtigo(id) {
  return new Promise(async (resolve, reject) => {
    const mongoClient = await getMongoCollection();
    const collection = mongoClient.db().collection(artigosCollection);
    collection.deleteOne({ _id: ObjectId(id) }, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

function addLoja(loja) {
  return new Promise(async (resolve, reject) => {
    const mongoClient = await getMongoCollection();
    const collection = mongoClient.db().collection(lojasCollection);
    collection.insertOne(loja, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result.ops[0]);
      }
    });
  });
}

function getLojas() {
  return new Promise(async (resolve, reject) => {
    const mongoClient = await getMongoCollection();
    const collection = mongoClient.db().collection(lojasCollection);
    collection.find({}).toArray((err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

function getLoja(id) {
  return new Promise(async (resolve, reject) => {
    const mongoClient = await getMongoCollection();
    const collection = mongoClient.db().collection(lojasCollection);
    collection.findOne({ _id: ObjectId(id) }, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

function updateLoja(id, loja) {
  return new Promise(async (resolve, reject) => {
    const mongoClient = await getMongoCollection();
    const collection = mongoClient.db().collection(lojasCollection);
    collection.updateOne(
      { _id: ObjectId(id) },
      { $set: loja },
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      }
    );
  });
}

function deleteLoja(id) {
  return new Promise(async (resolve, reject) => {
    const mongoClient = await getMongoCollection();
    const collection = mongoClient.db().collection(lojasCollection);
    collection.deleteOne({ _id: ObjectId(id) }, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

export async function addUtilizador(utilizador) {
  return new Promise(async (resolve, reject) => {
    try {
      const collection = await getMongoCollection(utilizadoresCollection);
      const result = await collection.insertOne(utilizador);
      resolve(result.ops[0]);
    } catch (error) {
      reject(error);
    }
  });
}

function getUtilizadores() {
  return new Promise(async (resolve, reject) => {
    const mongoClient = await getMongoCollection();
    const collection = mongoClient.db().collection(utilizadoresCollection);
    collection.find({}).toArray((err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

function getUtilizador(id) {
  return new Promise(async (resolve, reject) => {
    const mongoClient = await getMongoCollection();
    const collection = mongoClient.db().collection(utilizadoresCollection);
    collection.findOne({ _id: ObjectId(id) }, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

function updateUtilizador(id, utilizador) {
  return new Promise(async (resolve, reject) => {
    const mongoClient = await getMongoCollection();
    const collection = mongoClient.db().collection(utilizadoresCollection);
    collection.updateOne(
      { _id: ObjectId(id) },
      { $set: utilizador },
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      }
    );
  });
}

function deleteUtilizador(id) {
  return new Promise(async (resolve, reject) => {
    const mongoClient = await getMongoCollection();
    const collection = mongoClient.db().collection(utilizadoresCollection);
    collection.deleteOne({ _id: ObjectId(id) }, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

function login(username, password) {
  return new Promise(async (resolve, reject) => {
    const collection = await getMongoCollection(utilizadoresCollection);
    collection.findOne(
      { username, password },
      (err, user) => {
        if (err) {
          reject(err);
        } else if (user) {
          resolve(user);
        } else {
          reject(new Error("Invalid username or password"));
        }
      }
    );
  });
}

 async function cart(req, res) {
  if (req.method === 'POST') {
    try {
      const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
      const db = client.db();

      const { itemId, quantity } = req.body;

      await db.collection('cart').insertOne({ itemId, quantity });

      client.close();

      res.status(200).json({ message: 'Item adicionado ao carrinho.' });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Ocorreu um erro ao adicionar o item ao carrinho.' });
    }
  }
}

async function cartGET(req, res) {
  if (req.method === 'GET') {
    try {
      const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
      const db = client.db();

      const cartItems = await db.collection('cart').find().toArray();

      client.close();

      res.status(200).json(cartItems);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Ocorreu um erro ao buscar os itens do carrinho.' });
    }
  }
}

function addCliente(cliente) {
  
  return new Promise(async (resolve, reject) => {

    const mongoClient = await getMongoCollection();
    const collection = mongoClient.db().collection(clienteCollection);
    collection.insertOne(artigo, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result.ops[0]);
      }
    });
  });
}

function getCliente() {
  return new Promise(async (resolve, reject) => {
    const mongoClient = await getMongoCollection();
    const collection = mongoClient.db().collection(clienteCollection);
    collection.find({}).toArray((err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

function getClienteID(id) {
  return new Promise(async (resolve, reject) => {
    const mongoClient = await getMongoCollection();
    const collection = mongoClient.db().collection(clienteCollection);
    collection.findOne({ _id: ObjectId(id) }, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

function deleteCliente(id) {
  return new Promise(async (resolve, reject) => {
    const mongoClient = await getMongoCollection();
    const collection = mongoClient.db().collection(clienteCollection);
    collection.deleteOne({ id: id }, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

module.exports = {
  login,
  addArtigo,
  getArtigos,
  getArtigo,
  updateArtigo,
  deleteArtigo,
  addLoja,
  getLojas,
  getLoja,
  updateLoja,
  deleteLoja,
  addUtilizador,
  getUtilizadores,
  getUtilizador,
  updateUtilizador,
  deleteUtilizador,
  retirarArtigo,
  cart,
  cartGET,
  addCliente,
  getCliente,
  getClienteID,
  deleteCliente
};
