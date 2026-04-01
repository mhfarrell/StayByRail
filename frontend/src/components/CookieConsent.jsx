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
    <div className="cookie-overlay">
      <div className="cookie-banner">
        <div className="cookie-icon">&#x1F36A;</div>
        <div className="cookie-body">
          <p className="cookie-heading">This site uses cookies</p>
          <p className="cookie-text">
            We use cookies for advertising via Google AdSense and to improve your
            experience. By continuing to browse you accept our use of cookies.
            Read our{" "}
            <Link to="/privacy" className="cookie-link">
              Privacy Policy
            </Link>{" "}
            for full details.
          </p>
        </div>
        <div className="cookie-actions">
          <button className="cookie-accept" onClick={accept}>
            Accept cookies
          </button>
        </div>
      </div>
    </div>
  );
}

export default CookieConsent;
