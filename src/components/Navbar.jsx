import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Home", to: "/", end: true },
    { label: "Loans", to: "/loans" },
    { label: "About", to: "/about" },
  ];

  const linkClass = ({ isActive }) =>
    `nav-link${isActive ? " active fw-bold text-success" : ""}`;

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
            {links.map(({ label, to, end }) => (
              <NavLink
                key={to}
                className={linkClass}
                end={end}
                to={to}
                onClick={() => setOpen(false)}
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
