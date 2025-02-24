import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotesProvider } from "./Context/NotesContext";
import Home from "./Pages/Home";
import AddNote from "./Pages/AddNote";
import EditNote from "./Pages/EditNote";

const App = () => {
  return (
    <NotesProvider>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-note" element={<AddNote />} />
          <Route path="/edit-note/:id" element={<EditNote />} />
        </Routes>
    </NotesProvider>
  );
};

export default App;
