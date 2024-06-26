"use client";

import UploadPhoto from "@/components/uploadBLOB/UploadPhoto";

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
    description2: "",
    description3: "",
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
      description2: "",
      description3: "",
    });
  };

  const setBlobUrl = (url: string) => {
    setFormData((prevData) => ({
      ...prevData,
      photo: url,
    }));
  };

  return (
    <section className="w-full min-h-screen bg-mainLightBG dark:bg-mainDarkBG bg-opacity-70 dark:bg-opacity-70 flex flex-col items-center py-36 lg:py-40 overflow-hidden">
      <UploadPhoto setBlobUrl={setBlobUrl} />
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-[#000] text-white p-8 rounded-md shadow-md mt-10"
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
            className="shadow appearance-none border rounded w-full py-2 px-3 text-[#000] dark:text-white leading-tight focus:outline-none focus:shadow-outline"
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
            className="shadow appearance-none border rounded w-full py-2 px-3 text-[#000] dark:text-white leading-tight focus:outline-none focus:shadow-outline"
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
            className="shadow appearance-none border rounded w-full py-2 px-3 text-[#000] dark:text-white leading-tight focus:outline-none focus:shadow-outline"
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
            className="shadow appearance-none border rounded w-full py-2 px-3 text-[#000] dark:text-white leading-tight focus:outline-none focus:shadow-outline"
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
            className="shadow appearance-none border rounded w-full py-2 px-3 text-[#000] dark:text-white leading-tight focus:outline-none focus:shadow-outline"
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
            className="shadow appearance-none border rounded w-full py-2 px-3 text-[#000] dark:text-white leading-tight focus:outline-none focus:shadow-outline"
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
            rows={10}
            className="border rounded w-full py-2 px-3 text-[#000] dark:text-white focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description2"
          >
            Description 2
          </label>
          <textarea
            id="description2"
            name="description2"
            value={formData.description2}
            onChange={handleChange}
            rows={10}
            className="border rounded w-full py-2 px-3 text-[#000] dark:text-white focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description3"
          >
            Description 3
          </label>
          <textarea
            id="description3"
            name="description3"
            value={formData.description3}
            onChange={handleChange}
            rows={10}
            className="border rounded w-full py-2 px-3 text-[#000] dark:text-white focus:outline-none focus:shadow-outline"
          />
        </div>

        <button
          type="submit"
          className="bg-red hover:bg-[#b72727] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add Product
        </button>
      </form>
    </section>
  );
};

export default AddProduct;
