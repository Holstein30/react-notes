import React from "react";
import "./App.css";
import { noteData } from "./data";
let noteArray = noteData;
noteArray.push({ author: "dale", message: "howdy", date: "now" });

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
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("Note: " + this.state.value);
    noteArray.push(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Insert Note:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

const Display = () => {
  return (
    <div className="card">
      <div className="container">
        <NoteList />
      </div>
    </div>
  );
};

const NoteList = () => {
  const cells = noteArray.map((note, i) => {
    return (
      <div>
        <p key={i}>{note.author}</p>
        <p key={"message" + i}>{note.message}</p>
        <p key={"date" + i}>{note.date}</p>
      </div>
    );
  });
  return <section className="note-list">{cells}</section>;
};

export default App;
