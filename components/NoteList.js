import NoteCard from "./NoteCard.js";
import notes from "../data/notes.json";

function NoteList() {
  // const notesData = [
  //   {
  //     id: "1",
  //     title: "Get Hotel",
  //     description: "Prefer Best Westerns",
  //     createDate: "2021-07-11T13:32:10.000Z",
  //   },
  //   {
  //     id: "2",
  //     title: "Fill Care With Gas",
  //     description: "Make sure to get Shell",
  //     createDate: "2021-07-11T13:31:34.000Z",
  //   },
  //   {
  //     id: "3",
  //     title: "Pack Bathing Suit",
  //     description: "Make sure to bring extra bathing suite",
  //     createDate: "2021-07-11T13:33:07.000Z",
  //   },
  // ];
  const notesData = notes;
  return (
    <div className="row tab-content bg-transparent note-has-grid">
      {notesData.map((noteItem) => {
        return <NoteCard note={noteItem} key={noteItem.id} />;
        // here I named noteItem ^^^^ but props is passed to note at NoteCard
      })}
    </div>
  );
}

export default NoteList;