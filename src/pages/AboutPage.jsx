import PageHeader from "../components/PageHeader.jsx";

export default function AboutPage() {
  return (
    <section className="container py-5">
      <PageHeader title="About MiniLend" text="A small React project built from beginner-friendly ideas." />
      <div className="card border-0 shadow-sm">
        <div className="card-body p-4">
          <h2 className="h5">What this app demonstrates</h2>
          <ul className="mb-0">
            <li>Pages and dynamic routes</li>
            <li>Reusable React components</li>
            <li>State, effects, and context</li>
            <li>Controlled form inputs</li>
            <li>GET, POST, and DELETE API requests</li>
            <li>Bootstrap and responsive layouts</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
