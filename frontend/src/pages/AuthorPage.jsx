import { Link, Navigate, useParams } from "react-router-dom";
import PageMeta from "../components/PageMeta";
import { cityGuides } from "../data/cityGuides";

// Single-author site for now. If contributors are added later, move to a
// data file. Keys are route slugs (/authors/:slug).
const AUTHORS = {
  "matt-farrell": {
    name: "Matt Farrell",
    role: "Founder & Editor, StayByRail",
    location: "United Kingdom",
    bio: [
      "Matt Farrell is a UK-based software developer and the founder of StayByRail. He built the site after years of losing time on trips manually cross-referencing map apps with booking sites to find hotels close to the specific train or metro station he was using that day.",
      "Matt writes the city guides on StayByRail himself, drawing on first-hand travel through Japan, the UK, France, Germany, Spain, and Thailand. The editorial focus is on the decisions that actually matter when you're booking a hotel by rail: which line the station is on, how far it is from the platform to your door, which neighbourhoods suit which kinds of trips, and where the lesser-known stations punch above their weight.",
      "When he's not writing guides or shipping code, Matt rides trains.",
    ],
    links: {
      github: "https://github.com/mhfarrell",
      linkedin: "https://www.linkedin.com/in/matt-h-farrell/",
      email: "hello@staybyrail.co.uk",
    },
  },
};

function AuthorPage() {
  const { slug } = useParams();
  const author = AUTHORS[slug];

  if (!author) return <Navigate to="/about" replace />;

  const canonical = `https://staybyrail.co.uk/authors/${slug}`;
  const authored = cityGuides.filter((g) => g.author === author.name);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": author.name,
    "description": author.bio[0],
    "jobTitle": author.role,
    "url": canonical,
    "sameAs": [
      author.links.github,
      author.links.linkedin,
    ].filter(Boolean),
    "worksFor": {
      "@type": "Organization",
      "name": "StayByRail",
      "url": "https://staybyrail.co.uk",
    },
  };

  return (
    <div className="page-content">
      <PageMeta
        title={`${author.name} — ${author.role} | StayByRail`}
        description={`${author.name} writes the city rail and hotel guides on StayByRail. Based in ${author.location}. ${author.bio[0].slice(0, 120)}...`}
        canonical={canonical}
        schema={schema}
      />

      <p className="guide-breadcrumb" style={{ textAlign: "center" }}>
        <Link to="/" className="about-link">Home</Link>
        {" \u203A "}
        <Link to="/about" className="about-link">About</Link>
        {" \u203A "}
        {author.name}
      </p>

      <h1 className="page-heading" style={{ textAlign: "center" }}>
        {author.name}
      </h1>
      <p className="guide-hero-line" style={{ textAlign: "center" }}>
        {author.role}
      </p>
      <p
        className="page-intro"
        style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}
      >
        Based in {author.location}.
      </p>

      <div className="about-sections">
        {author.bio.map((para, i) => (
          <p className="about-block-text" key={i} style={{ maxWidth: 720, margin: "0 auto 1rem" }}>
            {para}
          </p>
        ))}
      </div>

      <div className="guide-stations-block">
        <h2 className="guide-stations-heading">Find {author.name} online</h2>
        <div className="guide-resources-grid">
          {author.links.github && (
            <a
              href={author.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="guide-resource-card"
            >
              <span className="guide-resource-label">GitHub</span>
              <span className="guide-resource-desc">
                Open-source work, including the StayByRail repo itself.
              </span>
            </a>
          )}
          {author.links.linkedin && (
            <a
              href={author.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="guide-resource-card"
            >
              <span className="guide-resource-label">LinkedIn</span>
              <span className="guide-resource-desc">
                Professional background and work history.
              </span>
            </a>
          )}
          {author.links.email && (
            <a
              href={`mailto:${author.links.email}`}
              className="guide-resource-card"
            >
              <span className="guide-resource-label">Email</span>
              <span className="guide-resource-desc">{author.links.email}</span>
            </a>
          )}
        </div>
      </div>

      {authored.length > 0 && (
        <div className="guide-related">
          <h2 className="guide-section-heading">
            Guides by {author.name}
          </h2>
          <div className="guide-related-grid">
            {authored.map((g) => (
              <Link
                key={g.slug}
                to={`/guides/${g.slug}`}
                className="guide-related-card"
              >
                <span className="guide-related-city">{g.city}</span>
                <span className="guide-related-line">{g.heroLine}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default AuthorPage;
