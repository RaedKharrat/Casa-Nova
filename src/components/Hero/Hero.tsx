import { ChevronDown } from 'lucide-react';
import './Hero.css';

export const Hero = () => {
  const handleScroll = () => {
    // Scroll to the first category offset by navbar
    window.scrollBy({ top: window.innerHeight - 80, behavior: 'smooth' });
  };

  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content animate-fade-in">
        <h1 className="hero-title">Casa Nova</h1>
        <p className="hero-subtitle">Coffee & Beyond</p>
        <button onClick={handleScroll} className="hero-scroll-btn" aria-label="Scroll down">
          <ChevronDown size={32} />
        </button>
      </div>
      {/* Bottom melt — dark bg fills upward, hero image visible through drip gaps */}

    </section>
  );
};
