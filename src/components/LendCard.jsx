import { Link } from "react-router-dom";

export default function LendCard({ lend, category, onDelete }) {
  const today = new Date().toISOString().slice(0, 10);

  const isOverdue = lend.date < today;

  return (
    <article className="card h-100 border-0 shadow-sm">
      <div className="card-body d-flex flex-column p-4">
        <div className="d-flex justify-content-between align-items-start mb-3">
          <div className="d-flex align-items-center gap-2">
            <span
              className="d-inline-flex align-items-center justify-content-center rounded-circle border border-success-subtle bg-success-subtle text-success"
              style={{ width: "2rem", height: "2rem" }}
            >
              <i className={`bi ${category?.icon}`} />
            </span>

            <span className="badge border border-success-subtle text-success bg-success-subtle">
              {lend.category}
            </span>
          </div>

          <span
            className={`badge ${
              isOverdue ? "text-bg-danger" : "text-bg-success"
            }`}
          >
            {isOverdue ? "Overdue" : "On Time"}
          </span>
        </div>

        <h2 className="h5 card-title mb-3">{lend.item}</h2>

        <p className="card-text text-secondary mb-2">
          <i className="bi bi-person me-2" aria-hidden="true" />
          Borrowed by <strong>{lend.borrower}</strong>
        </p>

        <p className="card-text text-secondary small mt-auto">
          <i className="bi bi-calendar3 me-2" aria-hidden="true" />
          {lend.date}
        </p>

        <div className="d-flex gap-2 mt-3">
          <Link
            className="btn btn-outline-success btn-sm flex-grow-1"
            to={`/lends/${lend.id}`}
          >
            <i className="bi bi-eye me-1" aria-hidden="true" />
            View
          </Link>

          <Link
            className="btn btn-outline-primary btn-sm flex-grow-1"
            to={`/lends/${lend.id}/edit`}
          >
            <i className="bi bi-pencil-square me-1" aria-hidden="true" />
            Update
          </Link>

          <button
            className="btn btn-outline-danger btn-sm flex-grow-1"
            type="button"
            onClick={() => onDelete(lend.id)}
          >
            <i className="bi bi-trash me-1" aria-hidden="true" />
            Delete
          </button>
        </div>
      </div>
    </article>
  );
}
