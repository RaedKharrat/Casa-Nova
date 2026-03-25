import { Coffee, Mail, Phone } from 'lucide-react';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <Coffee size={32} className="footer-icon" />
          <h2 className="footer-title">Casa Nova</h2>
          <p className="footer-subtitle">Premium Coffee Experience</p>
        </div>

        <div className="footer-social">
          <a href="#" className="social-link" aria-label="Mail"><Mail size={24} /></a>
          <a href="#" className="social-link" aria-label="Phone"><Phone size={24} /></a>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Casa Nova. All rights reserved.</p>
          <p className="footer-made-by">Made with elegance</p>
        </div>
      </div>
    </footer>
  );
};
