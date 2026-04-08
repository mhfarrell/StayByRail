import { useEffect } from "react";

function PageMeta({ title, description, schema, canonical, noindex = false }) {
  useEffect(() => {
    document.title = title;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", description);

    // Canonical URL — every indexed page should self-canonicalise.
    const CANON_ID = "page-canonical";
    let canonEl = document.getElementById(CANON_ID);
    const canonHref =
      canonical || `https://staybyrail.co.uk${window.location.pathname}`;
    if (!canonEl) {
      canonEl = document.createElement("link");
      canonEl.id = CANON_ID;
      canonEl.setAttribute("rel", "canonical");
      document.head.appendChild(canonEl);
    }
    canonEl.setAttribute("href", canonHref);

    // Robots: default is indexable; noindex opts the page out.
    const ROBOTS_ID = "page-robots";
    let robotsEl = document.getElementById(ROBOTS_ID);
    if (noindex) {
      if (!robotsEl) {
        robotsEl = document.createElement("meta");
        robotsEl.id = ROBOTS_ID;
        robotsEl.setAttribute("name", "robots");
        document.head.appendChild(robotsEl);
      }
      robotsEl.setAttribute("content", "noindex, follow");
    } else if (robotsEl) {
      robotsEl.remove();
    }

    const SCHEMA_ID = "page-jsonld";
    let scriptEl = document.getElementById(SCHEMA_ID);
    if (schema) {
      if (!scriptEl) {
        scriptEl = document.createElement("script");
        scriptEl.id = SCHEMA_ID;
        scriptEl.type = "application/ld+json";
        document.head.appendChild(scriptEl);
      }
      scriptEl.textContent = JSON.stringify(schema);
    } else if (scriptEl) {
      scriptEl.remove();
    }

    return () => {
      document.getElementById(SCHEMA_ID)?.remove();
    };
  }, [title, description, schema, canonical, noindex]);

  return null;
}

export default PageMeta;
