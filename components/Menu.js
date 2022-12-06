import { NotesContext } from "./App";
import { useContext } from "react";
import * as React from 'react';

function Menu() {
  const { createNote, chooseDateFormat } = useContext(NotesContext);
  const [checked, setChecked] = React.useState(false);

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
    const timeOfDay = new Date().toLocaleTimeString("en", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    createNote(
      `Note at ${timeOfDay}`,
      `This sample note created at ${timeOfDay}`
    );
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
        label="Which Time format?"
        value={checked}
        onChange={handleChange}
      />
      <p>Time format is {checked ? "English" : "Português"} </p>       {/* {checked.toString()} */}
    </div>        
      </li>
    </ul>
  );
}

export default Menu;