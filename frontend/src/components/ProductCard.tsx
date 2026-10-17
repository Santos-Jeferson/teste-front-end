import type { Product } from '../types/Product';

interface ProductsCardProps {
    product: Product;
    onSelect: (product: Product) => void;
}

const priceFormatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
});

export function ProductCard({ product, onSelect }: ProductsCardProps) {
    return (
        <li className="product-card">
            <img
                src={product.photo}
                alt={product.productName}
                loading="lazy"
            />

            <p className="product-card__name">
                {product.productName}
            </p>

            <strong className="product-card__price">
                {priceFormatter.format(product.price)}
            </strong>

            <button type="button" className="product-card__button" onClick={() => onSelect(product)} > COMPRAR </button>
        </li>    
    );
}