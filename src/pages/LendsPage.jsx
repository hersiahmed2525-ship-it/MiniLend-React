import { useApp } from "../context/useApp.js";
import PageHeader from "../components/PageHeader.jsx";
import LendCard from "../components/LendCard.jsx";
import LendForm from "../components/LendForm.jsx";

export default function LendsPage() {
  const {
    lends,
    categories,
    loading,
    error,
    refetch,
    search,
    addLend,
    deleteLend,
  } = useApp();

  const query = search.trim().toLowerCase();

  const visibleLends = query
    ? lends.filter((lend) =>
        [lend.item, lend.borrower, lend.category]
          .filter(Boolean)
          .some((value) => String(value).toLowerCase().includes(query))
      )
    : lends;

  const handleDelete = async (id) => {
    try {
      await deleteLend(id);
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
        <div
          className="d-flex align-items-center gap-2 text-secondary mb-4"
          role="status"
        >
          <span
            className="spinner-border spinner-border-sm text-success"
            aria-hidden="true"
          />
          <span>Loading lent items...</span>
        </div>
      )}

      {error && (
        <div className="alert alert-danger d-flex justify-content-between align-items-center gap-3">
          <span>{error}</span>

          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={refetch}
          >
            Refresh
          </button>
        </div>
      )}

      <div className="row g-4">
        <div className="col-lg-4">
          <div className="sticky-lg-top pt-lg-5 z-1">
            <div className="pt-lg-3">
              <LendForm onAdd={addLend} />
            </div>
          </div>
        </div>

        <div className="col-lg-8">
          <div className="row g-3">
            {visibleLends.map((lend) => {
              const category = categories.find(
                (category) => category.name === lend.category
              );

              return (
                <div key={lend.id} className="col-md-6">
                  <LendCard
                    lend={lend}
                    category={category}
                    onDelete={handleDelete}
                  />
                </div>
              );
            })}

            {!loading && visibleLends.length === 0 && (
              <div className="col-12">
                <div className="card border-0 shadow-sm text-center">
                  <div className="card-body py-5 px-3">
                    <i
                      className="bi bi-search fs-1 text-success"
                      aria-hidden="true"
                    />

                    <h2 className="h5 mt-3">
                      {query ? "No matching lent items" : "No lent items yet"}
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
