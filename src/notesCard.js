import React from "react";

export default function(props) {
  return (
    <div className="noteCard">
      <i className="fa fa-edit" />
      <i
        className="fa fa-times"
        onClick={() => props.removeNote(props.note.key)}
      />
      <h4>{props.note.title}</h4>
      <p>{props.note.text}</p>
    </div>
  );
}
