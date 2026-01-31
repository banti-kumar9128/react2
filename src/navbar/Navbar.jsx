import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { BsCartDash,} from "react-icons/bs";
import { useSelector } from "react-redux";
import { FaRegUserCircle } from "react-icons/fa";

const Navbar = () => {
  const selector = useSelector((state) => state.fat.items);
  console.log(selector.length);
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between md:flex-row items-center fixed w-full top-0 z-10">
      {/* Logo */}
      <h1 className="text-xl font-bold">MyApp</h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8">
        <li>
          <Link className="hover:text-sky-400" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="hover:text-sky-400" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="hover:text-sky-400" to="/contact">
            Contact
          </Link>
        </li>
        <li>
          <Link className="hover:text-sky-400 relative" to="/card">
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 rounded-full">
              {selector.length ? selector.length : "0"}
            </span>
            <BsCartDash />
          </Link>
        </li>
        <li className="relative">
  <button
    onClick={() => setOpen(!open)}
    className="hover:text-sky-400"
  >
    <FaRegUserCircle size={24} />
  </button>

  {open && (
    <ul className="absolute right-0 mt-2 w-32 bg-white shadow-lg rounded-md text-black">
      <li className="px-4 py-2 hover:bg-gray-500">
        <Link to="/login" onClick={() => setOpen(false)}>Login</Link>
      </li>
      <li className="px-4 py-2 hover:bg-gray-400">
        <Link to="/signup" onClick={() => setOpen(false)}>Signup</Link>
      </li>
    </ul>
  )}
</li>

      </ul>

      {/* Mobile Menu Icon */}
      <div className=" flex  md:hidden text-2xl cursor-pointer">
        <li className="list-none pr-4">
          <Link className="hover:text-sky-400 relative" to="/card">
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 rounded-full">
              {selector.length ? selector.length : "0"}
            </span>
            <BsCartDash />
          </Link>
        </li>
        <div
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes onClick={()=>setOpen(true)} /> : <FaBars  />}
        </div>

        {/* Mobile Menu */}
        {open && (
          <ul className="absolute top-16 left-0 w-full bg-gray-800 flex flex-col items-center gap-6 py-6 md:hidden">
            <li>
              <Link onClick={() => setOpen(false)} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={() => setOpen(false)} to="/about">
                About
              </Link>
            </li>
            <li>
              <Link onClick={() => setOpen(false)} to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
