"use client";

import UploadPhoto from "@/components/uploadBLOB/UploadPhoto";
// import type { PutBlobResult } from "@vercel/blob";
// import { useState, useRef } from "react";

// import Image from "next/image";
// import { createNewProduct } from "../../../../actions";

// export default function ProductAddForm() {
//   const inputFileRef = useRef<HTMLInputElement>(null);
//   const [blob, setBlob] = useState<PutBlobResult | null>(null);
//   const [title, setTitle] = useState("");
//   const [price, setPrice] = useState("");
//   const [stock, setStock] = useState("");
//   const [description, setDescription] = useState("");
//   const [category, setCategory] = useState("");
//   const [photo, setPhoto] = useState("");
//   const [artist, setArtist] = useState("");

//   console.log(setBlob);
//   const formData = {
//     title,
//     price,
//     stock,
//     description,
//     category,
//     photo,
//     artist,
//   };
//   console.log(formData, "formdataadd");
//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     try {
//       await createNewProduct(formData);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (!e.target.files) {
//       throw new Error("No file selected");
//     }

//     const files = e.target.files;

//     for (let i = 0; i < files.length; i++) {
//       const file = files[i];

//       try {
//         const response = await fetch(`/api/upload?filename=${file.name}`, {
//           method: "POST",
//           body: file,
//         });

//         const newBlob = await response.json();
//         console.log("File uploaded successfully:", newBlob);
//         setPhoto(newBlob.url);
//       } catch (error) {
//         console.error("Error uploading file:", error);
//       }
//     }

//     // Set the first image as the main image URL
//   };
//   return (
//     <div className="pt-20 w-full min-h-[100px] bg-[#cfe1d8] flex flex-col items-center mt-4 p-4 rounded-md dark:bg-[#527361]">
//       <h1 className="text-black text-xl font-semibold dark:text-white">
//         Add New Product
//       </h1>
//       <form
//         className="w-full max-w-2xl  mt-4 space-y-4"
//         onSubmit={handleSubmit}
//       >
//         <div className="w-full flex flex-wrap space-x-4">
//           <div className="flex flex-col flex-1">
//             <label className="block text-gray-700 dark:text-white">Title</label>
//             <input
//               type="text"
//               name="title"
//               placeholder="Title"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               required
//               className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#527361]"
//             />
//           </div>
//           <div className="flex flex-col flex-1">
//             <label className="block text-gray-700 dark:text-white">Price</label>
//             <input
//               type="number"
//               name="price"
//               placeholder="Price"
//               value={price}
//               onChange={(e) => setPrice(e.target.value)}
//               required
//               className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#527361]"
//             />
//           </div>
//           <div className="flex flex-col flex-1">
//             <label className="block text-gray-700 dark:text-white">Stock</label>
//             <input
//               type="number"
//               name="stock"
//               placeholder="Stock"
//               value={stock}
//               onChange={(e) => setStock(e.target.value)}
//               required
//               className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#527361]"
//             />
//           </div>
//         </div>
//         <div className="w-full">
//           <label className="block text-gray-700 dark:text-white">
//             Description
//           </label>
//           <textarea
//             name="description"
//             placeholder="Description"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             required
//             className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#527361]"
//           />
//         </div>
//         <div className="flex flex-col flex-1">
//           <label className="block text-gray-700 dark:text-white">
//             Category
//           </label>
//           <input
//             type="text"
//             name="category"
//             placeholder="Category"
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//             required
//             className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#527361]"
//           />
//         </div>
//         <div className="flex flex-col flex-1">
//           <label className="block text-gray-700 dark:text-white">Artist</label>
//           <input
//             type="text"
//             name="artist"
//             placeholder="Artist"
//             value={artist}
//             onChange={(e) => setArtist(e.target.value)}
//             required
//             className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#527361]"
//           />
//         </div>
//         <div className="w-full">
//           <label className="block text-gray-700 dark:text-white">Image</label>
//           <label className="w-full h-32 flex items-center justify-center border-2 border-dashed rounded-md cursor-pointer bg-gray-100 dark:bg-[#cfe1d8] text-gray-500">
//             <input
//               type="file"
//               name="image_url"
//               ref={inputFileRef}
//               onChange={handleFileChange}
//               className="hidden"
//               required
//             />
//             <span>Choose file</span>
//           </label>
//           {blob && (
//             <div className="mt-2 flex justify-center">
//               <Image
//                 src={blob.url}
//                 alt="product"
//                 width={100}
//                 height={100}
//                 className="rounded-md"
//               />
//             </div>
//           )}
//         </div>

//         <button
//           type="submit"
//           className="w-full py-2 bg-[#76a58b] text-white rounded-md hover:bg-[#748f80] transition duration-300"
//         >
//           Upload
//         </button>
//       </form>
//     </div>
//   );
// }

import { useState, ChangeEvent, FormEvent } from "react";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    artist: "",
    price: "",
    category: "",
    stock: "",
    photo: "",
    title: "",
    description: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  console.log(formData);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:3000/api/store/add-product",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();
      if (response.ok) {
        console.log("Product added successfully:", data);
        // Optionally reset the form or handle success
      } else {
        console.error("Failed to add product:", data);
      }
    } catch (error) {
      console.error("Error:", error);
    }
    setFormData({
      artist: "",
      price: "",
      category: "",
      stock: "",
      photo: "",
      title: "",
      description: "",
    });
  };

  const setBlobUrl = (url: string) => {
    setFormData((prevData) => ({
      ...prevData,
      photo: url,
    }));
  };

  return (
    <section className="w-full min-h-screen bg-[#DDDDDD] dark:bg-[#2C3333] flex flex-col items-center pt-[2rem] lg:pt-[5rem] xxl:pt-[7rem] overflow-hidden">
      <UploadPhoto setBlobUrl={setBlobUrl} />
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-[#000] p-8 rounded shadow-md"
      >
        <h2 className="text-2xl mb-6">Add New Product</h2>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="title"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="artist"
          >
            Artist
          </label>
          <input
            type="text"
            id="artist"
            name="artist"
            value={formData.artist}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="price"
          >
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="category"
          >
            Category
          </label>
          <input
            type="text"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="stock"
          >
            Stock
          </label>
          <input
            type="number"
            id="stock"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="photo"
          >
            Photo URL
          </label>
          <input
            type="text"
            id="photo"
            name="photo"
            value={formData.photo}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add Product
        </button>
      </form>
    </section>
  );
};

export default AddProduct;
