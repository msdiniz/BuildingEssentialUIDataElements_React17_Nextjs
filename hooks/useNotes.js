import { useState } from "react";
import useEntityNotes from "./entityMethods/useEntityNotes";
import useEntityNoteAttributes from "./entityMethods/useEntityNoteAttributes";

function useNotes() {
  const [dateFormat, setDateFormat] = useState("en");
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
  const {
    data: notesData,
    error: notesDataError,
    createNoteEntity,
    updateNoteEntity,
    deleteNoteEntity,
  } = useEntityNotes();

  const {
    data: noteAttributesData,
    error: noteAttributesDataError,
    updateNoteAttributesEntity,
    deleteNoteAttributesEntity,
  } = useEntityNoteAttributes();

  function createNote(title, description) {
    createNoteEntity(title, description);
  }

  function updateNote(id, title, description, pinned, important) {
    updateNoteEntity(id, title, description);
    updateNoteAttributesEntity(id, pinned, important);
  }

  function deleteNote(id) {
    deleteNoteEntity(id);
    deleteNoteAttributesEntity(id);
  }

  return {
    notesData,
    notesDataError,
    noteAttributesData,
    noteAttributesDataError,
    dateFormat,
    chooseDateFormat,
    createNote,
    updateNote,
    deleteNote,
  };
}

export default useNotes;
