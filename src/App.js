import React from "react";
import "./app.css";

class App extends React.Component {
  render() {
    return (
      <h1>
        <Note />
      </h1>
    );
  }
}

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = { message: "Insert Note: " };
  }

  render() {
    return (
      <div>
        <form action="/submitNote">
          {this.state.message}
          <input type="text" name="note" />
          <input type="submit" value="Submit" />
          <Display />
        </form>
      </div>
    );
  }
}

const Display = () => {
  return <h1>text</h1>;
};

export default App;
