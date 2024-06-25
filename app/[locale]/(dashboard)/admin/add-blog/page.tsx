"use client";

import React, { useState, useRef } from "react";
import { BASE_URL } from "@/constants";
import { addBlogPostAction } from "@/app/actions";

const AddBlog = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    paragraph1: "",
    paragraph2: "",
    paragraph3: "",
    photo: "",
  });

  const inputFileRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhotoUpload = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!inputFileRef.current?.files) {
      throw new Error("No file selected");
    }

    const file = inputFileRef.current.files[0];

    try {
      const response = await fetch(
        `${BASE_URL}/api/avatar/upload?filename=${file.name}`,
        {
          method: "POST",
          body: file,
        }
      );

      const newBlob = await response.json();
      setFormData({ ...formData, photo: newBlob.url });
    } catch (error) {
      console.error("Error uploading photo:", error);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await addBlogPostAction(formData);
      // Optionally reset form after successful submission
      setFormData({
        title: "",
        description: "",
        paragraph1: "",
        paragraph2: "",
        paragraph3: "",
        photo: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <section className="w-full min-h-screen bg-mainLightBG dark:bg-mainDarkBG bg-opacity-70 dark:bg-opacity-70 flex flex-col items-center py-36 lg:py-40 overflow-hidden">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-[#000] text-white p-8 rounded-md shadow-md mt-10"
      >
        <h2 className="text-2xl mb-6">Add New Blog</h2>

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
            onChange={handleInputChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-[#000] dark:text-white leading-tight focus:outline-none focus:shadow-outline"
          />

          <label
            htmlFor="id"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Description
          </label>
          <input
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-[#000] dark:text-white leading-tight focus:outline-none focus:shadow-outline"
          />

          <label
            htmlFor="paragraph1"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Paragraph 1:
          </label>
          <textarea
            id="paragraph1"
            name="paragraph1"
            value={formData.paragraph1}
            onChange={handleInputChange}
            rows={10}
            className="border rounded w-full py-2 px-3 text-[#000] dark:text-white focus:outline-none focus:shadow-outline"
            required
          />

          <label
            htmlFor="paragraph2"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Paragraph 2:
          </label>
          <textarea
            id="paragraph2"
            name="paragraph2"
            value={formData.paragraph2}
            onChange={handleInputChange}
            rows={10}
            className="border rounded w-full py-2 px-3 text-[#000] dark:text-white focus:outline-none focus:shadow-outline"
            required
          />

          <label
            htmlFor="paragraph3"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Paragraph 3:
          </label>
          <textarea
            id="paragraph3"
            name="paragraph3"
            value={formData.paragraph3}
            onChange={handleInputChange}
            rows={10}
            className="border rounded w-full py-2 px-3 text-[#000] dark:text-white focus:outline-none focus:shadow-outline"
            required
          />

          <label>
            Photo:
            <input
              type="file"
              ref={inputFileRef}
              onChange={handlePhotoUpload}
              required
              className="my-8"
            />
          </label>
        </div>

        <button
          type="submit"
          className="w-32 h-14 bg-red flex justify-center items-center rounded-md mx-auto"
        >
          Add Blog
        </button>
      </form>
    </section>
  );
};

export default AddBlog;
