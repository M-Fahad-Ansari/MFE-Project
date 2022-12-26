declare module "shell/AppHeader";
declare module "shell/AppFooter";

declare module "shell/placeVueComponent" {
  function placeVueComponent(component: any, element: HTMLElement): void;
  export default placeVueComponent;
}

declare module "shell/products" {
  interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    longDescription: string;
  }

  export function getProducts(): Promise<Product[]>;
  export function getProductById(id: number): Promise<Product | undefined>;
  export const currency: Intl.NumberFormat;
}

declare module "pdp/PDPContent";
