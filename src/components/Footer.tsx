'use client';

import { useState, FormEvent } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Simuliere Newsletter-Anmeldung
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h3>Folgt uns</h3>
          <div className="social-links">
            <a href="#" className="social-link"><i className="fab fa-facebook"></i></a>
            <a href="#" className="social-link"><i className="fab fa-instagram"></i></a>
            <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
            <a href="#" className="social-link"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
        <div className="footer-section">
          <h3>Newsletter</h3>
          <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
            <div className="form-group">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder=" "
                required
              />
              <label>E-Mail</label>
            </div>
            <button type="submit">
              {subscribed ? (
                <>
                  <i className="fas fa-check"></i> Abonniert!
                </>
              ) : (
                <>
                  <span>Abonnieren</span>
                  <i className="fas fa-arrow-right"></i>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Dont tell the others. Alle Rechte vorbehalten.</p>
      </div>
    </footer>
  );
}
