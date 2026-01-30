'use client';

import { useState, FormEvent } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simuliere Form-Submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    setSubmitStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);

    setTimeout(() => setSubmitStatus('idle'), 3000);
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Kontakt</h2>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Kontaktiere uns</h3>
          <p>Hast du Fragen? Schreib uns eine Nachricht!</p>
          <div className="contact-details">
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <p>booking@dontelltheothers.de</p>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <p>+49 (0) 123 456789</p>
            </div>
            <div className="contact-item">
              <i className="fas fa-building"></i>
              <p>Management:<br />Rock Agency GmbH</p>
            </div>
          </div>
          <div className="social-links-contact">
            <a href="#" className="social-link"><i className="fab fa-facebook"></i></a>
            <a href="#" className="social-link"><i className="fab fa-instagram"></i></a>
            <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
            <a href="#" className="social-link"><i className="fab fa-youtube"></i></a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder=" "
              required
            />
            <label htmlFor="name">Name</label>
          </div>
          <div className="form-group">
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder=" "
              required
            />
            <label htmlFor="email">E-Mail</label>
          </div>
          <div className="form-group">
            <select
              id="subject"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              required
            >
              <option value="" disabled>Wähle einen Betreff</option>
              <option value="booking">Booking Anfrage</option>
              <option value="press">Presseanfrage</option>
              <option value="other">Sonstiges</option>
            </select>
          </div>
          <div className="form-group">
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder=" "
              required
              rows={5}
            />
            <label htmlFor="message">Nachricht</label>
          </div>
          <button type="submit" className="submit-button" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <i className="fas fa-spinner fa-spin"></i>
              </>
            ) : submitStatus === 'success' ? (
              <>
                <i className="fas fa-check"></i> Gesendet!
              </>
            ) : (
              <>
                <span>Nachricht senden</span>
                <i className="fas fa-paper-plane"></i>
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
