import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `nav-link ${isActive ? "active fw-bold text-success" : "text-dark"}`;

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-white border-bottom sticky-top">
      <div className="container">
        <NavLink
          className="navbar-brand fw-bold text-success"
          to="/"
          onClick={() => setOpen(false)}
        >
          <i className="bi bi-wallet me-2" aria-hidden="true" />
          MiniLend
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`collapse navbar-collapse ${open ? "show" : ""}`}>
          <div className="navbar-nav ms-auto">
            <NavLink
              className={linkClass}
              end
              to="/"
              onClick={() => setOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              className={linkClass}
              to="/loans"
              onClick={() => setOpen(false)}
            >
              Loans
            </NavLink>
            <NavLink
              className={linkClass}
              to="/about"
              onClick={() => setOpen(false)}
            >
              About
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
