//import '../styles/styles.css'
//Above will generate an error:
//Global CSS cannot be imported from files other than your Custom <App>. Due to the Global nature of // stylesheets, and to avoid conflicts, Please move all first-party global CSS imports to pages/_app.js.
import NoteList from "./NoteList.js";
import Bootstrapfontawesometest from "./Bootstrapfontawesometest.js";
import useNotes from "../hooks/useNotes";
import useNotesModal from "../hooks/useNotesModal";
import Menu from "./Menu";
import { createContext } from "react";

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
          <Menu />
          <NoteList />
        </NotesModalContext.Provider>
      </NotesContext.Provider >
      <Bootstrapfontawesometest />
    </div>
  );
}

export default App;