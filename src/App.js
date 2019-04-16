import React from "react";
import "./App.css";
import { noteData } from "./data";
let noteArray = noteData;

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
        <input type="submit" value="Submit" onClick={this.NoteList} />
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

const NoteList = ({ handleOnClick }) => {
  const cells = noteArray.map(note => {
    return (
      <div>
        <p>{note.author}</p>
        <p>{note.message}</p>
        <p>{note.date}</p>
      </div>
    );
  });
  return <section className="note-list">{cells}</section>;
};

export default App;
