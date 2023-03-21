import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  return (
    <header>
      <h3>Logo</h3>
      <nav>
        <a href="/#">Home</a>
        <a href="/#">My Work</a>
        <a href="/#">About Me</a>
        <a href="/#">Contact</a>
        <button>
          <FaTimes />
        </button>
      </nav>
      <button>
        <FaBars />
      </button>
    </header>
  );
};

export default Navbar;
