import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  render() {
    return <input type="text" />;
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
