import { useMemo, useState } from "react";

import { useApp } from "../context/useApp.js";
import PageHeader from "../components/PageHeader.jsx";
import LoanCard from "../components/LoanCard.jsx";
import LoanForm from "../components/LoanForm.jsx";

export default function LoansPage() {
  const { loans, loading, error, addLoan, deleteLoan } = useApp();

  const [search, setSearch] = useState("");

  const filteredLoans = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) return loans;

    return loans.filter(
      (loan) =>
        loan.item.toLowerCase().includes(query) ||
        loan.borrower.toLowerCase().includes(query) ||
        loan.category.toLowerCase().includes(query)
    );
  }, [loans, search]);

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

      {error && <div className="alert alert-danger">{error}</div>}

      <div className="row g-4">
        <div className="col-lg-4">
          <div className="sticky-top" style={{ top: "5rem" }}>
            <LoanForm onAdd={addLoan} />
          </div>
        </div>

        <div className="col-lg-8">
          <div className="input-group mb-4">
            <span className="input-group-text">
              <i className="bi bi-search" />
            </span>

            <input
              type="search"
              className="form-control"
              placeholder="Search by item, borrower, or category..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {loading ? (
            <p>Loading loans...</p>
          ) : (
            <div className="row g-3">
              {filteredLoans.map((loan) => (
                <div key={loan.id} className="col-md-6">
                  <LoanCard loan={loan} onDelete={handleDelete} />
                </div>
              ))}

              {filteredLoans.length === 0 && (
                <div className="col-12">
                  <div className="alert alert-light border">
                    No matching loans found.
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
