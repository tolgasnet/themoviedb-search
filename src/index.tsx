import React, { FunctionComponent } from "react";
import ReactDOM from "react-dom";
import MovieSearch from "./components/MovieSearch";

const App: FunctionComponent = () => {
  return <MovieSearch />;
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
