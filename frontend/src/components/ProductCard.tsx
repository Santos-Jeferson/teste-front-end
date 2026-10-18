
import type { Product } from "../types/Product";

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

const priceFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export function ProductCard({
  product,
  onSelect,
}: ProductCardProps) {
  return (
    <li className="product-card">
      <button
        type="button"
        className="product-card__image-trigger"
        onClick={() => onSelect(product)}
        aria-label={`Ver detalhes de ${product.productName}`}
      >
        <img
          src={product.photo}
          alt=""
          loading="lazy"
        />
      </button>

      <p className="product-card__name">
        {product.productName}
      </p>

      <strong className="product-card__price">
        {priceFormatter.format(product.price)}
      </strong>

      <p className="product-card__installments">
        Consulte condições de pagamento
      </p>

      <p className="product-card__shipping">
        Consulte condições de entrega
      </p>

      <button
        type="button"
        className="product-card__button"
        onClick={() => onSelect(product)}
      >
        COMPRAR
      </button>
    </li>
  );
}
