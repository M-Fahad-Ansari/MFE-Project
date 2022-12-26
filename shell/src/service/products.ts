import PRODUCTS from "../assets/products";

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  longDescription: string;
}

export async function getProducts() {
  return PRODUCTS;
}

export async function getProductById(id: number) {
  return PRODUCTS.find((product) => product.id === id);
}

export const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
