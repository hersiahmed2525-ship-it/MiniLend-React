import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import HomePage from "./pages/HomePage.jsx";
import LoansPage from "./pages/LoansPage.jsx";
import LoanDetailsPage from "./pages/LoanDetailsPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <main className="flex-grow-1 bg-body-tertiary">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/loans" element={<LoansPage />} />
            <Route path="/loans/:id" element={<LoanDetailsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route
              path="*"
              element={
                <div className="container py-5 text-center">
                  <i className="bi bi-compass display-1 text-success" aria-hidden="true" />
                  <h1 className="h2 mt-3">Page not found</h1>
                  <p className="text-secondary">The page you requested does not exist.</p>
                </div>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
