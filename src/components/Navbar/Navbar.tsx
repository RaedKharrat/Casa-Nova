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

  // Intersection Observer for highlighting sections
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-10% 0px -70% 0px', // Trigger when section is in top-ish part of screen
      threshold: 0
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      // Find the first entry that is intersecting
      const visibleSection = entries.find(entry => entry.isIntersecting);
      if (visibleSection && !isClickScrolling.current) {
        setActiveTab(visibleSection.target.id);
      }
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    allCategories.forEach(category => {
      const element = document.getElementById(category.id);
      if (element) observer.observe(element);
    });

    // Handle scroll for background color
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [allCategories]);

  // Center the active tab in the scrolling nav
  useEffect(() => {
    if (activeTab && navRef.current) {
      const activeTabElement = navRef.current.querySelector(`[data-id="${activeTab}"]`) as HTMLElement;
      if (activeTabElement) {
        const navWidth = navRef.current.clientWidth;
        const tabWidth = activeTabElement.clientWidth;
        const tabLeft = activeTabElement.offsetLeft;
        
        navRef.current.scrollTo({
          left: tabLeft - (navWidth / 2) + (tabWidth / 2),
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
      
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });

      // Re-enable observer after scroll animation finishes
      if (scrollTimeout.current) window.clearTimeout(scrollTimeout.current);
      scrollTimeout.current = window.setTimeout(() => {
        isClickScrolling.current = false;
      }, 1000); 
    }
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container" ref={navRef}>
        <div className="nav-list">
          {allCategories.map((category) => {
            const Icon = category.icon;
            const isActive = activeTab === category.id;
            
            return (
              <button
                key={category.id}
                data-id={category.id}
                className={`nav-button ${isActive ? 'active' : ''}`}
                onClick={() => scrollToSection(category.id)}
                aria-current={isActive ? 'page' : undefined}
              >
                {Icon && <Icon className="nav-icon" size={16} />}
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
