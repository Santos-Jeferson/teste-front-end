import type { Product, ProductsResponse } from '../types/Product';

const PRODUCTS_URL = "/data/products.json";

export async function getProducts(
  signal?: AbortSignal
): Promise<Product[]> {
  const response = await fetch(PRODUCTS_URL, { signal });

  if (!response.ok) {
    throw new Error('Falha ao carregar os produtos.');
  }

  const data: ProductsResponse = await response.json();

  if (!data.success || !Array.isArray(data.products)) {
    throw new Error('Resposta inválida da API.');
  }

  return data.products;
}
