import { useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './Hero.css';

export const Hero = () => {
  const container = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
    
    tl.from(lineRef.current, {
      scaleX: 0,
      opacity: 0,
      duration: 1,
      delay: 0.3
    })
    .from(titleRef.current, {
      y: 80,
      opacity: 0,
      duration: 1.5,
    }, '-=0.6')
    .from(subtitleRef.current, {
      y: 20,
      opacity: 0,
      duration: 1,
    }, '-=1')
    .from(dividerRef.current, {
      scaleX: 0,
      opacity: 0,
      duration: 0.8,
    }, '-=0.6')
    .from(btnRef.current, {
      y: 20,
      opacity: 0,
      duration: 1,
      ease: 'back.out(1.7)'
    }, '-=0.4');
  }, { scope: container });

  const handleScroll = () => {
    window.scrollBy({ top: window.innerHeight - 80, behavior: 'smooth' });
  };

  return (
    <section className="hero" ref={container}>
      <div className="hero-overlay"></div>
      <div className="hero-ambient"></div>
      <div className="hero-content">
        <div className="hero-line" ref={lineRef}></div>
        <h1 className="hero-title" ref={titleRef}>Casa Nova</h1>
        <p className="hero-subtitle" ref={subtitleRef}>Coffee & Beyond</p>
        <div className="hero-divider" ref={dividerRef}>
          <span className="hero-divider-line"></span>
          <span className="hero-divider-diamond"></span>
          <span className="hero-divider-line"></span>
        </div>
        <button 
          ref={btnRef}
          onClick={handleScroll} 
          className="hero-scroll-btn" 
          aria-label="Scroll down"
        >
          <ChevronDown size={28} />
        </button>
      </div>
    </section>
  );
};
