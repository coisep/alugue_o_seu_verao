import { useState, useEffect } from 'react';
import axios from 'axios';

export default function SearchProdutos() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/products', {
          params: { searchTerm }
        });
        setProducts(response.data.products);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, [searchTerm]);

  const filteredProducts = products.filter((product) =>
    product.nomeDoProduto.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = async () => {
    try {
      const response = await axios.get('/api/produtos', {
        params: { searchTerm }
      });
      setProducts(response.data.products);
    } catch (error) {
      console.error(error);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Procurar por nome do produto"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleSearch}>Pesquisar</button>

      <ul>
        {filteredProducts.map((product) => (
          <li key={product._id}>
            <strong>{product.nomeDoProduto}</strong>
            <p>Quantidade: {product.quantidade}</p>
            <p>Preço: {product.preco}€</p>
            <p>Quantidade Alugada: {product.quantidadeAlugada}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
