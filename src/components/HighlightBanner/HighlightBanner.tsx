import { useRef } from 'react';
import { Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './HighlightBanner.css';

gsap.registerPlugin(ScrollTrigger);

interface HighlightItem {
  emoji: string;
  title: string;
  desc: string;
}

const highlights: HighlightItem[] = [
  { emoji: '☕', title: 'Artisan Roasts', desc: 'Handpicked beans, freshly roasted daily' },
  { emoji: '🍫', title: 'Premium Chocolate', desc: 'Imported Belgian & Swiss cocoa blends' },
  { emoji: '🍹', title: 'Signature Mixes', desc: 'Unique house recipes you won\'t find anywhere else' },
  { emoji: '🧁', title: 'Fresh Pastries', desc: 'Baked in-house every morning' },
];

export const HighlightBanner = () => {
  const containerRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!cardsRef.current) return;
    const cards = cardsRef.current.querySelectorAll('.highlight-card');

    gsap.fromTo(cards,
      { y: 80, opacity: 0, scale: 0.8 },
      {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.2,
        stagger: 0.1,
        ease: 'expo.out',
      }
    );

    // Floating animation for card icons
    cards.forEach((card) => {
      const icon = card.querySelector('.highlight-card-icon');
      gsap.to(icon, {
        y: -15,
        duration: 2 + Math.random() * 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    });

  }, { scope: containerRef });

  return (
    <section className="highlight-banner" ref={containerRef}>
      {/* Melting top divider - Matches new deep brown bg */}
      <div className="melt-divider melt-top">
        <svg viewBox="0 0 1440 160" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="#0e0a08" d="M0,0 L1440,0 L1440,80 C1200,160 900,0 720,80 C540,160 240,0 0,80 Z"></path>
        </svg>
      </div>

      <div className="highlight-bg-pattern"></div>
      <div className="highlight-ambient-left"></div>
      <div className="highlight-ambient-right"></div>

      <div className="highlight-inner">
        <div className="highlight-header">
          <span className="highlight-label">
            <Sparkles size={14} className="label-sparkle" />
            Selection Elite
          </span>
          <h2 className="highlight-title">Art of Roasting</h2>
          <p className="highlight-desc">
            Sourced with integrity, roasted with precision, and served with love. Experience the Casa Nova difference.
          </p>
        </div>

        <div className="highlight-cards" ref={cardsRef}>
          {highlights.map((item, i) => (
            <div className="highlight-card" key={i}>
              <div className="highlight-card-icon">{item.emoji}</div>
              <h3 className="highlight-card-title">{item.title}</h3>
              <p className="highlight-card-desc">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* <div className="highlight-marquee-container">
          <div className="highlight-marquee">
            {[...Array(4)].map((_, i) => (
              <div className="marquee-track" key={i}>
                 <div className="marquee-badge"><span>Artisanal</span></div>
                 <div className="marquee-badge"><span>Fresh</span></div>
                 <div className="marquee-badge"><span>Premium</span></div>
                 <div className="marquee-badge"><span>Pure</span></div>
              </div>
            ))}
          </div>
        </div> */}
      </div>

      {/* Melting bottom divider - Matches new deep brown bg */}
      <div className="melt-divider melt-bottom">
        <svg viewBox="0 0 1440 160" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="#0e0a08" d="M0,160 L1440,160 L1440,80 C1200,0 900,160 720,80 C540,0 240,160 0,80 Z"></path>
        </svg>
      </div>
    </section>
  );
};
