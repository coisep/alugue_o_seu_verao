import Link from "next/link";
import NavbarBackOffice from "./components/navbarBackOffice";
import { useState, useEffect } from "react";

const backoffice = (props) => {
  const [nomeDoCliente, setNomeDoCliente] = useState("");
  const [biDoCliente, setBiDoCliente] = useState("");
  const [tempoDeUso, setTempoDeUso] = useState("");
  const [custoDoAluger, setCustoDoAluger] = useState("");
  const [condicocoesDoProduto, setCondicocoesDoProduto] = useState("");
  const [descricaoImportante, setDescricaoImportante] = useState("");
  const [produtos, setProdutos] = useState([]);

  

  async function produtoRegisto() {
    let res = await fetch(`./api/cliente`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nomeDoCliente,
        biDoCliente,
        tempoDeUso,
        custoDoAluger,
        condicocoesDoProduto,
        descricaoImportante
    }),
    });
    if (res.status === 200) {
      res = await res.json();
    }
  }

  async function fetchProdutos() {
    try {
      const res = await fetch(`./api/artigos`);
      if (res.status === 200) {
        const data = await res.json();
        setProdutos(data);
      } else {
        console.error("Failed to fetch products");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }



  useEffect(() => {
    fetchProdutos();
    produtoRegisto();
  }, []);

  return (
    <>
      <NavbarBackOffice pageName={"backoffice"} />

      <main className="">
        <section>
          <div className="bg-gray-100 sm:grid grid-cols-4 grid-rows-2 px-4 py-6 min-h-full lg:min-h-screen space-y-6 sm:space-y-0 sm:gap-4 
          ">
            <div
              style={{
                borderRadius: "30px",
                overflowY: "auto",
                height: "450px",
                marginTop: "50px",
                marginLeft:"350px"
              }}
              className="h-96 col-span-2 bg-gradient-to-tr from-red-600 to-yellow-500 rounded-md flex items-center pl-50"
            >
              <div className="ml-20 w-80">
                <p className="text-indigo-100 mt-4 font-quicksand tracking-wider leading-7">
                  Gestão dos produtos a alugar.
                </p>
                {produtos.map((produto) => (
                  <a
                    key={produto.id}
                    className="uppercase  block mt-8 text-sm bg-white py-2 px-4 rounded font-quicksand hover:bg-indigo-100"
                  >
                    {produto.nome}
                  </a>
                ))}
              </div>
            </div>
            <div
              style={{
                background: "orange",
                borderRadius: "30px",
                marginTop: "40px",
              }}
            >
              <div
                style={{
                  marginTop: "40px",
                  justifyContent: "center",
                  display: "flex",
                  marginBottom: "40px",
                }}
              >
                <form onSubmit={ async (e) => {
    e.preventDefault()}}
                  style={{
                    borderRadius: "15px",
                    borderWidth: "3px",
                    padding: "15px",
                    borderColor: "black",
                  }}
                >
                  <div style={{ flexDirection: "row" }}>
                    <div>Nome do cliente</div>
                    <input
                      style={{ borderRadius: "5px", background: "#f7f7f7" }}
                      type="text"
                      onChange={(e) => setNomeDoCliente(e.target.value)}
                      value={nomeDoCliente}
                      required
                    />
                  </div>
                  <div style={{ marginTop: "8px" }}>
                    <div>BI Cliente</div>
                    <input
                      style={{ borderRadius: "5px", background: "#f7f7f7" }}
                      type="number"
                      onChange={(e) => setBiDoCliente(e.target.value)}
                      value={biDoCliente}
                      required
                    />
                  </div>
                  <div style={{ flexDirection: "row" }}>
                    <div>Tempo de Uso</div>
                    <input
                      style={{ borderRadius: "5px", background: "#f7f7f7" }}
                      type="number"
                      onChange={(e) => setTempoDeUso(e.target.value)}
                      value={tempoDeUso}
                      required
                    />
                  </div>
                  <div style={{ flexDirection: "row" }}>
                    <div>Custo do Aluger</div>
                    <input
                      style={{ borderRadius: "5px", background: "#f7f7f7" }}
                      type="number"
                      onChange={(e) => setCustoDoAluger(e.target.value)}
                      value={custoDoAluger}
                      required
                    />
                  </div>
                  <div style={{ flexDirection: "row" }}>
                    <div>Condiçoes do Produto</div>
                    <input
                      style={{ borderRadius: "5px", background: "#f7f7f7" }}
                      type="text"
                      onChange={(e) => setCondicocoesDoProduto(e.target.value)}
                      value={condicocoesDoProduto}
                      required
                    />
                  </div>
                  <div style={{ flexDirection: "row" }}>
                    <div>Descricao Importante</div>
                    <input
                      style={{ borderRadius: "5px", background: "#f7f7f7" }}
                      type="text"
                      onChange={(e) => setDescricaoImportante(e.target.value)}
                      value={descricaoImportante}
                    />
                  </div>
                  <button
                    onClick={produtoRegisto}
                    style={{
                      borderRadius: "5px",
                      backgroundColor: "lightgreen",
                      display: "flex",
                      justifyContent: "center",
                    }}
                    type="submit"
                  >
                    Submeter
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
export default backoffice;
