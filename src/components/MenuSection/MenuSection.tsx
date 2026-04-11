import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles } from 'lucide-react';
import { supplementData, type MenuCategory } from '../../data/menu';
import './MenuSection.css';

gsap.registerPlugin(ScrollTrigger);

interface MenuSectionProps {
  category: MenuCategory;
  index: number;
}

export const MenuSection = ({ category, index }: MenuSectionProps) => {
  const containerRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const isEven = index % 2 === 0;
  const showSupplement = ['coffee', 'tea', 'hot-chocolat'].includes(category.id);


  useGSAP(() => {
    // Reveal Animation
    gsap.fromTo(imageRef.current, 
      { x: isEven ? -100 : 100, opacity: 0 },
      {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 90%',
          toggleActions: 'play none none reverse'
        },
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'expo.out'
      }
    );

    gsap.fromTo(listRef.current,
      { x: isEven ? 100 : -100, opacity: 0 },
      {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 90%',
          toggleActions: 'play none none reverse'
        },
        x: 0,
        opacity: 1,
        duration: 1.2,
        delay: 0.1,
        ease: 'expo.out',
        onComplete: () => ScrollTrigger.refresh()
      }
    );
  }, { scope: containerRef });


  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    
    // Tilt the whole card
    gsap.to(imageRef.current, {
      rotationY: x * 10,
      rotationX: -y * 10,
      transformPerspective: 1200,
      duration: 0.6,
      ease: 'power2.out'
    });

    // Parallax for text inside
    const titleEl = imageRef.current.querySelector('.category-name-large');
    if (titleEl) {
      gsap.to(titleEl, {
        x: x * 40,
        y: y * 40,
        duration: 0.6,
        ease: 'power2.out'
      });
    }
  };

  const handleMouseLeave = () => {
    gsap.to(imageRef.current, {
      rotationY: 0,
      rotationX: 0,
      duration: 0.8,
      ease: 'elastic.out(1, 0.5)'
    });
    
    const titleEl = imageRef.current?.querySelector('.category-name-large');
    if (titleEl) {
      gsap.to(titleEl, {
        x: 0,
        y: 0,
        duration: 0.8,
        ease: 'elastic.out(1, 0.5)'
      });
    }
  };


  return (
    <section 
      ref={containerRef}
      id={category.id} 
      className={`menu-section ${isEven ? 'image-left' : 'image-right'}`}
    >
      <div className="section-content">
        <div 
          className="category-image-wrapper"
          ref={imageRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <img 
            src={category.items[0]?.image || ''} 
            alt={category.name} 
            className="category-hero-image" 
          />
          <div className="category-overlay">
             <div className="category-titles-wrapper">
               <h2 className="category-name-large">
                 {category.name.split(' / ').map((part, i) => (
                   <span key={i} style={{ display: 'block' }}>{part}</span>
                 ))}
               </h2>
               <div className="hover-explore-text">Explore Selection</div>
             </div>
          </div>
        </div>
        
        <div className="products-list-wrapper" ref={listRef}>
          <div className="list-content-scrollable">
            <div className="list-header">
               <span className="category-tag">{category.name}</span>
               <h3 className="list-title">Selection</h3>
            </div>
            
            <div className="products-list">
              {category.items.map((product) => (
                <div key={product.id} className={`product-item ${product.popular ? 'product-popular' : ''}`}>
                  <div className="product-main">
                    <h4 className="product-name">
                      {product.popular && <span className="popular-dot" title="Popular">★</span>}
                      {product.name}
                    </h4>
                    <span className="product-dots"></span>
                    <span className="product-price">{product.price}</span>
                  </div>
                  {product.subtitle && <p className="product-subtitle">{product.subtitle}</p>}
                </div>
              ))}
            </div>

            {showSupplement && (
              <div className="supplement-card">
                <div className="supp-glow"></div>
                <div className="supp-icon-row">
                  <Sparkles size={16} className="supp-sparkle" />
                </div>
                <div className="supp-content">
                  <span className="supp-tag">Elevate your experience</span>
                  <h4 className="supp-title">{supplementData.name}</h4>
                  <div className="supp-flavors">
                    {supplementData.items.map((item, i) => (
                      <span key={i} className="supp-flavor-chip">{item}</span>
                    ))}
                  </div>
                  <div className="supp-footer">
                    <span className="supp-subtitle">{supplementData.subtitle}</span>
                    <span className="supp-price">+{supplementData.price}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
