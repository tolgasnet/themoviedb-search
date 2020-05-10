import React from "react";
import ReactDOM from "react-dom";
import MovieSearch from "./components/MovieSearch";
import * as logger from "./logging";

if (process.env.NODE_ENV !== "production") {
  logger.enable();
  logger.getLogger("index")("starting app, env <%s>", process.env.NODE_ENV);
}

const App: React.FC = () => {
  return <MovieSearch />;
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
