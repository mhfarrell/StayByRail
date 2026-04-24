import { Link } from "react-router-dom";

const POPULAR_GUIDES = [
  { slug: "tokyo", label: "Tokyo" },
  { slug: "london", label: "London" },
  { slug: "paris", label: "Paris" },
  { slug: "barcelona", label: "Barcelona" },
  { slug: "bangkok", label: "Bangkok" },
  { slug: "kyoto", label: "Kyoto" },
  { slug: "beijing", label: "Beijing" },
  { slug: "shanghai", label: "Shanghai" },
  { slug: "hong_kong", label: "Hong Kong" },
  { slug: "seoul", label: "Seoul" },
  { slug: "new_york", label: "New York" },
];

const COL_HEADING =
  "text-xs font-semibold uppercase tracking-wider text-[var(--color-ink-subtle)] mb-3";
const NAV_LINK =
  "text-sm text-[var(--color-ink-muted)] no-underline py-1 transition-colors hover:text-[var(--color-primary)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)] rounded";

function Footer() {
  return (
    <footer className="mt-16 bg-[var(--color-surface)] border-t border-[var(--color-hairline)]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav
          aria-label="Footer navigation"
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 pb-8 border-b border-[var(--color-hairline)]"
        >
          <div>
            <span className={COL_HEADING}>Popular guides</span>
            <ul className="flex flex-col gap-1.5 list-none p-0 m-0">
              {POPULAR_GUIDES.map((g) => (
                <li key={g.slug}>
                  <Link to={`/guides/${g.slug}`} className={NAV_LINK}>
                    {g.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className={COL_HEADING}>StayByRail</span>
            <ul className="flex flex-col gap-1.5 list-none p-0 m-0">
              <li><Link to="/about" className={NAV_LINK}>About</Link></li>
              <li><Link to="/authors/matt-farrell" className={NAV_LINK}>Editor</Link></li>
              <li><Link to="/how-it-works" className={NAV_LINK}>How it works</Link></li>
              <li><Link to="/coverage" className={NAV_LINK}>Coverage</Link></li>
              <li><Link to="/contact" className={NAV_LINK}>Contact</Link></li>
            </ul>
          </div>
          <div>
            <span className={COL_HEADING}>Resources</span>
            <ul className="flex flex-col gap-1.5 list-none p-0 m-0">
              <li><Link to="/guides" className={NAV_LINK}>All city guides</Link></li>
              <li><Link to="/journal" className={NAV_LINK}>Journal</Link></li>
              <li><Link to="/itineraries" className={NAV_LINK}>Itineraries</Link></li>
              <li><Link to="/passes" className={NAV_LINK}>Transport passes</Link></li>
              <li><Link to="/countries" className={NAV_LINK}>Country guides</Link></li>
              <li><Link to="/travel-guide" className={NAV_LINK}>Best times to travel</Link></li>
              <li><Link to="/train-times" className={NAV_LINK}>Train times</Link></li>
              <li><Link to="/faq" className={NAV_LINK}>FAQ</Link></li>
            </ul>
          </div>
          <div>
            <span className={COL_HEADING}>Connect</span>
            <ul className="flex flex-col gap-1.5 list-none p-0 m-0">
              <li>
                <a
                  className="inline-flex items-center gap-2 text-sm text-[var(--color-ink-muted)] no-underline py-1 hover:text-[var(--color-primary)]"
                  href="https://www.linkedin.com/in/matt-h-farrell/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  className="inline-flex items-center gap-2 text-sm text-[var(--color-ink-muted)] no-underline py-1 hover:text-[var(--color-primary)]"
                  href="https://github.com/mhfarrell"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="pt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-xs text-[var(--color-ink-subtle)]">
            &copy; 2026 StayByRail. Built by Matt Farrell.
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs">
            <Link to="/privacy" className="text-[var(--color-ink-muted)] no-underline hover:text-[var(--color-primary)]">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-[var(--color-ink-muted)] no-underline hover:text-[var(--color-primary)]">
              Terms of Service
            </Link>
            <Link to="/contact" className="text-[var(--color-ink-muted)] no-underline hover:text-[var(--color-primary)]">
              Contact
            </Link>
          </div>
        </div>

        <p className="mt-6 text-[0.7rem] leading-relaxed text-[var(--color-ink-subtle)] max-w-3xl">
          StayByRail may earn a small commission when you book a hotel through our
          outbound links, at no extra cost to you. Commission does not influence
          how results are ranked or displayed. See our{" "}
          <Link to="/privacy" className="underline hover:text-[var(--color-primary)]">Privacy Policy</Link>{" "}
          for the full breakdown.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
