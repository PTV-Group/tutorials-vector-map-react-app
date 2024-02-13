import { useCallback } from "react";
import { Map, NavigationControl } from "react-map-gl/maplibre";

// Use the standard map style provided by PTV.
const MAP_STYLE_URL = "https://vectormaps-resources.myptv.com/styles/latest/standard.json";

// The initial view is Karlsruhe, Germany.
const INITIAL_VIEW_PORT = {
  longitude: 8.4055677,
  latitude: 49.0070036,
  zoom: 12,
  pitch: 0,
  bearing: 0,
};

export const VectorMap = (props) => {
  const getTransformRequest = useCallback(
    (url, resourceType) => {
      if (resourceType === "Tile") {
        return { url: url, headers: { ApiKey: " " + props.apiKey } };
      }
      return { url: url, headers: {} };
    }
  );

  return (
    <Map
      height="100%"
      width="100%"
      mapStyle={MAP_STYLE_URL}
      initialViewState={INITIAL_VIEW_PORT}
      transformRequest={(url, resourceType) => getTransformRequest(url, resourceType)}
    >
      <NavigationControl position="bottom-right" />
    </Map>
  );
};
