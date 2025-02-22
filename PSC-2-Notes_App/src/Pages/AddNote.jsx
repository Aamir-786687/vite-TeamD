import { useContext, useState } from "react";
import NotesContext from "../Context/NotesContext";
import { useNavigate } from "react-router-dom";
// import "./AddNotes.css";

const AddNote = () => {
  const { addNote } = useContext(NotesContext);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addNote({ title, content });
    navigate("/");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Add Note</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} className="border p-2 w-full my-2" />
        <textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} className="border p-2 w-full my-2" />
        <button type="submit" className="bg-green-500 text-white p-2 rounded">Add</button>
      </form>
    </div>
  );
};

export default AddNote;
