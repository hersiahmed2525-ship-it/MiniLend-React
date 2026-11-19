import { Link } from "react-router-dom";
import { useApp } from "../context/useApp.js";

export default function HomePage() {
  const { loans } = useApp();

  return (
    <>
      <section className="bg-success-subtle py-5">
        <div className="container py-4">
          <div className="row align-items-center g-4">
            <div className="col-lg-7">
              <p className="text-success fw-bold mb-2">
                <i className="bi bi-leaf me-2" aria-hidden="true" />Simple sharing, less waste
              </p>
              <h1 className="display-5 fw-bold mb-3">Keep track of everything you lend.</h1>
              <p className="lead text-secondary mb-4">
                Add an item, record who borrowed it, and keep all your loans in one place.
              </p>
              <Link className="btn btn-success btn-lg" to="/loans">
                <i className="bi bi-list-check me-2" aria-hidden="true" />View loans
              </Link>
            </div>
            <div className="col-lg-5">
              <div className="bg-white rounded-4 shadow-sm p-4 p-md-5 text-center">
                <i className="bi bi-box2-heart display-3 text-success" aria-hidden="true" />
                <h2 className="h4 mt-3 mb-1">{loans.length} items being lent</h2>
                <p className="text-secondary mb-0">Everything, all in one place</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-5">
        <div className="row g-4">
          {[
            ["plus-circle", "Add", "Record borrowed items with a simple form."],
            ["eye", "View", "Open a loan page for item details."],
            ["trash", "Delete", "Remove items when they come back home."],
          ].map(([icon, title, text]) => (
            <div className="col-md-4" key={title}>
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="feature-icon d-inline-flex align-items-center justify-content-center bg-success-subtle text-success rounded-circle">
                    <i className={`bi bi-${icon} fs-4 lh-1`} aria-hidden="true" />
                  </div>
                  <h2 className="h5 mt-3 mb-2">{title}</h2>
                  <p className="text-secondary mb-0">{text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
