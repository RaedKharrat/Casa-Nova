import { useEffect, useState } from 'react';
import casanovaLogo from '../../assets/casanova.png';
import './Loader.css';

export const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loader-container ${!loading ? 'hidden' : ''}`}>
      <div className="loader-content">
        <img src={casanovaLogo} alt="Casa Nova" className="loader-logo-img" />
        <div className="loader-progress">
          <div className="loader-bar"></div>
        </div>
      </div>
    </div>
  );
};
