import { useEffect } from "react";

function PageMeta({ title, description, schema }) {
  useEffect(() => {
    document.title = title;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", description);

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
  }, [title, description, schema]);

  return null;
}

export default PageMeta;
