import { useState } from "react";
import { NavLink } from "react-router-dom";

const links = [
  { label: "Home", to: "/", end: true },
  { label: "Loans", to: "/loans" },
  { label: "About", to: "/about" },
];

const linkClass = ({ isActive }) =>
  `nav-link px-3 rounded-pill ${isActive ? "bg-success text-white" : ""}`;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-md bg-white border-bottom sticky-top">
      <div className="container">
        <NavLink
          to="/"
          className="navbar-brand fw-bold text-success"
          onClick={() => setOpen(false)}
        >
          <i className="bi bi-wallet me-2" />
          MiniLend
        </NavLink>

        <button
          type="button"
          className="navbar-toggler"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className={`collapse navbar-collapse ${open ? "show" : ""}`}>
          <div className="navbar-nav ms-auto">
            {links.map((link) => (
              <NavLink
                key={link.to}
                {...link}
                className={linkClass}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
