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
    <section className="w-full min-h-screen flex justify-center items-center">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Paragraph 1:
          <textarea
            name="paragraph1"
            value={formData.paragraph1}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Paragraph 2:
          <textarea
            name="paragraph2"
            value={formData.paragraph2}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Paragraph 3:
          <textarea
            name="paragraph3"
            value={formData.paragraph3}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Photo:
          <input
            type="file"
            ref={inputFileRef}
            onChange={handlePhotoUpload}
            required
          />
        </label>
        <button type="submit">Add Blog Post</button>
      </form>
    </section>
  );
};

export default AddBlog;