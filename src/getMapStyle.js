

const MAP_TILE_URL = "https://api.myptv.com/maps/v1/vector-tiles/{z}/{x}/{y}";

export const initialMapStyle = {
  version: 8,
  name: "initial",
  pitch: 0,
  sources: {
    ptv: {
      type: "vector",
      tiles: [
        MAP_TILE_URL
      ],
      minZoom: 0,
      maxZoom: 17
    }
  },
  layers: [],
  sprite: "https://vectormaps-resources.myptv.com/icons/latest/sprite",
  glyphs: "https://vectormaps-resources.myptv.com/fonts/latest/{fontstack}/{range}.pbf",

};

export const getMapStyle = (url) => {
  return fetch(url)
    .then(result => result.json())
    .then(mapStyle => {
      mapStyle["sources"]["ptv"]["tiles"] = [MAP_TILE_URL];
      return mapStyle;
    })
    .catch(err => console.error(err));
};
