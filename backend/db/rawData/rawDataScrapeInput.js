// const testplaces = require("./rawDataScrapeInput.json");
// const fs = require("fs");

// async function fetchImg() {
//   const testArr = [];
//   for (const place of testplaces) {
//     const res = await fetch(
//       `https://commons.wikimedia.org/w/api.php?action=query&generator=categorymembers&gcmtitle=Category:${place.placeName
//         .split(" ")
//         .join(
//           "%20"
//         )}&gcmlimit=1&gcmtype=file&prop=imageinfo&&iiprop=url&format=json`
//     );
//     const json = await res.json();
//     if ("query" in json) {
//       const pageId = Object.keys(json.query.pages)[0];
//       const page = json.query.pages[pageId];
//       const imgurl = page.imageinfo[0].url;
//       const obj = {};
//       obj.placeName = place.placeName;
//       obj.image = imgurl;
//       obj.city = place.city;
//       obj.kinds = place.kinds;

//       const res = await fetch(
//         `https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=${place.placeName
//           .split(" ")
//           .join("%20")}`
//       );

//       const extract = await res.json();
//       const extractId = Object.keys(extract.query.pages)[0];
//       const extractObj = extract.query.pages[extractId];
//       const extractData = extractObj.extract;
//       obj.description = extractData;
//       if (obj.description !== undefined) {
//         testArr.push(obj);
//       }
//     }
//   }
//   fs.writeFile(
//     "/Users/kit/desktop/seedplaces.txt",
//     JSON.stringify(testArr),
//     function (err) {
//       if (err) {
//         return console.log(err);
//       }

//       console.log("The file was saved!");
//     }
//   );
//   console.log(testArr.length);
// }
// fetchImg();
