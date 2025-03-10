import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-4 bg-gray-800 text-white flex justify-between">
      <NavLink to="/" className="text-xl font-bold">
        Notes App
      </NavLink>
      <NavLink to="/add-note" className="bg-blue-500 px-4 py-2 rounded">
        Add Note
      </NavLink>
    </nav>
  );
};

export default Navbar;
