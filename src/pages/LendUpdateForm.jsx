import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useApp } from "../context/useApp.js";

export default function LendUpdateForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { lends, updateLend, loading } = useApp();

  const lend = lends.find((lend) => String(lend.id) === String(id));

  const [form, setForm] = useState({
    item: "",
    borrower: "",
    category: "Friends",
    date: "",
  });

  const [message, setMessage] = useState("");

  useEffect(() => {
    if (lend) {
      setForm({
        item: lend.item,
        borrower: lend.borrower,
        category: lend.category,
        date: lend.date,
      });
    }
  }, [lend]);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setMessage("");

    try {
      await updateLend(id, form);

      setMessage("Lent item updated!");

      navigate("/lends");
    } catch (problem) {
      setMessage(problem.message);
    }
  }

  if (loading) {
    return (
      <div className="container py-5 text-center">
        <div className="spinner-border text-success" role="status" />
      </div>
    );
  }

  if (!lend) {
    return (
      <div className="container py-5">
        <div className="alert alert-danger">Lent item not found.</div>

        <Link className="btn btn-success" to="/lends">
          Back to lends
        </Link>
      </div>
    );
  }

  return (
    <section className="container py-5">
      <Link className="text-success text-decoration-none" to="/lends">
        <i className="bi bi-arrow-left me-1" />
        Back to lends
      </Link>

      <div className="card border-0 shadow-sm mt-3">
        <div className="card-body p-4">
          <h1 className="h4 mb-4">
            <i className="bi bi-pencil-square text-primary me-2" />
            Update Lent Item
          </h1>

          {message && <div className="alert alert-success">{message}</div>}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="item" className="form-label">
                Item
              </label>

              <input
                id="item"
                name="item"
                className="form-control"
                value={form.item}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="borrower" className="form-label">
                Borrower
              </label>

              <input
                id="borrower"
                name="borrower"
                className="form-control"
                value={form.borrower}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="category" className="form-label">
                Category
              </label>

              <select
                id="category"
                name="category"
                className="form-select"
                value={form.category}
                onChange={handleChange}
              >
                <option>Friends</option>
                <option>Family</option>
                <option>Work</option>
                <option>Neighbors</option>
                <option>Community</option>
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="date" className="form-label">
                Date
              </label>

              <input
                type="date"
                id="date"
                name="date"
                className="form-control"
                value={form.date}
                onChange={handleChange}
                required
              />
            </div>

            <div className="d-flex gap-2">
              <button type="submit" className="btn btn-primary">
                <i className="bi bi-check-lg me-1" />
                Update Item
              </button>

              <Link className="btn btn-outline-secondary" to="/lends">
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
