import type { MenuCategory } from '../../data/menu';
import { ProductCard } from '../ProductCard/ProductCard';
import './MenuSection.css';

interface MenuSectionProps {
  category: MenuCategory;
}

export const MenuSection = ({ category }: MenuSectionProps) => {
  return (
    <section 
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
            {category.items.map((product) => (
              <div key={product.id} className="scroll-item">
                <ProductCard product={product} />
              </div>
            ))}
            {/* Added a spacer at the end for better scroll ending */}
            <div className="scroll-spacer"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
