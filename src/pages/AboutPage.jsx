import { Link } from "react-router-dom";

function About() {
  return (
    <section className="container py-4 py-lg-5">
      <div className="row justify-content-center">
        <article className="col-lg-8">
          <p className="text-success fw-semibold mb-2">Our story</p>
          <h1 className="display-6 fw-bold mb-3">About MiniLend</h1>
          <p className="lead text-secondary">
            MiniLend helps users keep track of things they lend to friends —
            money, books, or other items.
          </p>
          <p>
            A category is created for each type, then a card is added for each
            loan showing who borrowed it, and when. Cards can be viewed or
            deleted when the item comes back.
          </p>
          <p>
            We believe that borrowing doesn't have to be confusing. With clear
            explanations, plain language, and a few practical tools, anyone can
            make more informed decisions about their money — even if they're
            just starting out.
          </p>

          <aside
            className="alert alert-success mt-4 d-flex align-items-start gap-2"
            role="note"
          >
            <i className="bi bi-tools fs-5" aria-hidden="true" />
            <div>
              <strong>This is a work in progress.</strong> MiniLend is being
              built step by step. New features — like the repayment calculator —
              will be added over time.
            </div>
          </aside>

          <Link className="btn btn-outline-success mt-2" to="/">
            <i className="bi bi-arrow-left me-2" aria-hidden="true" />
            Back to home
          </Link>
        </article>
      </div>
    </section>
  );
}

export default About;
