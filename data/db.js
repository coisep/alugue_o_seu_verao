const { MongoClient } = require('mongodb');

const url = process.env.MONGO_URL || 'mongodb://localhost:27017';
const dbName = 'finalproject4';

let client;

async function connectToMongo() {
  try {
    if (!client) {
      client = await MongoClient.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    }
    return client;
  } catch (err) {
    console.error('Failed to connect to MongoDB:', err);
    throw err;
  }
}

async function initializeCollections() {
  const artigosCollection = await getMongoCollection('artigos');
  const lojasCollection = await getMongoCollection('lojas');
  const utilizadoresCollection = await getMongoCollection('utilizadores');
  const clientesCollection = await getMongoCollection('clientes');
  return {
    artigosCollection,
    lojasCollection,
    utilizadoresCollection,
    clientesCollection
  };
}

async function getMongoCollection(collectionName) {
  if (typeof collectionName !== 'string') {
    throw new Error('Collection name must be a string');
  }

  const mongoClient = await connectToMongo();
  const collection = mongoClient.db(dbName).collection(collectionName);
  return collection;
}

module.exports = { initializeCollections, getMongoCollection };
