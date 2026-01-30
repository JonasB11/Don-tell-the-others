'use client';

interface HeroProps {
  onNavigate: (section: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="glitch" data-text="Dont tell the others">
          Dont tell the others
        </h1>
        <p className="fade-in">Jetzt live erleben</p>
        <a onClick={() => onNavigate('tour')} className="cta-button">
          <span>Tickets sichern</span>
          <i className="fas fa-ticket-alt"></i>
        </a>
      </div>
      <div className="scroll-indicator">
        <div className="mouse"></div>
        <p>Nach unten scrollen</p>
      </div>
    </section>
  );
}
