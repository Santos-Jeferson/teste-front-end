
import { useId, useRef, useState } from "react";
import type { Product } from "../types/Product";
import { ProductCard } from "./ProductCard";

interface ProductShowcaseProps {
  products: Product[];
  onSelect: (product: Product) => void;
  showCategories?: boolean;
}

const categories = [
  "Celular",
  "Acessórios",
  "Tablets",
  "Notebooks",
  "TVs",
  "Ver todos",
];

export function ProductShowcase({
  products,
  onSelect,
  showCategories = true,
}: ProductShowcaseProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const titleId = useId();
  const listId = useId();
  const [expanded, setExpanded] = useState(false);

  function handleScroll(direction: number) {
    const carousel = carouselRef.current;

    if (!carousel) return;

    carousel.scrollBy({
      left: direction * carousel.clientWidth,
      behavior: "smooth",
    });
  }

  return (
    <section
      className={`product-showcase${!showCategories ? " product-showcase--simple" : ""}`}
      aria-labelledby={titleId}
    >
      <h2 id={titleId}>Produtos relacionados</h2>

      {!showCategories && (
        <button
          type="button"
          className="product-showcase__view-all"
          aria-controls={listId}
          aria-expanded={expanded}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Ver menos" : "Ver todos"}
        </button>
      )}

      {showCategories && (
        <ul className="product-showcase__categories">
          {categories.map((category) => (
            <li key={category}>{category}</li>
          ))}
        </ul>
      )}

      <div className="product-showcase__carousel">
        {!expanded && (
          <button
            type="button"
            className="product-showcase__arrow"
            aria-label="Produtos anteriores"
            onClick={() => handleScroll(-1)}
          >
            ‹
          </button>
        )}

        <div
          ref={carouselRef}
          className={`product-showcase__viewport${expanded ? " product-showcase__viewport--expanded" : ""}`}
        >
          <ul
            id={listId}
            className={`product-showcase__list${expanded ? " product-showcase__list--expanded" : ""}`}
          >
            {products.map((product) => (
              <ProductCard
                key={product.productName}
                product={product}
                onSelect={onSelect}
              />
            ))}
          </ul>
        </div>

        {!expanded && (
          <button
            type="button"
            className="product-showcase__arrow"
            aria-label="Próximos produtos"
            onClick={() => handleScroll(1)}
          >
            ›
          </button>
        )}
      </div>
    </section>
  );
}
