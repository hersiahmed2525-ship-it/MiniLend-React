import { Link, useParams } from "react-router-dom";
import { useApp } from "../context/useApp.js";

export default function LoanDetailsPage() {
  const { id } = useParams();
  const { loans, loading } = useApp();

  // Match the route parameter to a loan, converting IDs to strings because URL params are strings.
  const loan = loans.find((item) => String(item.id) === id);

  if (loading) return <div className="container py-5">Loading...</div>;

  if (!loan) {
    return (
      <div className="container py-5">
        <h1>Loan not found</h1>
        <Link className="btn btn-success" to="/loans">
          Back to loans
        </Link>
      </div>
    );
  }

  return (
    <section className="container py-5">
      <Link className="text-success text-decoration-none" to="/loans">
        <i className="bi bi-arrow-left me-1" aria-hidden="true" />
        Back to loans
      </Link>
      <div className="card border-0 shadow-sm mt-3">
        <div className="card-body p-4">
          <span className="badge text-bg-success-subtle text-success">
            {loan.category}
          </span>
          <h1 className="h2 mt-3">{loan.item}</h1>
          <p className="mb-2">
            <strong>Borrower:</strong> {loan.borrower}
          </p>
          <p className="mb-0">
            <strong>Borrowed on:</strong> {loan.date}
          </p>
        </div>
      </div>
    </section>
  );
}
