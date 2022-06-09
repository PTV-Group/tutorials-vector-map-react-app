import "mapbox-gl/dist/mapbox-gl.css";

import { VectorMap } from "./VectorMap";

const api_key = "YOUR_API_KEY";

// Initializes to Karlsruhe
export const initViewport = {
  longitude: 8.4055677,
  latitude: 49.0070036,
  zoom: 10,
  pitch: 0,
  bearing: 0,
};

const wrapperStyle = {
  position: "absolute",
  gridArea: "map",
  height: "100%",
  width: "100%",
  zIndex: 0
};

const App = () => (
  <div style={wrapperStyle}>
    <VectorMap viewport={initViewport} apiKey={api_key}/>
  </div>
);

export default App;
