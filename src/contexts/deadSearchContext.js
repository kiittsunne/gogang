// import Bottleneck from "bottleneck";
// import React, { useState, useEffect, useContext } from "react";
// // const bottleneck = require("bottleneck");

// const SearchContext = React.createContext();
// export function useSearchContext() {
//   return useContext(SearchContext);
// }

// export function SearchContextProvider({ children }) {
//   const [query, setQuery] = useState("memphis");
//   const [data, setData] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const handleQuery = (value) => {
//     setQuery(value);
//   };

//   const [geoname, setGeoname] = useState({});
//   const [placeList, setPlaceList] = useState([]);
//   const [placeData, setPlaceData] = useState([]);
//   // const limiter = new Bottleneck({
//   //   minTime: 220,
//   // });

//   useEffect(() => {
//     const getGeoname = async (query) => {
//       setIsLoading(true);
//       const res = await fetch(
//         `https://api.opentripmap.com/0.1/en/places/geoname?name=${query}&apikey=5ae2e3f221c38a28845f05b6b167632398525032045b8475236c81b9`
//       );
//       const json = await res.json();
//       setGeoname(json);
//     };
//     getGeoname(query);
//   }, [query]);

//   useEffect(() => {
//     const getRadius = async (geoname) => {
//       const res = await fetch(
//         `https://api.opentripmap.com/0.1/en/places/radius?radius=8000&lon=${geoname.lon}&lat=${geoname.lat}&src_geom=wikidata&src_attr=wikidata&limit=4&apikey=5ae2e3f221c38a28845f05b6b167632398525032045b8475236c81b9`
//       );
//       const json = await res.json();
//       setPlaceList(json.features);
//     };
//     if (Object.keys(geoname).length !== 0) {
//       getRadius(geoname);
//     }
//   }, [geoname]);

//   useEffect(() => {
//     const getPlace = async () => {
//       const places = [];

//       for (const each of placeList) {
//         fetchPlace(each.properties.xid);
//       }
//       function fetchPlace(xid) {
//         setInterval(async function () {
//           const res = await fetch(
//             `https://api.opentripmap.com/0.1/en/places/xid/${xid}?apikey=5ae2e3f221c38a28845f05b6b167632398525032045b8475236c81b9`
//           );
//           const item = await res.json();
//           places.push(item);
//         }, 1000);
//       }
//       return places;
//     };
//     const result = getPlace();
//     setPlaceData(result);
//   }, [placeList.length]);

//   useEffect(() => {
//     setData(placeData);
//   }, [placeData.length]);

//   return (
//     <SearchContext.Provider value={{ query, handleQuery, data, isLoading }}>
//       {children}
//     </SearchContext.Provider>
//   );
// }
