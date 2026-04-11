import { Mail, Phone } from 'lucide-react';
import casanovaLogo from '../../assets/casanova.png';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      {/* Melting top divider - Organic Liquid rising UP into section above */}
      <div className="footer-melt">
        <svg viewBox="0 0 1440 200" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="#2c1e14" d="M0,200 L1440,200 L1440,100 C1250,0 1050,220 850,100 C650,-20 450,220 250,100 C100,40 0,120 0,100 Z"></path>
        </svg>
      </div>

      <div className="footer-content-wrapper">
        <div className="footer-container">
          <div className="footer-brand">
            <img src={casanovaLogo} alt="Casa Nova" className="footer-logo-img" />
            <p className="footer-tagline">Premium Coffee Experience</p>
          </div>

          <div className="footer-contact">
            <div className="footer-info-item">
              <span className="info-label">Visit Us</span>
              <span className="info-value">Tunis, Tunisia</span>
            </div>
            <div className="footer-info-item">
              <span className="info-label">Hours</span>
              <span className="info-value">Mon – Sun: 8AM – 11PM</span>
            </div>
          </div>

          <div className="footer-contact">
            <div className="footer-info-item">
              <span className="info-label">Say Hello</span>
              <span className="info-value">hello@casanova.tn</span>
            </div>
            <div className="footer-social">
              <a href="#" className="social-link" aria-label="Mail"><Mail size={18} /></a>
              <a href="#" className="social-link" aria-label="Phone"><Phone size={18} /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <p className="footer-copyright">© 2026 Casa Nova. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
