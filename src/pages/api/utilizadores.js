import { v4 as uuid } from "uuid";
import { addUtilizador, getUtilizadores, deleteUtilizador } from "./mongodb";
const { getMongoCollection, initializeCollections } = require("../../../data/db");

export default async function utilizadores(req, res) {
  const { method } = req;

  try {
    const collections = await initializeCollections();
    const { utilizadoresCollection } = collections;

    if (method === "GET") {
      const utilizadores = await utilizadoresCollection.find({}).toArray();
      res.status(200).json(utilizadores);
    } else if (method === "POST") {
      const { username, password, level } = req.body;
      const newUtilizador = {
        id: uuid(),
        username,
        password,
        level,
      };
      const insertedUtilizador = await utilizadoresCollection.insertOne(newUtilizador);
      res
        .status(200)
        .json({ insertedUtilizador, message: "Utilizador created successfully" });
    } else if (method === "DELETE") {
      const { id } = req.query;
      const deletedUtilizador = await deleteUtilizador(id);
      res.status(200).json(deletedUtilizador);
    } else {
      res.setHeader("Allow", ["GET", "POST", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
