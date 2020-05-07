import React from "react";
import ReactDOM from "react-dom";
import MovieSearch from "./components/MovieSearch";

class App extends React.Component {
  render() {
    return <MovieSearch />;
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
