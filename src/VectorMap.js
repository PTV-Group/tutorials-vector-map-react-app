
import { getMapStyle, initialMapStyle } from "./getMapStyle";
import { useEffect, useState, useCallback } from "react";
import ReactMapGL, { NavigationControl } from "react-map-gl";

// use the standard map style provided by PTV
const MAP_STYLE_URL = "https://vectormaps-resources.myptv.com/styles/latest/standard.json";

const navControlStyle = {
  right: 10,
  top: 10
};

export const VectorMap = (props) => {

  const [mapStyle, setMapStyle] = useState(initialMapStyle);
  const [viewport, setViewport] = useState(props.viewport);

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

  return <ReactMapGL
    height="100%"
    width="100%"
    mapStyle={mapStyle}
    {...viewport}
    onViewportChange={setViewport}
    transformRequest={(url, resourceType) => getTransformRequest(url, resourceType)}
  >
    <NavigationControl style={navControlStyle}/>
  </ReactMapGL>;
};
