import "mapbox-gl/dist/mapbox-gl.css";

import { VectorMap } from "./VectorMap";

const api_key = "YOUR_API_KEY";

const wrapperStyle = {
  position: "absolute",
  gridArea: "map",
  height: "100%",
  width: "100%",
  zIndex: 0
};

const App = () => (
  <div style={wrapperStyle}>
    <VectorMap apiKey={api_key}/>
  </div>
);

export default App;
