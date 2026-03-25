import type { Product } from '../../data/menu';
import { Star } from 'lucide-react';
import './ProductCard.css';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className={`product-card ${product.popular ? 'popular' : ''}`}>
      {product.popular && (
        <div className="popular-badge">
          <Star size={12} fill="currentColor" />
          <span>Popular Choice</span>
        </div>
      )}
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" loading="lazy" />
        <div className="price-tag-overlay">{product.price}</div>
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-subtitle">{product.subtitle}</p>
      </div>
    </div>
  );
};
