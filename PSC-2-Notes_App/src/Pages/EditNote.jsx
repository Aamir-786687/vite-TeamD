import { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NotesContext from "../Context/NotesContext";

const EditNote = () => {
  const { id } = useParams();
  const { notes, editNote } = useContext(NotesContext);
  const navigate = useNavigate();

  const note = notes.find((note) => note.id === id);
  const [title, setTitle] = useState(note?.title || "");
  const [content, setContent] = useState(note?.content || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    editNote(id, { title, content });
    navigate("/");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Edit Note</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} className="border p-2 w-full my-2" />
        <textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} className="border p-2 w-full my-2" />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Update</button>
      </form>
    </div>
  );
};

export default EditNote;
