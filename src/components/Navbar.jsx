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

        <div
          id="main-navigation"
          className={`collapse navbar-collapse ${open ? "show" : ""}`}
        >
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
          <div className="col-12 col-lg-4 ms-lg-auto mt-3 mt-lg-0">
            <div className="d-flex align-items-center w-100 bg-white border rounded-pill overflow-hidden p-1">
              {/* Search Icon */}
              <span className="ps-3 pe-2 text-secondary d-flex align-items-center">
                <i className="bi bi-search" aria-hidden="true" />
              </span>

              {/* Input Field */}
              <input
                name="search"
                type="search"
                className="form-control border-0 shadow-none bg-transparent ps-1"
                aria-label="Search lent items"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              {/* Clear Button (Only shows if there is text) */}
              {search && (
                <button
                  type="button"
                  className="btn border-0 text-secondary px-2 shadow-none d-flex align-items-center"
                  onClick={() => setSearch("")}
                  aria-label="Clear search"
                >
                  <i className="bi bi-x-lg" aria-hidden="true" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
