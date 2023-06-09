import { useState } from "react";

const FormArtigos = () => {
  const [nome, setNome] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [preço, setPreço] = useState("");
  const [url,setUrl]=useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      nome,
      quantidade,
      preço,
    };
    try {
      const response = await fetch("/api/artigos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Artigo adicionado com sucesso!");
      } else {
        console.error("Falha ao adicionar o artigo.");
      }
    } catch (error) {
      console.error("Erro:", error);
    }
  };
  
  return (
    <>
      <div
        className="flex items-center justify-center"
        style={{
          marginTop: "200px",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "100px",
        }}
      >
        <form onSubmit={handleSubmit}>
          <label htmlFor="nome">
            <input
              style={{
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                fontSize: "16px",
                outline: "none",
                width: "200px",
              }}
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            Nome
          </label>
          <br />
          <label htmlFor="quantidade">
            <input
              style={{
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                fontSize: "16px",
                outline: "none",
                width: "200px",
              }}
              type="number"
              value={quantidade}
              onChange={(e) => setQuantidade(e.target.value)}
            />
            Quantidade
          </label>
          <br />
          <label htmlFor="preço">
            <input
              style={{
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                fontSize: "16px",
                outline: "none",
                width: "200px",
              }}
              type="number"
              value={preço}
              onChange={(e) => setPreço(e.target.value)}
            />
            Preço
          </label>
          <br/>
          <label htmlFor="url">
            <input
              style={{
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                fontSize: "16px",
                outline: "none",
                width: "200px",
              }}
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            Url
          </label>
          <br />
          <div className="flex items-start w-[90px]">
            <button
              className="flex item-center bg-green-500 mr-5 rounded-lg h-10 pl-50"
              type="submit"
              onChange={handleSubmit}
            >
              Adicionar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormArtigos;
