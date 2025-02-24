import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-4 bg-gray-800 text-white flex justify-between">
      <Link to="/" className="text-xl font-bold">
        Notes App
      </Link>
      <Link to="/add-note" className="bg-blue-500 px-4 py-2 rounded">
        Add Note
      </Link>
    </nav>
  );
};

export default Navbar;
