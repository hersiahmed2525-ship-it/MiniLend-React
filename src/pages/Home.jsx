import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="row align-items-center g-4 py-4">
      <header className="col-md-7">
        <p className="text-success fw-semibold mb-2">A small lending project</p>
        <h1 className="display-5 fw-bold">A little help for your next step.</h1>
        <p className="lead text-secondary mt-3">
          MiniLend is a simple place to learn about borrowing and keep track of
          the things you may want to plan for.
        </p>
        <Link className="btn btn-success mt-2" to="/about">
          About this project
        </Link>
      </header>
      {/**  Right side card */}
      <aside className="col-md-5">
        <article className="card shadow-sm">
          <section className="card-body p-4">
            <h2 className="h5 card-title">[Coming Soon]</h2>
            <p className="card-text text-secondary">
              I&apos;m still working on this part.
            </p>
            <span className="badge text-bg-light border">Coming soon</span>
          </section>
        </article>
      </aside>
    </section>
  );
}

export default Home;
