import type { MenuCategory } from '../../data/menu';
import { ProductCard } from '../ProductCard/ProductCard';
import './MenuSection.css';

interface MenuSectionProps {
  category: MenuCategory;
}

export const MenuSection = ({ category }: MenuSectionProps) => {
  return (
    <section id={category.id} className="menu-section">
      <div className="menu-container">
        <div className="section-header">
          <h2 className="section-title">{category.name}</h2>
          <div className="section-divider"></div>
        </div>
        <div className="products-grid">
          {category.items.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
