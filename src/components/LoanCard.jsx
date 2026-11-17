import { Link } from "react-router-dom";

export default function LoanCard({ loan, onDelete }) {
  return (
    <article className="card h-100 border-0 shadow-sm">
      <div className="card-body">
        <span className="badge text-bg-success-subtle text-success mb-2">{loan.category}</span>
        <h2 className="h5 card-title">{loan.item}</h2>
        <p className="card-text text-secondary mb-1">
          <i className="bi bi-person me-2" aria-hidden="true" />Borrowed by {loan.borrower}
        </p>
        <p className="card-text text-secondary small">
          <i className="bi bi-calendar3 me-2" aria-hidden="true" />{loan.date}
        </p>
        <div className="d-flex gap-2 mt-3">
          <Link className="btn btn-outline-success btn-sm" to={`/loans/${loan.id}`}>
            View
          </Link>
          <button className="btn btn-outline-danger btn-sm" type="button" onClick={() => onDelete(loan.id)}>
            <i className="bi bi-trash me-1" aria-hidden="true" />Delete
          </button>
        </div>
      </div>
    </article>
  );
}
