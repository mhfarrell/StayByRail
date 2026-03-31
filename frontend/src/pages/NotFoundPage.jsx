import { Link } from "react-router-dom";
import PageMeta from "../components/PageMeta";

function NotFoundPage() {
  return (
    <div className="page-content" style={{ textAlign: "center", padding: "4rem 1rem" }}>
      <PageMeta title="Page Not Found — StayByRail" description="The page you're looking for doesn't exist." />
      <h2 className="page-heading" style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>404</h2>
      <p className="page-intro" style={{ marginBottom: "2rem" }}>
        This page doesn't exist. Maybe the train left without it.
      </p>
      <Link to="/" className="hero-cta">Back to Home</Link>
    </div>
  );
}

export default NotFoundPage;
