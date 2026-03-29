import { useEffect, useRef } from "react";

function AdUnit({ format = "auto", slot, style }) {
  const adRef = useRef(null);
  const pushed = useRef(false);

  useEffect(() => {
    if (pushed.current) return;
    try {
      if (window.adsbygoogle && adRef.current) {
        window.adsbygoogle.push({});
        pushed.current = true;
      }
    } catch {
      // AdSense not loaded (dev/localhost) — ignore
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      ref={adRef}
      style={{ display: "block", ...style }}
      data-ad-client="ca-pub-5959061200329505"
      data-ad-slot={slot || ""}
      data-ad-format={format}
      data-full-width-responsive="true"
    />
  );
}

export default AdUnit;
