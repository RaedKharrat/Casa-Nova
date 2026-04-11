import { useState, useEffect, useRef, useCallback } from 'react';
import { menuData } from '../../data/menu';
import './Navbar.css';

export const Navbar = () => {
  const [activeTab, setActiveTab] = useState<string>('');
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const isClickScrolling = useRef(false);
  const scrollTimeout = useRef<number | null>(null);

  const allCategories = menuData.flatMap(section => section.categories);

  // Manual scroll-based tracking — more reliable than IntersectionObserver for this layout
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      if (isClickScrolling.current) return;

      const scrollY = window.scrollY + 200; // offset for navbar height
      let currentId = '';

      for (const category of allCategories) {
        const el = document.getElementById(category.id);
        if (el) {
          const top = el.offsetTop;
          const bottom = top + el.offsetHeight;
          if (scrollY >= top && scrollY < bottom) {
            currentId = category.id;
            break;
          }
        }
      }

      // Fallback: if we're past the last section, highlight the last one
      if (!currentId && allCategories.length > 0) {
        const lastCat = allCategories[allCategories.length - 1];
        const lastEl = document.getElementById(lastCat.id);
        if (lastEl && scrollY >= lastEl.offsetTop) {
          currentId = lastCat.id;
        }
      }

      if (currentId && currentId !== activeTab) {
        setActiveTab(currentId);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Run once on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [allCategories, activeTab]);

  // Center the active tab in the scrolling nav
  useEffect(() => {
    if (activeTab && navRef.current) {
      const activeTabElement = navRef.current.querySelector(`[data-id="${activeTab}"]`) as HTMLElement;
      if (activeTabElement) {
        const navRect = navRef.current.getBoundingClientRect();
        const tabRect = activeTabElement.getBoundingClientRect();
        const scrollLeft = navRef.current.scrollLeft;
        const targetScroll = scrollLeft + tabRect.left - navRect.left - (navRect.width / 2) + (tabRect.width / 2);

        navRef.current.scrollTo({
          left: targetScroll,
          behavior: 'smooth'
        });
      }
    }
  }, [activeTab]);

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      isClickScrolling.current = true;
      setActiveTab(id);

      const topOffset = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });

      if (scrollTimeout.current) window.clearTimeout(scrollTimeout.current);
      scrollTimeout.current = window.setTimeout(() => {
        isClickScrolling.current = false;
      }, 800);
    }
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* <div className="navbar-left">
          <img src={casanovaLogo} alt="Casa Nova" className="navbar-logo-img" />
        </div> */}
        <div className="nav-list" ref={navRef}>
          {allCategories.map((category) => {
            const isActive = activeTab === category.id;

            return (
              <button
                key={category.id}
                data-id={category.id}
                className={`nav-button ${isActive ? 'active' : ''}`}
                onClick={() => scrollToSection(category.id)}
                aria-current={isActive ? 'page' : undefined}
              >
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
