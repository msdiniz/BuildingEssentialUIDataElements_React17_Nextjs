//import '../styles/styles.css'
//Above will generate an error:
//Global CSS cannot be imported from files other than your Custom <App>. Due to the Global nature of // stylesheets, and to avoid conflicts, Please move all first-party global CSS imports to pages/_app.js.
import NoteList from "./NoteList.js";
import Bootstrapfontawesometest from "./Bootstrapfontawesometest.js";

function App() {
  return (
    <div className="container">
      <NoteList />
      {/* <Bootstrapfontawesometest /> */}
    </div>
  );
}

export default App;