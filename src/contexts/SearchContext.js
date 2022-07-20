import React, { useState, useEffect, useContext } from "react";

const SearchContext = React.createContext();
export function useSearchContext() {
  return useContext(SearchContext);
}

export function SearchContextProvider({ children }) {
  const [query, setQuery] = useState("tokyo");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const handleQuery = (value) => {
    setQuery(value);
  };

  return (
    <SearchContext.Provider value={{ query, handleQuery, data, isLoading }}>
      {children}
    </SearchContext.Provider>
  );
}
