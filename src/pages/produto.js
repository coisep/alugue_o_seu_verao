import Layout from './General/components/Layout';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Produto = (props) => {
  const [produtos, setProdutos] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    produtoBuscar();
  }, [page]);

  const increasePage = () => {
    setPage(prevValue => prevValue + 1);
  };

  const decreasePage = () => {
    setPage(prevValue => (prevValue > 0 ? prevValue - 1 : 0));
  };

  async function produtoBuscar() {
    try {
      const res = await fetch(`/api/artigos`, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.status === 200) {
        const produtos = await res.json();
        setProdutos(produtos);
      } else {
        console.error('Failed to fetch products');
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }

  return (
    <Layout pageName={"Products"}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 mx-auto max-w-6xl">
        {produtos.map((produto) => (
          <div key={produto.id} className="bg-white rounded-lg shadow-md p-6">
            {/* <Image src={produto.imageUrl} alt={produto.nome} width={200} height={200} className="w-full mb-4" /> */}
            <h2 className="text-xl font-semibold mb-2">{produto.nome}</h2>
            <p>{produto.descricao}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Produto;
