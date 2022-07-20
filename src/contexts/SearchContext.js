import React, { useState, useEffect, useContext } from "react";

const SearchContext = React.createContext();
export function useSearchContext() {
  return useContext(SearchContext);
}

export function SearchContextProvider({ children }) {
  const [query, setQuery] = useState("Tokyo");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const handleQuery = (value) => {
    setQuery(value);
  };

  useEffect(() => {
    async function fetchPlaces() {
      try {
        const res = await fetch("http://localhost:5001/api/city/places", {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ city: query }),
        });
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.log(err.message);
      }
    }
    fetchPlaces();
  }, [query]);

  return (
    <SearchContext.Provider value={{ query, handleQuery, data, isLoading }}>
      {children}
    </SearchContext.Provider>
  );
}
