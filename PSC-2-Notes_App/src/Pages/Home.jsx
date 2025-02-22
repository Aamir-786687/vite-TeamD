import { useContext } from "react";
import NotesContext from "../Context/NotesContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { notes, deleteNote } = useContext(NotesContext);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Notes</h1>
      <Link to="/add-note" className="bg-blue-500 text-white p-2 rounded">Add Note</Link>
      <ul className="mt-4">
        {notes.map((note) => (
          <li key={note.id} className="border p-2 my-2">
            <h2 className="font-semibold">{note.title}</h2>
            <p className="content">{note.content}</p>
            <Link to={`/edit-note/${note.id}`} className="text-blue-600">Edit</Link>
            <button onClick={() => deleteNote(note.id)} className="bg-red-500 text-white p-1 rounded ml-2">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
