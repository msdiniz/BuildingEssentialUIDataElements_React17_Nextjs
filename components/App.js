//import '../styles/styles.css'
//Above will generate an error:
//Global CSS cannot be imported from files other than your Custom <App>. Due to the Global nature of // stylesheets, and to avoid conflicts, Please move all first-party global CSS imports to pages/_app.js.
import NoteList from "./NoteList.js";
import Bootstrapfontawesometest from "./Bootstrapfontawesometest.js";
import useNotes from "../hooks/useNotes";
import useNotesModal from "../hooks/useNotesModal";
import Menu from "./Menu";
import { useState, createContext } from "react";
import NoteChangeLogs from "./NoteChangeLogs.js";

export const NotesContext = createContext({
  notesData: [],
  notesDataError: "",
  createNote: () => { },
  updateNote: () => { },
  deleteNote: () => { },
  dateFormat: ""
});

export const NotesModalContext = createContext({
  modalShow: false,
  setModalShow: () => { },
  modalNoteId: 0,
  setModalNoteId: () => { },
  modalNoteTitle: "",
  setModalNoteTitle: () => { },
  modalNoteDescription: "",
  setModalNoteDescription: () => { },
});

function App() {
  //const { notesData, notesDataError, createNote, updateNote, deleteNote } = useNotes();
  const contextValue = useNotes();
  const contextValueNotesModal = useNotesModal();
  const [currentTab, setCurrentTab] = useState("notes"); // ["notes", "logs"]

  if (contextValue.notesDataError) {
    return <div className="container">error: {contextValue.notesDataError}</div>;
  }
  if (!contextValue.notesData) {
    return <div className="container">...loading</div>;
  }

  return (
    <div className="container">
      <NotesContext.Provider value={contextValue}>
        <NotesModalContext.Provider value={contextValueNotesModal}>
          <Menu currentTab={currentTab} setCurrentTab={setCurrentTab} />
          {currentTab === "notes" && <NoteList />}
          {currentTab === "logs" && <NoteChangeLogs />}
          {currentTab === "bootstrapfontawesome" && <Bootstrapfontawesometest />}
        </NotesModalContext.Provider>
      </NotesContext.Provider >
    </div>
  );
}

export default App;