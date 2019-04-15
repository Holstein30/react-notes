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
    e.preventDefault();
    console.log(e);
    // this.setState = { message: e.target.value };
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.message);
  }

  render() {
    return (
      <div>
        <form action="/submitNote">
          <input
            type="text"
            name="note"
            defaultValue={this.state.message}
            onChange={this.handleChange}
          />
          <input type="submit" value="Submit" onSubmit={this.handleSubmit} />
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
