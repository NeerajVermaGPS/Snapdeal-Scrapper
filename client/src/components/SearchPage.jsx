import React, { useState } from 'react';
import '../styles/SearchPage.css';

const SearchPage = ({ onSearch, isLoading }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <div className="search-page full-w">
      <div className="search-content">
        <h1>Find What You Need</h1>
        <p>Discover the smartest way to explore Snapdeal — lightning-fast product searches, detailed insights, and the best deals, all in one seamless experience. Just type your query and <q>see the magic</q> instantly.</p>
        <div className={isLoading ? "search-bar search-bar-disabled" : "search-bar"}>
          <input type="text" placeholder="Search Snapdeal..." value={query} onChange={(e) => setQuery(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleSearch()}  disabled={isLoading}/>
          <button className='help-btn center' onClick={handleSearch} disabled={isLoading}><img src={isLoading ? "/icons/loader.gif" : "/icons/magic.svg"} alt="Search" style={{marginRight: "5px"}} />{isLoading ? "Loading" : "Magic"}</button>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;