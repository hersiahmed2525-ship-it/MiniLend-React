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
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/loans" element={<LoansPage />} />
            <Route path="/loans/:id" element={<LoanDetailsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<h1 className="container py-5">Page not found</h1>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
