
import { getMapStyle, initialMapStyle } from "./getMapStyle";
import { useEffect, useState, useCallback } from "react";
import Map, { NavigationControl } from "react-map-gl";

// use the standard map style provided by PTV
const MAP_STYLE_URL = "https://vectormaps-resources.myptv.com/styles/latest/standard.json";

const navControlStyle = {
  right: 10,
  top: 10
};

// Initializes to Karlsruhe
const initViewport = {
  longitude: 8.4055677,
  latitude: 49.0070036,
  zoom: 10,
  pitch: 0,
  bearing: 0,
};


export const VectorMap = (props) => {

  const [mapStyle, setMapStyle] = useState(initialMapStyle);

  useEffect(() => {
    getMapStyle(MAP_STYLE_URL).then(setMapStyle);
  }, []);

  const getTransformRequest = useCallback(
    (url, resourceType) => {
  
      if (resourceType === "Tile") {
  
        return { url: url, headers: { ApiKey: " " + props.apiKey } };
      }
  
      return { url: url, headers: {} };
  
    }
  );



  return <Map
    height="100%"
    width="100%"
    mapStyle={mapStyle}
    initialViewState={initViewport}
    transformRequest={(url, resourceType) => getTransformRequest(url, resourceType)}
  >
    <NavigationControl style={navControlStyle}/>
  </Map>;
};
