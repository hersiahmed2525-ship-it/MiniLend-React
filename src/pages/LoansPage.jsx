import { useApp } from "../context/useApp.js";
import PageHeader from "../components/PageHeader.jsx";
import LoanCard from "../components/LoanCard.jsx";
import LoanForm from "../components/LoanForm.jsx";

export default function LoansPage() {
  const { loans, loading, error, search, addLoan, deleteLoan } = useApp();
  const query = search.trim().toLowerCase();
  const visibleLoans = query
    ? loans.filter((loan) =>
        [loan.item, loan.borrower, loan.category]
          .filter(Boolean)
          .some((value) => String(value).toLowerCase().includes(query))
      )
    : loans;
  const handleDelete = async (id) => {
    try {
      await deleteLoan(id);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <section className="container py-5">
      <PageHeader
        title="Borrowed Items"
        text="Add an item or remove it when it is returned."
      />

      {loading && (
        <div className="d-flex align-items-center gap-2 text-secondary mb-4" role="status">
          <span className="spinner-border spinner-border-sm text-success" aria-hidden="true" />
          <span>Loading loans...</span>
        </div>
      )}

      {error && <div className="alert alert-danger">{error}</div>}

      <div className="row g-4">
        <div className="col-lg-4">
          <div className="sticky-lg-top pt-lg-5">
            <div className="pt-lg-3">
              <LoanForm onAdd={addLoan} />
            </div>
          </div>
        </div>

        <div className="col-lg-8">
          <div className="row g-3">
            {visibleLoans.map((loan) => (
              <div key={loan.id} className="col-md-6">
                <LoanCard loan={loan} onDelete={handleDelete} />
              </div>
            ))}

            {!loading && visibleLoans.length === 0 && (
              <div className="col-12">
                <div className="card border-0 shadow-sm text-center">
                  <div className="card-body py-5 px-3">
                    <i className="bi bi-search fs-1 text-success" aria-hidden="true" />
                    <h2 className="h5 mt-3">
                      {query ? "No matching loans" : "No loans yet"}
                    </h2>
                    <p className="text-secondary mb-0">
                      {query
                        ? "Try another item, borrower, or category."
                        : "Add the first item with the form."}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
