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

  handleChange(e) {
    console.log(e);
    // this.setState = { message: e.target.value };
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(e);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} action="/submitNote">
          {this.state.message}
          <input
            type="text"
            name="note"
            value={this.state.message}
            onChange={this.handleChange}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
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
  const cells = noteData.map(note => {
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
