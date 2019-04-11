import React from "react";
import "./App.css";
import { noteData } from "./data";

class App extends React.Component {
  render() {
    return (
      <h1>
        <Note />
        <Display />
      </h1>
    );
  }
}

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = { message: "Insert Note: " };
  }

  parseData() {
    noteData.forEach(element => {
      return <p>{element.message}</p>;
    });
  }

  render() {
    return (
      <div>
        <form action="/submitNote">
          {this.parseData()}
          <input type="text" name="note" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

const Display = () => {
  return (
    <div class="card">
      <div class="container">
        <h4>
          <b>Author</b>
        </h4>
        <p>Note text</p>
        <p>Time</p>
      </div>
    </div>
  );
};

export default App;
