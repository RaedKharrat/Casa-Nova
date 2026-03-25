import { Coffee, Mail, Phone, MapPin, Clock } from 'lucide-react';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer" style={{ marginTop: '15px' }}>
      {/* Realistic Melting / Drip SVG */}
      <div className="footer-melt">
        <svg viewBox="0 0 1440 150" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          {/* Base wavy top edge */}
          <path
            d="M0,0 H1440 V30 
               Q1400,28 1380,45 Q1360,70 1340,42 Q1320,20 1280,35 
               Q1240,55 1220,80 Q1200,110 1180,85 Q1160,55 1140,40 
               Q1100,25 1060,50 Q1030,72 1010,95 Q990,125 960,90 
               Q940,65 900,45 Q870,30 840,55 Q810,85 790,110 
               Q770,140 740,100 Q720,70 690,50 Q660,35 620,60 
               Q590,80 570,55 Q550,35 510,48 Q480,60 460,90 
               Q440,130 410,95 Q390,60 360,45 Q330,30 300,55 
               Q270,80 250,60 Q230,40 200,65 Q170,95 150,120 
               Q130,145 100,100 Q80,60 50,40 Q25,25 0,35 Z"
            fill="#060504"
          />
          {/* Extra drip highlights for depth */}
          <path
            d="M0,0 H1440 V35 
               Q1400,33 1380,50 Q1360,75 1340,48 Q1320,25 1280,40 
               Q1240,60 1220,85 Q1200,115 1180,90 Q1160,60 1140,45 
               Q1100,30 1060,55 Q1030,77 1010,100 Q990,130 960,95 
               Q940,70 900,50 Q870,35 840,60 Q810,90 790,115 
               Q770,145 740,105 Q720,75 690,55 Q660,40 620,65 
               Q590,85 570,60 Q550,40 510,53 Q480,65 460,95 
               Q440,135 410,100 Q390,65 360,50 Q330,35 300,60 
               Q270,85 250,65 Q230,45 200,70 Q170,100 150,125 
               Q130,150 100,105 Q80,65 50,45 Q25,30 0,40 Z"
            fill="#060504"
            opacity="0.6"
          />
        </svg>
      </div>

      <div className="footer-container">
        {/* Brand */}
        <div className="footer-brand">
          <Coffee size={40} className="footer-icon" strokeWidth={1.5} />
          <h2 className="footer-title">Casa Nova</h2>
          <p className="footer-subtitle">Premium Coffee Experience</p>
        </div>

        {/* Info Grid */}
        <div className="footer-info">
          <div className="footer-info-item">
            <MapPin size={18} className="info-icon" />
            <span>Tunis, Tunisia</span>
          </div>
          <div className="footer-info-item">
            <Clock size={18} className="info-icon" />
            <span>Open 8AM – 11PM</span>
          </div>
          <div className="footer-info-item">
            <Phone size={18} className="info-icon" />
            <span>+216 XX XXX XXX</span>
          </div>
          <div className="footer-info-item">
            <Mail size={18} className="info-icon" />
            <span>hello@casanova.tn</span>
          </div>
        </div>

        {/* Social Links */}
        <div className="footer-social">
          <a href="#" className="social-link" aria-label="Mail"><Mail size={22} /></a>
          <a href="#" className="social-link" aria-label="Phone"><Phone size={22} /></a>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Casa Nova. All rights reserved.</p>
          <p className="footer-made-by">Crafted with ☕ & passion</p>
        </div>
      </div>
    </footer>
  );
};
