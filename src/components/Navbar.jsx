import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useApp } from "../context/useApp";

const links = [
  { label: "Home", to: "/", end: true },
  { label: "Loans", to: "/loans" },
  { label: "About", to: "/about" },
];

const linkClass = ({ isActive }) =>
  `nav-link px-3 rounded-pill ${isActive ? "bg-success text-white" : ""}`;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { search, setSearch } = useApp();

  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom sticky-top">

      <div className="container-fluid px-3 px-lg-4">
        <NavLink
          to="/"
          className="navbar-brand fw-bold text-success flex-shrink-0 me-lg-4"
          onClick={() => setOpen(false)}
        >
          <i className="bi bi-wallet me-2" />
          MiniLend
        </NavLink>

        <button
          type="button"
          className="navbar-toggler flex-shrink-0"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
          aria-controls="main-navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div id="main-navigation" className={`collapse navbar-collapse ${open ? "show" : ""}`}>
          <div className="navbar-nav me-lg-auto gap-lg-1 mt-3 mt-lg-0">
            {links.map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={linkClass}
                onClick={() => setOpen(false)}
              >
                {label}
              </NavLink>
            ))}
          </div>

          <div className="col-12 col-lg-3 ms-lg-auto mt-3 mt-lg-0">
            <div className="input-group">
              <span className="input-group-text bg-white" aria-hidden="true">
                <i className="bi bi-search text-secondary" />
              </span>
              <input
                type="search"
                className="form-control"
                aria-label="Search loans"
                placeholder="Search loans..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
