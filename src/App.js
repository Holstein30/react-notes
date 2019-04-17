import React from "react";
import firebase from "firebase";
import NoteCard from "./notesCard";
import "./App.css";

// Initialize Firebase
const config = {
  apiKey: "AIzaSyDjXetmNBP0LfJ08oc2xI5eO3aNkl8q1r0",
  authDomain: "react-notes-29a14.firebaseapp.com",
  databaseURL: "https://react-notes-29a14.firebaseio.com",
  projectId: "react-notes-29a14",
  storageBucket: "react-notes-29a14.appspot.com",
  messagingSenderId: "620863045487"
};
firebase.initializeApp(config);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      notes: []
    };
    this.showSidebar = this.showSidebar.bind(this);
    this.addNote = this.addNote.bind(this);
  }

  componentDidMount() {
    firebase
      .database()
      .ref()
      .on("value", res => {
        const userData = res.val();
        const dataArray = [];
        for (let objKey in userData) {
          userData[objKey].key = objKey;
          dataArray.push(userData[objKey]);
        }
        this.setState({
          notes: dataArray
        });
      });
  }

  showSidebar(e) {
    e.preventDefault();
    this.sidebar.classList.toggle("show");
  }

  addNote(e) {
    e.preventDefault();
    const note = {
      title: this.noteTitle.value,
      text: this.noteText.value
    };

    const dbRef = firebase.database().ref();
    dbRef.push(note);

    this.noteTitle.value = "";
    this.noteText.value = "";
    this.showSidebar(e);
  }

  render() {
    return (
      <div>
        <header className="mainHeader">
          <h1>Noted</h1>
          <nav>
            <a href="" onClick={this.showSidebar}>
              Add New Note
            </a>
            <section className="notes">
              {this.state.notes
                .map((note, i) => {
                  return <NoteCard note={note} key={`note-${i}`} />;
                })
                .reverse()}
            </section>
            <aside className="sidebar" ref={ref => (this.sidebar = ref)}>
              <form onSubmit={this.addNote}>
                <h3>Add New Note</h3>
                <div className="close-btn" onClick={this.showSidebar}>
                  <i className="fa fa-times" />
                </div>
                <label htmlFor="note-title">Title:</label>
                <input
                  type="text"
                  name="note-title"
                  ref={ref => (this.noteTitle = ref)}
                />
                <label htmlFor="note-text">Text:</label>
                <textarea name="note-text" ref={ref => (this.noteText = ref)} />
                <input type="submit" value="Add New Note" />
              </form>
            </aside>
          </nav>
        </header>
      </div>
    );
  }
}

export default App;
