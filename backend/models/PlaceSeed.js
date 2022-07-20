const tokyo = require("../db/tokyo_data.json");
const osaka = require("../db/osaka_data.json");

const PlaceSeed = [];
const english = /^[A-Za-z0-9]*$/;

tokyo.features.forEach((place) => {
  const seedObj = {};
  if (
    english.test(place.properties.name[0]) &&
    english.test(place.properties.name[place.properties.length - 1])
  ) {
    (seedObj.city = "Tokyo"),
      (seedObj.xid = place.properties.xid),
      (seedObj.placeName = place.properties.name),
      (seedObj.kinds = place.properties.kinds);
    PlaceSeed.push(seedObj);
  }
});

osaka.features.forEach((place) => {
  const seedObj = {};
  if (
    english.test(place.properties.name[0]) &&
    english.test(place.properties.name[place.properties.length - 1])
  ) {
    (seedObj.city = "Osaka"),
      (seedObj.xid = place.properties.xid),
      (seedObj.placeName = place.properties.name),
      (seedObj.kinds = place.properties.kinds),
      (seedObj.image = ``);
    PlaceSeed.push(seedObj);
  }
});

module.exports = PlaceSeed;
