import React from "react";
import firebase from "firebase";

export default class NoteCard extends React.Component {
  constructor() {
    super();
    this.state = {
      editing: false,
      note: {}
    };
    this.save = this.save.bind(this);
  }

  componentDidMount() {
    this.setState({
      note: this.props.note
    });
  }

  save(e) {
    e.preventDefault();
    const dbRef = firebase.database().ref(this.state.note.key);

    dbRef.update({
      title: this.noteTitle.value,
      text: this.noteText.value
    });

    this.setState({
      editing: false
    });
  }

  render() {
    let editingTemp = (
      <span>
        <h4>{this.state.note.title}</h4>
        <p>{this.state.note.text}</p>
      </span>
    );
    if (this.state.editing) {
      editingTemp = (
        <form onSubmit={this.save}>
          <div>
            <input
              type="text"
              defaultValue={this.state.note.title}
              name="title"
              ref={ref => (this.noteTitle = ref)}
            />
          </div>
          <div>
            <input
              type="text"
              defaultValue={this.state.note.text}
              name="text"
              ref={ref => (this.noteText = ref)}
            />
          </div>
          <input type="submit" value="Done Editing!" />
        </form>
      );
    }
    return (
      <div className="noteCard">
        <i
          className="fa fa-edit"
          onClick={() => this.setState({ editing: true })}
        />
        <i
          className="fa fa-times"
          onClick={() => this.props.removeNote(this.state.note.key)}
        />
        {editingTemp}
      </div>
    );
  }
}
