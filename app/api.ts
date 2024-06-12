import { BASE_URL } from "../constants";

//USERS
export async function getUsers() {
  const response = await fetch(BASE_URL + "/api/users/get-users", {
    cache: "no-store",
  });
  const { users } = await response.json();

  return users.rows;
}

export async function createUser(name: string, email: string, age: string) {
  return await fetch(BASE_URL + "/api/users/create-user", {
    method: "POST",
    body: JSON.stringify({ name, email, age }),
    cache: "no-store",
  });
}

export async function deleteUser(id: number) {
  await fetch(`${BASE_URL}/api/users/delete-user/${id}`, {
    method: "DELETE",
    cache: "no-store",
  });
}

export async function updateUser(
  id: string,
  name: string,
  email: string,
  age: string
) {
  return await fetch(BASE_URL + "/api/users/edit-user", {
    method: "PUT",
    body: JSON.stringify({ id, name, email, age }),
    cache: "no-store",
  });
}

//STORE

export async function getProducts() {
  const response = await fetch(BASE_URL + "/api/store/get-all-products", {
    cache: "no-store",
  });

  const { products } = await response.json();

  return products.rows;
}

//PRODUCTS

export async function getCartProducts() {
  const response = await fetch(BASE_URL + "/api/products/get-products", {
    cache: "no-store",
  });
  const { products } = await response.json();

  return products.rows;
}

export async function addToCart(id: number) {
  return await fetch(BASE_URL + "/api/products/add-product", {
    method: "POST",
    body: JSON.stringify({ id: id }),
    cache: "no-store",
  });
}

export async function updateCartCount(id: number, count: number) {
  return await fetch(BASE_URL + "/api/products/update-cart", {
    method: "PUT",
    body: JSON.stringify({ id, count }),
    cache: "no-store",
  });
}

export async function deleteCartItem(id: number) {
  return await fetch(BASE_URL + "/api/products/delete-cart-item", {
    method: "DELETE",
    body: JSON.stringify({ id }),
    cache: "no-store",
  });
}

export async function resetCart() {
  return await fetch(BASE_URL + "/api/products/reset-cart", {
    method: "DELETE",
    cache: "no-store",
  });
}
