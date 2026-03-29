import { useEffect, useRef } from "react";

const AD_CLIENT = import.meta.env.VITE_ADSENSE_CLIENT || "";

// Load the AdSense script once
let adsenseLoaded = false;
function loadAdsense() {
  if (adsenseLoaded || !AD_CLIENT) return;
  // Check if script already exists in the document (e.g. from index.html)
  const existing = document.querySelector(`script[src*="adsbygoogle.js"]`);
  if (existing) { adsenseLoaded = true; return; }
  adsenseLoaded = true;
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${AD_CLIENT}`;
  script.crossOrigin = "anonymous";
  document.head.appendChild(script);
}

function AdUnit({ format = "auto", slot, style }) {
  const adRef = useRef(null);
  const pushed = useRef(false);

  useEffect(() => {
    if (!AD_CLIENT) return;
    loadAdsense();

    // Wait for script to load then push
    const timer = setTimeout(() => {
      if (pushed.current) return;
      try {
        if (window.adsbygoogle && adRef.current) {
          window.adsbygoogle.push({});
          pushed.current = true;
        }
      } catch {
        // ignore
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!AD_CLIENT) return null;

  return (
    <ins
      className="adsbygoogle"
      ref={adRef}
      style={{ display: "block", ...style }}
      data-ad-client={AD_CLIENT}
      data-ad-slot={slot || ""}
      data-ad-format={format}
      data-full-width-responsive="true"
    />
  );
}

export default AdUnit;
