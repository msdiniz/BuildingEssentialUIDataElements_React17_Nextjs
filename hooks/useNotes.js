import useGeneralizedCrudMethods from "./useGeneralizedCrudMethods";
import { useState } from "react";
import notes from "../data/notes.json";
import noteAttributes from "../data/noteAttributes";
import { v4 as uuidv4 } from "uuid";
import useEntityNotes from "./entityMethods/useEntityNotes";

function useNotes() {
  const [dateFormat, setDateFormat] = useState("en");

  const {
    data: notesData,
    error: notesDataError,
    createNoteEntity,
    updateNoteEntity,
    deleteNoteEntity
  } = useEntityNotes();

  const {
    data: noteAttributesData,
    erro: noteAttributesDataError,
    createRecord: createNoteAttributesData,
    updateRecord: updateNoteAttributesData,
    deleteRecord: deleteNoteAttributesData
  } = useGeneralizedCrudMethods(noteAttributes);

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
    createNoteEntity(title, description); // Order does not matter as sort happens later
  }

  function updateNote(id, title, description, pinned, important) {
    // const updateObject = {
    //   title, description
    // };
    // updateNotesData(id, updateObject);
    updateNoteEntity(id, title, description);

    const noteAttributes = noteAttributesData.find((rec) => rec.noteId === id);
    if (noteAttributes) {
      updateNoteAttributesData(noteAttributes.id, {
        pinned: pinned === undefined ? undefined : Number(pinned),
        important: important === undefined ? undefined : Number(important),
        updateDate: new Date().toISOString(),
      });
    } else {
      createNoteAttributesData({
        id: uuidv4(),
        noteId: id,
        pinned: pinned === undefined ? undefined : Number(pinned),
        important: important === undefined ? undefined : Number(important),
        updateDate: new Date().toISOString(),
      });
    }
  }

  function deleteNote(id) {
    deleteNoteEntity(id);
    noteAttributesData
      .filter((rec) => rec.noteId === id)
      .forEach((rec) => {
        deleteNoteAttributesData(rec.id);
      });
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
    deleteNote
  };
}

export default useNotes;
