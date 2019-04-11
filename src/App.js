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

  render() {
    return (
      <div>
        <form action="/submitNote">
          {this.state.message}
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
