import useGeneralizedCrudMethods from "./useGeneralizedCrudMethods";
import { useState } from "react";
import notes from "../data/notes.json";
import { v4 as uuidv4 } from "uuid";

function useNotes() {
  const [dateFormat, setDateFormat] = useState("en");
  //Transfered to useGeneralizedCrudMethods:
  // const [notesData, setNotesData] = useState();
  // const [notesDataError, setNotesDataError] = useState();
  // useEffect(() => {
  //   async function getData() {
  //     await new Promise((resolve) => setTimeout(resolve, 1000));
  //     try {
  //       setNotesData(notes);
  //     } catch (e) {
  //       setNotesDataError(e);
  //     }
  //   }
  //   getData();
  // }, []);

  const {
    data: notesData,
    erro: notesDataError,
    createRecord: createNotesData,
    updateRecord: updateNotesData,
    deleteRecord: deleteNotesData
  } = useGeneralizedCrudMethods(notes);

  function chooseDateFormat(format) {
    switch (format) {
      case "en":
        setDateFormat("pt");
        console.debug("pt");
        break;
      case "pt":
        setDateFormat("en");
        console.debug("en");
        break;
    }
  };

  function createNote(title, description) {
    const newNote = {
      id: uuidv4(),
      title,
      description,
      createDate: new Date().toISOString(),
    };
    createNotesData(newNote); // Order does not matter as sort happens later
  }

  function updateNote(id, title, description) {
    const updateObject = {
      title, description
    };
    updateNotesData(id, updateObject);
  }

  function deleteNote(id) {
    deleteNotesData(id);    
  }

  return { notesData, notesDataError, dateFormat, chooseDateFormat, createNote, updateNote, deleteNote };
}

export default useNotes;
