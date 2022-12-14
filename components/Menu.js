import { NotesModalContext } from "./App";
import { NotesContext } from "./App";
import { useContext } from "react";
import * as React from 'react';

function Menu({ currentTab, setCurrentTab }) {
  const { dateFormat, chooseDateFormat } = useContext(NotesContext);
  //const isEnglish = dateFormat === "en";
  const [checked, setChecked] = React.useState(dateFormat === "en");

  const {
    setModalNoteId,
    setModalNoteTitle,
    setModalNoteDescription,
    setModalShow,
    setTagNamesNewValue,
    setModalNoteTagIds,
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
    setTagNamesNewValue("");
    setModalNoteTagIds([]);
    setModalShow(true);
  }

  function TabItem({ tabValue, tabText }) {
    const tabClass =
      tabValue === currentTab
        ? "nav-link rounded-pill note-link d-flex align-items-center px-2 px-md-3 mr-0 mr-md-2 active"
        : "nav-link rounded-pill note-link d-flex align-items-center px-2 px-md-3 mr-0 mr-md-2";
    return (
      <li className="nav-item">
        <a
          href="#"
          onClick={() => {
            setCurrentTab(tabValue);
          }}
          className={tabClass}
        >
          <i className="icon-layers mr-1"></i>
          <span className="d-none d-md-block">{tabText}</span>
        </a>
      </li>
    );
  }

  function AddNoteButton() {
    return (
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
    );
  }

  return (
    <ul className="nav nav-pills p-3 bg-white mb-3 founded-pill align-items-center">
      {/* https://stackoverflow.com/questions/42237406/animate-shrink-navbar-on-scroll-using-bootstrap */}
      <TabItem tabValue="notes" tabText="All Notes" />
      <TabItem tabValue="logs" tabText="Change Logs" />
      <TabItem tabValue="bootstrapfontawesome" tabText="Format Test" />
      {currentTab === "notes" && <AddNoteButton />}
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