function NoteCard({ note }) {
  // here I named ^^^^^^ but there props is passed as noteItem at NoteList
  return (
    <div className="col-md-4 single-note-item all-category">
      <div className="card card-body">
        <div>
          <span className="side-stick"></span>
          <h5 className="note-title text-truncate w-75 mb-0">{note.title}</h5>
        </div>

        <p className="note-date font-12 text-muted">
          {new Date(note.createDate).toLocaleTimeString("pt", {
            //TODO: use useContext to localize the time between en and pt
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>

        <div className="note-content">
          <p className="note-inner-content text-muted">{note.description}</p>
        </div>
      </div>
    </div>
  );
}

export default NoteCard;