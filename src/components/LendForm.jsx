import { useState } from "react";

const emptyLend = {
  item: "",
  borrower: "",
  category: "Friends",
  date: new Date().toISOString().slice(0, 10),
};

export default function LendForm({ onAdd }) {
  const [form, setForm] = useState(emptyLend);
  const [message, setMessage] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setMessage("");

    try {
      await onAdd(form);
      setForm({ ...emptyLend, date: new Date().toISOString().slice(0, 10) });
      setMessage("Lent item added!");
    } catch (problem) {
      setMessage(problem.message);
    }
  }

  return (
    <div className="card border-0 shadow-sm">
      <div className="card-body p-4">
        <h2 className="h5 mb-3">
          <i className="bi bi-plus-circle text-success me-2" />
          Add a lent item
        </h2>
        {message && (
          <div
            className="alert alert-success border-success-subtle py-2 small"
            role="status"
          >
            <i className="bi bi-check-circle me-2" aria-hidden="true" />
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label" htmlFor="item">
              Item name
            </label>
            <input
              className="form-control"
              id="item"
              name="item"
              value={form.item}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="borrower">
              Borrower
            </label>
            <input
              className="form-control"
              id="borrower"
              name="borrower"
              value={form.borrower}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="category">
              Category
            </label>
            <select
              className="form-select"
              id="category"
              name="category"
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

          <div className="mb-3">
            <label className="form-label" htmlFor="date">
              Date
            </label>
            <input
              className="form-control"
              type="date"
              id="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              required
            />
          </div>

          <button className="btn btn-success w-100" type="submit">
            <i className="bi bi-check-lg me-1" />
            Save lent item
          </button>
        </form>
      </div>
    </div>
  );
}
