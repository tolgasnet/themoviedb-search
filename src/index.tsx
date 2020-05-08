import React from "react";
import ReactDOM from "react-dom";
import MovieSearch from "./components/MovieSearch";

const App: React.FC = () => {
  return <MovieSearch />;
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
