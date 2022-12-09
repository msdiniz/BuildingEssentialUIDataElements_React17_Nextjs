import { NotesModalContext } from "./App";
import { NotesContext } from "./App";
import { useContext } from "react";
import * as React from 'react';

function Menu() {
  const { dateFormat, chooseDateFormat } = useContext(NotesContext);
  //const isEnglish = dateFormat === "en";
  const [checked, setChecked] = React.useState(dateFormat === "en");

  const { 
    setModalNoteId,
    setModalNoteTitle,
    setModalNoteDescription,
    setModalShow
   } = useContext(NotesModalContext);

  const handleChange = () => {
    setChecked(!checked);
    const lang = checked ? "en" : "pt";
    chooseDateFormat(lang);
    console.debug(lang);
    //dateFormat = checked ? "en" : "pt";
  };
  //https://www.robinwieruch.de/react-checkbox/
  const Checkbox = ({ label, value, onChange }) => {
    return (
      <label>
        <input type="checkbox" checked={value} onChange={onChange} />
        {label}
      </label>
    );
  };
  function createNoteFn() {
    setModalNoteId(0);
    setModalNoteTitle("");
    setModalNoteDescription("");
    setModalShow(true);
  }

  return (
    <ul className="nav nav-pills p-3 bg-white mb-3 founded-pill align-items-center">
      <li className="nav-item ml-auto">
        <a
          href="#"
          onClick={createNoteFn}
          className="nav-link btn-primary rounded-pill d-flex align-items-center px-3"
        >
          <i className="icon-note m-1"></i>
          <span className="d-none d-md-block font-14">Add Notes</span>
        </a>
      </li>
      <li className="nav-item ml-auto">
        <div>
          <Checkbox
            label="American US time format?"
            value={checked}
            onChange={handleChange}
          />
          <p>Time format is {checked ? "English" : "Português"} and dateFormat is {dateFormat} </p>       {/* {checked.toString()} */}
        </div>
      </li>
    </ul>
  );
}

export default Menu;