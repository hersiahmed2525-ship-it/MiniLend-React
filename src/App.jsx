import { NavLink, Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="min-vh-100 d-flex flex-column">
      <header className="border-bottom">
        <nav className="navbar navbar-expand container py-3">
          <NavLink className="navbar-brand fw-semibold" to="/">
            <i className="bi bi-wallet2 me-2" aria-hidden="true" />
            MiniLend
          </NavLink>
          <div className="navbar-nav ms-auto">
            <NavLink className="nav-link" to="/" end>
              <i className="bi bi-house me-1" aria-hidden="true" />
              Home
            </NavLink>
            <NavLink className="nav-link" to="/about">
              <i className="bi bi-info-circle me-1" aria-hidden="true" />
              About
            </NavLink>
          </div>
        </nav>
      </header>

      <main className="container flex-grow-1 py-5">
        <Outlet />
      </main>

      <footer className="container border-top py-3 text-secondary small">
        MiniLend — Student project
      </footer>
    </div>
  )
}

export default App
