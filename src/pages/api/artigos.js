import { v4 as uuid } from "uuid";
import { addArtigo, getArtigos, getArtigo, updateArtigo, deleteArtigo } from "./mongodb";
import { getMongoCollection, initializeCollections } from "../../../data/db";
export default async function artigos(req, res) {
  const { method } = req;
  
  try {
    const collections = await initializeCollections();
    const { artigosCollection } = collections;
  
    if (method === "GET") {
      const artigos = await artigosCollection.find({}).toArray();
      res.status(200).json(artigos);
    } else if (method === "POST") {
      const { nome, quantidade, quantidadeEmUso, preço,imageUrl } = req.body;
      const newArtigo = {
        id: uuid(),
        nome,
        quantidade,
        quantidadeEmUso,
        preço,
        imageUrl
      };
      const insertedArtigo = await artigosCollection.insertOne(newArtigo);
      res
        .status(200)
        .json({ insertedArtigo, message: "Article created successfully" });
    } else if (method === "DELETE") {
      const { id } = req.query;
      const deletedArtigo = await artigosCollection.deleteOne({ _id: id });
      res.status(200).json(deletedArtigo);
    } else {
      res.setHeader("Allow", ["GET", "POST", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
