import { useState, createContext } from "react";
import styles from "./ComponentSearch/atomic/search.module.scss";

import { SearchResultsList, SearchBar } from "./ComponentSearch/atomic";

export const inputContext = createContext();

function SearchBarModule() {
  const [results, setResults] = useState([]);
  const [input, setInput] = useState("");

  return (
    <inputContext.Provider value={{setInput, input,results,setResults}}>
      <div className={styles.searchContainer}>
        <div className={styles.inputSearch}>
          <SearchBar />
        </div>
        <div className={styles.resultsContainer}>
          {results && results.length > 0 && (
            <SearchResultsList />
          )}
        </div>
      </div>
    </inputContext.Provider>
  );
}

export default SearchBarModule;
