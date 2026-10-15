import type { Product } from '../types/Product';

interface ProductsCardProps {
    product: Product;
}

const priceFormatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
});

export function ProductCard({ product }: ProductsCardProps) {
    return (
        <li className="product-card">
            <img
                src={product.photo}
                alt={product.productName}
                loading="lazy"
            />

            <h2>{product.productName}</h2>
            <strong>{priceFormatter.format(product.price)}</strong>
        </li>    
    );
}