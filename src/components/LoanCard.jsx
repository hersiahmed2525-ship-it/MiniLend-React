import { Link } from "react-router-dom";

export default function LoanCard({ loan, onDelete }) {
  return (
    <article className="card h-100 border-0 shadow-sm">
      <div className="card-body d-flex flex-column p-4">
        <span className="badge text-bg-success-subtle text-success align-self-start mb-3">
          {loan.category}
        </span>
        <h2 className="h5 card-title mb-3">{loan.item}</h2>
        <p className="card-text text-secondary mb-2">
          <i className="bi bi-person me-2" aria-hidden="true" />Borrowed by <strong>{loan.borrower}</strong>
        </p>
        <p className="card-text text-secondary small mt-auto">
          <i className="bi bi-calendar3 me-2" aria-hidden="true" />{loan.date}
        </p>
        <div className="d-flex gap-2 mt-3">
          <Link className="btn btn-outline-success btn-sm flex-grow-1" to={`/loans/${loan.id}`}>
            <i className="bi bi-eye me-1" aria-hidden="true" />View
          </Link>
          <button className="btn btn-outline-danger btn-sm flex-grow-1" type="button" onClick={() => onDelete(loan.id)}>
            <i className="bi bi-trash me-1" aria-hidden="true" />Delete
          </button>
        </div>
      </div>
    </article>
  );
}
