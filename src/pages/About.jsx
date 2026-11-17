import { Link } from "react-router-dom";

function About() {
  return (
    <section className="row justify-content-center py-4">
      <article className="col-lg-8">
        <h1 className="mb-3">About MiniLend</h1>
        <p className="lead text-secondary">
          MiniLend is a small student project about making lending information
          easier to understand.
        </p>
        <p>
          The idea is to build a simple website where people can learn about
          borrowing and, later on, use a basic repayment calculator. For now,
          this is an early version and some parts are not ready yet.
        </p>
        <aside className="alert alert-success mt-4" role="note">
          Routing established.
        </aside>
        <Link className="btn btn-outline-success mt-2" to="/">
          Back to home
        </Link>
      </article>
    </section>
  );
}

export default About;
