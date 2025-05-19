import React, { useState } from 'react';
import SearchPage from './components/SearchPage';
import ProductsListing from './components/ProductsListing';
import Loading from './components/Loading';

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async (query) => {
    if (!query || loading) return;
    setLoading(true);
    try {
      const res = await fetch(`https://dealscope.onrender.com/api/scrape?q=${query}`);
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.error('Error fetching products:', err);
    }
    setLoading(false);
  };

  return (
      <div className="app full-hw">
        <nav>
          <a href="/" className="logo-a"><img src="/images/logo.png" alt="logo" /></a>
          <div className="center">
            <a href="https://neerajvermagps.infinityfreeapp.com/"><button>About Neeraj</button></a>
          </div>
        </nav>
        
        <SearchPage onSearch={fetchProducts} isLoading={loading}/>

        {loading && <Loading />}
        {(!loading && products.length > 0) && <ProductsListing products={products}/>}
      </div>
  );
};

export default App;