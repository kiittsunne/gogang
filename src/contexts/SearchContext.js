import React, { useState, useEffect, useContext } from "react";

const SearchContext = React.createContext();
export function useSearchContext() {
  return useContext(SearchContext);
}

export function SearchContextProvider({ children }) {
  const [query, setQuery] = useState("Tokyo");
  const [data, setData] = useState([]);
  const [imgData, setImgData] = useState([]);
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

  // useEffect(() => {
  //   const dataImgs = [];
  //   for (const place of data) {
  //     getDataImg(place.placeName);
  //   }
  //   async function getDataImg(placeName) {
  //     const res = await fetch(
  //       `https://commons.wikimedia.org/w/api.php?action=query*origin=*&generator=categorymembers&gcmtitle=Category:${placeName}&gcmlimit=1&gcmtype=file&prop=imageinfo&&iiprop=url&format=json`,
  //       {
  //         method: "post",
  //         headers: {
  //           "Access-Control-Allow-Origin": "*",
  //         },
  //       }
  //     );
  //     const json = await res;
  //     dataImgs.push(json);
  //   }
  //   setImgData(dataImgs);
  // }, [data]);

  return (
    <SearchContext.Provider
      value={{ query, handleQuery, data, imgData, isLoading }}
    >
      {children}
    </SearchContext.Provider>
  );
}

// const query = "Osaka Prefectural Nakanoshima Library";

// const cleanQuery = query.split(" ").join("%20");

// async function getImgUrl(cleanQuery) {
//   const res = await fetch(
//     `https://commons.wikimedia.org/w/api.php?action=query&generator=categorymembers&gcmtitle=Category:${cleanQuery}&gcmlimit=1&gcmtype=file&prop=imageinfo&&iiprop=url&format=json`
//   );
//   const json = await res.json();
//   const pageId = Object.keys(json.query.pages)[0];
//   console.log(json.query.pages[pageId]);
// }

// getImgUrl(cleanQuery);

// async function getDescription(cleanQuery) {
//   const res = await fetch(
//     `https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=${cleanQuery}`
//   );
//   const json = await res.json();
//   const pageId = Object.keys(json.query.pages)[0];
//   console.log(json.query.pages[pageId]);
// }

// getDescription(cleanQuery);
