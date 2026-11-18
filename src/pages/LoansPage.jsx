import { useApp } from "../context/useApp.js";
import PageHeader from "../components/PageHeader.jsx";
import LoanCard from "../components/LoanCard.jsx";
import LoanForm from "../components/LoanForm.jsx";

export default function LoansPage() {
  const { loans, loading, error, addLoan, deleteLoan } = useApp();

  async function handleDelete(id) {
    try {
      await deleteLoan(id);
    } catch (problem) {
      alert(problem.message);
    }
  }

  return (
    <section className="container py-5">
      <PageHeader
        title="Borrowed items"
        text="Add an item or remove it when it is returned."
      />

      {loading && <p>Loading loans...</p>}
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="row g-4 mb-4">
        <div className="col-lg-4">
          <LoanForm onAdd={addLoan} />
        </div>
        <div className="col-lg-8">
          <div className="row g-3">
            {loans.map((loan) => (
              <div className="col-md-6" key={loan.id}>
                <LoanCard loan={loan} onDelete={handleDelete} />
              </div>
            ))}
            {!loading && loans.length === 0 && (
              <div className="col-12">
                <p className="text-secondary">
                  No loans yet. Add the first one!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
