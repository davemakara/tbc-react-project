// PRORDUCTS

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  images: string[];
  thumbnail: string;
}

export interface CartItemProps extends Product {
  count: number;
}

export interface ProductsStoreProps {
  id: number;
  photo: string;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  category: string;
  thumbnail: string;
}

// RECIPES

export interface BlogProps {
  id: number;
  title: string;
  description: string;
  paragraph1: string;
  paragraph2: string;
  paragraph3: string;
  photo: string;
  createdat: string;
}

// USERS

export interface User {
  id: number;
  name: string;
  email: string;
  age: string;
}
