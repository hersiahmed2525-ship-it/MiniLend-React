import { Link, useParams } from "react-router-dom";
import { useApp } from "../context/useApp.js";

export default function LendDetailsPage() {
  const { id } = useParams();
  const { lends, loading } = useApp();

  // Match the route parameter to a lend, converting IDs to strings because URL params are strings.
  function findLendById(lends, id) {
    if (!Array.isArray(lends)) return undefined; // Prevent runtime errors
    return lends.find((item) => String(item?.id) === String(id));
  }
  const lend = findLendById(lends, id);

  if (loading) {
    return (
      <div
        className="container py-5 d-flex align-items-center justify-content-center gap-2 text-secondary"
        role="status"
      >
        <span className="spinner-border text-success" aria-hidden="true" />
        <span>Loading lent item...</span>
      </div>
    );
  }

  if (!lend) {
    return (
      <div className="container py-5">
        <div className="card border-0 shadow-sm text-center">
          <div className="card-body py-5">
            <i
              className="bi bi-journal-x display-4 text-secondary"
              aria-hidden="true"
            />
            <h1 className="h3 mt-3">Lent item not found</h1>
            <Link className="btn btn-success mt-2" to="/lends">
              <i className="bi bi-arrow-left me-2" aria-hidden="true" />
              Back to lent items
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="container py-5">
      <Link className="text-success text-decoration-none" to="/lends">
        <i className="bi bi-arrow-left me-1" aria-hidden="true" />
        Back to lent items
      </Link>
      <div className="card border-0 shadow-sm mt-3">
        <div className="card-body p-4 p-md-5">
          <span className="badge text-bg-success-subtle text-success">
            {lend.category}
          </span>
          <h1 className="h2 mt-3 mb-4">{lend.item}</h1>
          <dl className="row mb-0">
            <dt className="col-sm-3 text-secondary">
              <i className="bi bi-person me-2" aria-hidden="true" />
              Borrower
            </dt>
            <dd className="col-sm-9 fw-semibold">{lend.borrower}</dd>
            <dt className="col-sm-3 text-secondary mb-0">
              <i className="bi bi-calendar3 me-2" aria-hidden="true" />
              Borrowed on
            </dt>
            <dd className="col-sm-9 mb-0 fw-semibold">{lend.date}</dd>
          </dl>
        </div>
      </div>
    </section>
  );
}
