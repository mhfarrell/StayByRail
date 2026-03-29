function SourcesBanner({ sources, sourceCounts }) {
  if (!sources || sources.length === 0) return null;

  return (
    <div className="sources-banner">
      <span className="sources-label">Data sources:</span>
      {sources.map((s) => {
        const count = sourceCounts?.[s.id];
        return (
          <span
            key={s.id}
            className={`source-chip ${s.active ? "source-active" : "source-inactive"}`}
            title={s.description}
          >
            <span className={`source-dot ${s.active ? "dot-on" : "dot-off"}`} />
            {s.name}
            {count != null && <span className="source-count">{count}</span>}
          </span>
        );
      })}
    </div>
  );
}

export default SourcesBanner;
