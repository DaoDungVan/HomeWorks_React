import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav-bar">
      <button
        className={`nav-toggle ${open ? "is-open" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`nav-bar-items ${open ? "active" : ""}`}>
        <li className="nav-bar-item">
          <a className="nav-bar-link">Works</a>
        </li>

        <li className="nav-bar-item">
          <a className="nav-bar-link">Blog</a>
        </li>

        <li className="nav-bar-item">
          <a className="nav-bar-link">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
