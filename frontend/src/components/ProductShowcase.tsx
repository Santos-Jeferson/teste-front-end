import { useRef } from "react";
import type { Product } from "../types/Product";
import { ProductCard } from "./ProductCard";

interface ProductShowcaseProps {
    products: Product[];
    onSelect: (product: Product) => void;
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
}: ProductShowcaseProps) {
    const carouselRef = useRef<HTMLDivElement>(null);

    function handleScroll(direction: number) {
        const carousel = carouselRef.current;

        if (!carousel) return;

        carousel.scrollBy({
            left: direction * carousel.clientWidth,
            behavior: "smooth",
        });
    }

    return (
        <section className="product-showcase" aria-labelledby="products-title">
            <h2 id="products-title">Produtos relacionados</h2>

            <ul className="product-showcase__categories">
                {categories.map((category) => (
                    <li key={category}>{category}</li>
                ))}
            </ul>

            <div className="product-showcase__carousel">
                <button type="button" className="product-showcase__arrow" aria-label="Produtos anteriores" onClick={() => handleScroll(-1)}>
                    {"‹"}
                </button>

                <div className="product-showcase__viewport" ref={carouselRef}>
                    <ul className="product-showcase__list">
                        {products.map((product) => (<ProductCard key={product.productName} product={product} onSelect={onSelect}
                        />
                        ))}
                    </ul>
                </div>

                <button type="button" className="product-showcase__arrow" aria-label="Próximos produtos" onClick={() => handleScroll(1)}>
                    {"›"}
                </button>
            </div>
        </section>
    );
}