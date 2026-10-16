import { useEffect, useState } from 'react';
import { ProductCard } from './components/ProductCard';
import { getProducts } from './services/Products';
import { Header } from './components/Header'
import { HeroBanner } from './components/HeroBanner';
import type { Product } from './types/Product';


type LoadStatus = "loading" | "ready" | "error";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [status, setStatus] = useState<LoadStatus>("loading");

  useEffect(() => {
    const controller = new AbortController();

    getProducts(controller.signal)
      .then((data) => {
        if (!controller.signal.aborted) {
          setProducts(data);
          setStatus("ready");
        }
      })
      .catch((error: unknown) => {
        if (!controller.signal.aborted) {
          console.error("Erro ao carregar os produtos:", error);
          setStatus("error");
        }
      });

      return () => controller.abort();
  }, []);

  return (
    <>
      <Header />
      <HeroBanner />
      <main>
        <section className="products-section" aria-labelledby="products-title">
          <h2 id="products-title">Produtos relacionados</h2>

          {status === "loading" && <p>Carregando produtos...</p>}
          {status === "error" && (<p>Não foi possível carregar os produtos.</p>)}
          {status === "ready" && (
            <ul className="products-grid">
              {products.map((product) => (
                <ProductCard key={product.productName} product={product} />
              ))}
            </ul>
          )}
        </section>
      </main>
    </>
  );
}

export default App;