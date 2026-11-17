export default function PageHeader({ title, text }) {
  return (
    <header className="mb-4">
      <h1 className="fw-bold">{title}</h1>
      {text && <p className="text-secondary mb-0">{text}</p>}
    </header>
  );
}
