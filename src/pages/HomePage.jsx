import { Link } from "react-router-dom";
import { useApp } from "../context/useApp.js";

export default function HomePage() {
  const { loans } = useApp();

  return (
    <>
      <section className="hero py-5">
        <div className="container py-4">
          <div className="row align-items-center g-4">
            <div className="col-lg-7">
              <p className="text-success fw-bold">Simple sharing, less waste</p>
              <h1 className="display-5 fw-bold mb-3">Keep track of everything you lend.</h1>
              <p className="lead text-secondary">
                Add an item, record who borrowed it, and keep all your loans in one place.
              </p>
              <Link className="btn btn-success btn-lg mt-2" to="/loans">
                <i className="bi bi-list-check me-2" aria-hidden="true" />View loans
              </Link>
            </div>
            <div className="col-lg-5">
              <div className="bg-white rounded-4 shadow p-4 text-center">
                <i className="bi bi-box2-heart display-3 text-success" aria-hidden="true" />
                <h2 className="h4 mt-3">{loans.length} items being lent</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-5">
        <div className="row g-3">
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm"><div className="card-body"><i className="bi bi-plus-circle fs-3 text-success" /><h2 className="h5 mt-3">Add</h2><p className="text-secondary">Record borrowed items with a simple form.</p></div></div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm"><div className="card-body"><i className="bi bi-eye fs-3 text-success" /><h2 className="h5 mt-3">View</h2><p className="text-secondary">Open a loan page for item details.</p></div></div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm"><div className="card-body"><i className="bi bi-trash fs-3 text-success" /><h2 className="h5 mt-3">Delete</h2><p className="text-secondary">Remove items when they come back home.</p></div></div>
          </div>
        </div>
      </section>
    </>
  );
}
