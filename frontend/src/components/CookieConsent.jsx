import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("staybyrail_cookie_consent")) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("staybyrail_cookie_consent", "accepted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner">
      <p className="cookie-text">
        This site uses cookies for advertising via Google AdSense.
        See our <Link to="/privacy" className="cookie-link">Privacy Policy</Link> for
        details.
      </p>
      <button className="cookie-accept" onClick={accept}>
        Accept
      </button>
    </div>
  );
}

export default CookieConsent;
