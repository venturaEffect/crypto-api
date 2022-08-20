import React, { useEffect, useState } from 'react';
import './App.css';
import Currency from './Currency';

function App() {

  const [cryptos, setCryptos] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("bitcoin");


  useEffect(() => {
    getCryptos();
  }, [query])

  const getCryptos = async () => {
    const response = await fetch(`https://api.coingecko.com/api/v3/search?query=${query}`);
    const data = await response.json();
    if(data.exchanges.length !== 0) {
      setCryptos(data.exchanges);
      console.log(data.exchanges);
    } else {
      alert("no matches for this search.")
    }
  }

  const updateSearch = e => {
    setSearch(e.target.value)
    console.log(e.target.value);
  }

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }


  return (
    <div className="App min-h-screen">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recipes flex flex-wrap justify-center items-center mt-10">
        {cryptos.map(crypto => (
          <Currency
            key={crypto.id}
            title={crypto.name} 
            image={crypto.large}
          />
        ))}   
      </div>
    </div>
  );
}

export default App;
