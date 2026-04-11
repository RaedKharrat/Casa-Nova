import { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import casanovaLogo from '../../assets/casanova.png';
import './Loader.css';

export const Loader = () => {
  const [percent, setPercent] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const percentRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    // Percentage Counter Logic
    const counter = { val: 0 };
    gsap.to(counter, {
      val: 100,
      duration: 3,
      ease: 'power2.inOut',
      onUpdate: () => setPercent(Math.floor(counter.val))
    });

    // Logo & Content Entrance
    gsap.fromTo('.loader-logo-img', 
      { scale: 0.8, opacity: 0, filter: 'blur(20px)' },
      { scale: 1, opacity: 1, filter: 'blur(0px)', duration: 1.5, ease: 'expo.out', delay: 0.2 }
    );

    gsap.fromTo('.loader-status',
       { y: 20, opacity: 0 },
       { y: 0, opacity: 1, duration: 1, delay: 0.5 }
    );

    // Initial load Exit sequence
    const tl = gsap.timeline({ delay: 3.5 });
    
    tl.to(contentRef.current, {
      y: -30,
      opacity: 0,
      duration: 0.8,
      ease: 'power4.in'
    })
    .to(containerRef.current, {
      yPercent: -100,
      duration: 1.2,
      ease: 'expo.inOut'
    }, '-=0.3');

  }, { scope: containerRef });

  return (
    <div className="loader-overlay" ref={containerRef}>
      <div className="loader-ambient-glow"></div>
      
      <div className="loader-content" ref={contentRef}>
        <div className="loader-logo-wrapper">
          <img src={casanovaLogo} alt="Casa Nova" className="loader-logo-img" />
          <div className="logo-glow"></div>
        </div>

        <div className="loader-info">
          <div className="loader-status">
            <span className="status-label">Brewing Excellence</span>
            <div className="status-dot"></div>
          </div>
          
          <div className="loader-counter">
            <span className="percent-num" ref={percentRef}>{percent}</span>
            <span className="percent-symbol">%</span>
          </div>
        </div>

        <div className="loader-progress-track">
          <div className="loader-progress-fill" style={{ width: `${percent}%` }}></div>
        </div>
      </div>

      <div className="loader-bottom-label">
        Casa Nova Selection • 2026
      </div>
    </div>
  );
};
