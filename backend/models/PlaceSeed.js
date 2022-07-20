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
const tokyo = require("../db/tokyo_data.json");
const osaka = require("../db/osaka_data.json");

const PlaceSeed = [];

tokyo.features.forEach((place) => {
  const seedObj = {};
  if (place.properties.name !== null || "") {
    // (seedObj.country = "Japan"),
    (seedObj.city = "Tokyo"),
      (seedObj.xid = place.properties.xid),
      (seedObj.placeName = place.properties.name),
      (seedObj.kinds = place.properties.kinds);
    PlaceSeed.push(seedObj);
  }
});

osaka.features.forEach((place) => {
  const seedObj = {};
  if (place.properties.name !== null || "") {
    // (seedObj.country = "Japan"),
    (seedObj.city = "Osaka"),
      (seedObj.xid = place.properties.xid),
      (seedObj.placeName = place.properties.name),
      (seedObj.kinds = place.properties.kinds);
    PlaceSeed.push(seedObj);
  }
});

module.exports = PlaceSeed;
