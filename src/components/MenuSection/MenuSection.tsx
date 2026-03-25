import { useEffect, useRef } from 'react';
import type { MenuCategory } from '../../data/menu';
import { ProductCard } from '../ProductCard/ProductCard';
import './MenuSection.css';

interface MenuSectionProps {
  category: MenuCategory;
}

export const MenuSection = ({ category }: MenuSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id={category.id} 
      className="menu-section"
    >
      <div className="menu-container">
        <div className="section-header">
          <div className="category-title-wrapper">
             <h2 className="section-title">{category.name}</h2>
             <span className="items-count">{category.items.length} Items</span>
          </div>
          <p className="swipe-hint">Swipe to explore →</p>
        </div>
        
        <div className="products-horizontal-scroll">
          <div className="scroll-inner">
            {category.items.map((product, index) => (
              <div 
                key={product.id} 
                className="scroll-item"
                style={{ transitionDelay: `${index * 0.06}s` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
            <div className="scroll-spacer"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
