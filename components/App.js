//import '../styles/styles.css'
//Above will generate an error:
//Global CSS cannot be imported from files other than your Custom <App>. Due to the Global nature of // stylesheets, and to avoid conflicts, Please move all first-party global CSS imports to pages/_app.js.
import NoteList from "./NoteList.js";
import Menu from "./Menu.js";
import Bootstrapfontawesometest from "./Bootstrapfontawesometest.js";
import useNotes from "../hooks/useNotes";
import { createContext } from "react";

export const NotesContext = createContext({
  notesData: [],
  notesDataError: "",
  createNote: () => {},
  updateNote: () => {},
  deleteNote: () => {},
  dateFormat: "en"
});

function App() {
  //const { notesData, notesDataError, createNote, updateNote, deleteNote } = useNotes();
  const contextValue = useNotes();

  if (contextValue.notesDataError) {
    return <div className="container">error: {contextValue.notesDataError}</div>;
  }
  if (!contextValue.notesData) {
    return <div className="container">...loading</div>;
  }

  //It was moved to Menu, that is where I start AddNote
  // function createNoteFn() {
  //   const timeOfDay = new Date().toLocaleTimeString("en", {
  //     hour: "2-digit",
  //     minute: "2-digit",
  //     second: "2-digit",
  //   });
  //   createNote(
  //     `Note at ${timeOfDay}`,
  //     `This sample note created at ${timeOfDay}`
  //   );
  // }
  return (
    // <div className="container">
    //   <Menu createNoteFn={createNoteFn} />
    //   <NoteList
    //     notesData={notesData}
    //     updateNote={updateNote}
    //     deleteNote={deleteNote}
    //   />
    //   {/* <Bootstrapfontawesometest /> */}
    // </div>
    <div className="container">
    <NotesContext.Provider value={contextValue}>
      <Menu />
      <NoteList />
    </NotesContext.Provider>
  </div>
  );
}

export default App;