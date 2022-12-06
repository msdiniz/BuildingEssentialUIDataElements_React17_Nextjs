import NoteCard from "./NoteCard.js";
// import notes from "../data/notes.json";
// import { useEffect, useState } from "react";

function NoteList({ notesData }) {
  function sortByDate(a, b) {
    const dateA = a.createDate;
    const dateB = b.createDate;
    return dateA > dateB ? -1 : dateA < dateB ? 1 : 0;
  }

  return (
    <div className="row tab-content bg-transparent note-has-grid">
      {notesData.sort(sortByDate).map((noteItem) => {
        return <NoteCard note={noteItem} key={noteItem.id} />;
        // here I named noteItem ^^^^ but props is passed to note at NoteCard
      })}
    </div>
  );
}

export default NoteList;