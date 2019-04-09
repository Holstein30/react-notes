import React from "react";
import "./app.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { message: "Howdy" };
  }

  render() {
    return <h1>{this.state.message}</h1>;
  }
}

export default App;
