export default function PageHeader({ title, text }) {
  return (
    <header className="mb-4 pb-3 border-bottom">
      <h1 className="fw-bold mb-2">
        <i className="bi bi-box-seam text-success me-2" aria-hidden="true" />{title}
      </h1>
      {text && <p className="text-secondary mb-0">{text}</p>}
    </header>
  );
}
