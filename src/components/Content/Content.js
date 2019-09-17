import React from "react";
import style from "./Content.module.css";
import Button from "../UI/Button";
import Note from "../Note/Note";

const Content = props => {
  let newNote = React.createRef();

  let addNote = () => {
    props.onClick(newNote.current.value);
    newNote.current.value = "";
  };

  return (
    <div className={style.Content}>
      <textarea cols="auto" rows="5" ref={newNote}></textarea>
      <Button onClick={addNote}>Добавить</Button>
      <Note appState={props.appState} />
    </div>
  );
};

export default Content;
