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

// export async function addNewProduct(
//   title: string,
//   description: string,
//   price: string,
//   stock: number,
//   photo: string,
//   category: string,
//   artist: string
// ) {
//   return await fetch(BASE_URL + "/api/add-product", {
//     method: "POST",
//     body: JSON.stringify({
//       title,
//       description,
//       price,
//       stock,
//       photo,
//       category,
//       artist,
//     }),
//   });
// }

export async function getProducts() {
  const response = await fetch(BASE_URL + "/api/store/get-all-products", {
    cache: "no-store",
  });

  const { products } = await response.json();

  return products.rows;
}

export async function getProductDetail(id: number) {
  const response = await fetch(
    `${BASE_URL}/api/store/get-single-product/${id}`
  );
  const data = await response.json();
  const product = data.singleProd?.rows ? data.singleProd.rows[0] : null;
  return product;
}

export async function deleteSingleProduct(id: number) {
  const response = await fetch(BASE_URL + "/api/store/delete-product", {
    method: "DELETE",
    body: JSON.stringify({ id }),
  });

  const data = await response.json();
  return data.response;
}

// BLOGS

export async function getBlogs() {
  const response = await fetch(BASE_URL + "/api/blogs/get-all-blogs", {
    cache: "no-store",
  });

  const { products } = await response.json();

  return products.rows;
}

export async function getBlogDetail(id: number) {
  const response = await fetch(`${BASE_URL}/api/blogs/get-single-blog/${id}`);
  const data = await response.json();
  const product = data.singleProd?.rows ? data.singleProd.rows[0] : null;
  return product;
}

export async function deleteSingleBlog(id: number) {
  const response = await fetch(BASE_URL + "/api/blogs/delete-blog", {
    method: "DELETE",
    body: JSON.stringify({ id }),
  });

  const data = await response.json();
  return data.response;
}
