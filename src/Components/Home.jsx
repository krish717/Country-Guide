import {useState } from 'react';
 // Corrected import
import CountryList from "./CountryList.jsx";
import SearchBar from "./SearchBar.jsx";
import SelectMenu from "./SelectMenu.jsx";
import useTheme from '../Hooks/useTheme.jsx';

function Home() {
  const [query, setQuery] = useState('');
  const [isdark] = useTheme();
  return (
    <div className="App">
      <main className={`${isdark ? 'dark' : ''}`}>
        <div className="search-filter-container">
          <SearchBar setQuery={setQuery} />
          <SelectMenu setQuery={setQuery} />
        </div>
        <CountryList query={query} />
      </main>
    </div>
  );
}

export default Home;
