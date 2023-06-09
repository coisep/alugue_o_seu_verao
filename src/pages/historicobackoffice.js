import { useEffect, useState } from 'react';
import NavbarBackOffice from './components/navbarBackOffice';

const Historicoback = () => {
  const [historicoProduto, setHistoricoProduto] = useState([]);

  useEffect(() => {
    historico();
  }, []);

  async function historico() {
    try {
      const res = await fetch(`/api/cliente`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (res.status === 200) {
        const historicoProduto = await res.json();
        setHistoricoProduto(historicoProduto);
      } else {
        console.error('Failed to fetch products');
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }

  async function remover(product) {
    try {
      const res = await fetch("/api/cliente", {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (res.status === 200) {
        const data = await res.json();
        if (data.success) {
          await fetch("/api/cliente", {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nome: product.nome }),
          });
          historico();
        } else {
          console.error('Failed to update cliente');
        }
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <NavbarBackOffice pageName="historico" />
      <div
        className="bg-gray-100 px-4 py-6 min-h-full lg:min-h-screen"
        style={{
          borderRadius: '30px',
          marginTop: '50px',
          marginLeft: '350px',
        }}
      >
        <p className="text-indigo-100 mt-4 font-quicksand tracking-wider leading-7">
          Gestão dos produtos a alugar.
        </p>
        <div className="grid grid-cols-4 gap-4 mt-6">
          {historicoProduto && historicoProduto.length > 0 ? (
            historicoProduto.map((product) => (
              product.nomeDoCliente && (
                <div key={product._id} className="bg-white p-4 rounded-md">
                  <p>Id: {product.id}</p>
                  <p>Nome: {product.nomeDoCliente}</p>
                  <p>BI: {product.biDoCliente}</p>
                  <p>Tempo: {product.tempoDeUso}</p>
                  <p>Custo: {product.custoDoAluger}</p>
                  <p>Condições: {product.condicocoesDoProduto}</p>
                  <p>Descrição: {product.descricaoImportante}</p>
                  <button
                    style={{
                      float: 'right',
                      background: 'red',
                      marginTop: '10px',
                      marginRight: '5px',
                      borderRadius: '10px',
                      height: '40px',
                      width: '90px',
                    }}
                    type="button"
                    onClick={() => remover(product)}
                  >
                    Remover
                  </button>
                </div>
              )
            ))
          ) : (
            <p>No historical data available</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Historicoback;
