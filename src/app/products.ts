export interface Product {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
  isAddedToCart: boolean;
}

export interface CartProduct {
  product: Product;
  quantity: number;
}
