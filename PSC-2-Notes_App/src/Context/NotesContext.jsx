import { createContext, useEffect, useState } from "react";
import axios from "axios";

const NotesContext = createContext();



export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);

  // Fetch Notes
  const fetchNotes = async () => {
    try {
      const { data } = await axios.get("https://react-with-apis-axios-library-default-rtdb.firebaseio.com/users.json");
      if (data) {
        const formattedNotes = Object.keys(data).map((id) => ({
          id,
          ...data[id],
        }));
        setNotes(formattedNotes);
      }
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  // Add Note
  const addNote = async (note) => {
    try {
      const { data } = await axios.post("https://react-with-apis-axios-library-default-rtdb.firebaseio.com/users.json", note);
      setNotes([...notes, { id: data.name, ...note }]);
    } catch (error) {
      console.error("Error adding note:", error);
    }
  };

  // Edit Note
  const editNote = async (id, updatedNote) => {
    try {
      await axios.put(`https://react-with-apis-axios-library-default-rtdb.firebaseio.com/users/${id}.json`, updatedNote);
      setNotes(notes.map((note) => (note.id === id ? updatedNote : note)));
    } catch (error) {
      console.error("Error updating note:", error);
    }
  };

  // Delete Note
  const deleteNote = async (id) => {
    try {
      await axios.delete(`https://react-with-apis-axios-library-default-rtdb.firebaseio.com/users/${id}.json`);
      setNotes(notes.filter((note) => note.id !== id));
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <NotesContext.Provider value={{ notes, addNote, editNote, deleteNote }}>
      {children}
    </NotesContext.Provider>
  );
};

export default NotesContext;
