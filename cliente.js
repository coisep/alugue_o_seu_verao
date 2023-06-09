import { v4 as uuid } from "uuid";
import { addCliente,
    getCliente,
    getClienteID,
    deleteCliente } from "./mongodb";
import { getMongoCollection, initializeCollections } from "../../../data/db";

export default async function cliente(req, res) {
    const { method } = req;

    try {
        const collections = await initializeCollections();
        const { clientesCollection } = collections;
        if (method==="GET"){
            const clientes = await clientesCollection.find({}).toArray();
            res.status(200).json(clientes);
        } else if (method==="POST"){
            const { nomeDoCliente,
                biDoCliente,
                tempoDeUso,
                custoDoAluger,
                condicocoesDoProduto,
                descricaoImportante,
                } = req.body;
            
            const newCliente = {
                id: uuid(),
                nomeDoCliente,
                biDoCliente,
                tempoDeUso,
                custoDoAluger,
                condicocoesDoProduto,
                descricaoImportante,
            };
        const insertedCliente = await clientesCollection.insertOne(newCliente);
        res
            .status(200)
            .json({ insertedCliente, message: "Client created successfully" });
        } else if (method==="DELETE"){
            const { id } = req.query;
            const deletedCliente = await clientesCollection.deleteOne({ id: id });
            res.status(200).json(deletedCliente);

        }
        else if  (method === "DELETE") {
            const { id } = req.query;
            const deletedCliente = await clientesCollection.deleteOne({ id: id });
            res.status(200).json(deletedArtigo);
        }
    else {
        res.setHeader("Allow", ["GET", "POST", "DELETE"]);
        res.status(405).end(`Method ${method} Not Allowed`);}
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}