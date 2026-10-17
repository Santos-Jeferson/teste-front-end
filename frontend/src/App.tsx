import { useEffect, useState } from 'react';
import { getProducts } from './services/Products';
import { Header } from './components/Header'
import { HeroBanner } from './components/HeroBanner';
import { Categories } from './components/Categories'
import type { Product } from './types/Product';
import { ProductShowcase } from './components/ProductShowcase'
import { ProductModal } from './components/ProductModal';



type LoadStatus = "loading" | "ready" | "error";

function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
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

      <main>
        <HeroBanner />
        <Categories />

        {status === "loading" && (
          <p>Carregando produtos...</p>
        )}

        {status === "error" && (
          <p role="alert">
            Não foi possível carregar os produtos.
          </p>
        )}

        {status === "ready" && (
          <ProductShowcase
            products={products}
            onSelect={setSelectedProduct}
          />
        )}
      </main>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
}

export default App;
