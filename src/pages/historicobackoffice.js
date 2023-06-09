import { useEffect, useState } from 'react';
import NavbarBackOffice from './components/navbarBackOffice';

const Historicoback = () => {
  const [historicoProduto, setHistoricoProduto] = useState([]);

  useEffect(() => {
    historico();
    remover()
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


  async function remover() {
    try {
      const res = await fetch("/api/cliente", {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (res.status === 200) {
        const data = await res.json();
        console.log(data); 
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <NavbarBackOffice pageName="historico" />
      
      <p
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          fontSize: '30px',
        }}
      >
        Historico
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 mx-auto max-w-6xl">
        {historicoProduto && historicoProduto.length > 0 ? (
         <ul>
  {historicoProduto.map((product) => (
    <li key={product._id}>
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
          marginTop:'10px',
          marginRight: '5px',
          borderRadius: '10px',
          height: '40px',
          width: '90px',
        }}
        type="button"
        onClick={remover}
      >
        Remover
      </button>
    </li>
  ))}
</ul>

        ) : (
          <p>No historical data available</p>
        )}
      </div>
    </>
  );
};

export default Historicoback;
