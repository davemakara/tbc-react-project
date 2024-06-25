"use client";

import React, { useState, useRef } from "react";
import { BASE_URL } from "@/constants";
import { addEventAction } from "@/app/actions";

const AddEvent = () => {
  const [formData, setFormData] = useState({
    title: "",
    photo: "",
    artist: "",
    description: "",
    venue: "",
    date: "",
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
      await addEventAction(formData);
      // Optionally reset form after successful submission
      setFormData({
        title: "",
        photo: "",
        artist: "",
        description: "",
        venue: "",
        date: "",
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
        <h2 className="text-2xl mb-6">Add New Event</h2>

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
            htmlFor="description"
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
            htmlFor="artist"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Artist:
          </label>
          <textarea
            id="artist"
            name="artist"
            value={formData.artist}
            onChange={handleInputChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-[#000] dark:text-white leading-tight focus:outline-none focus:shadow-outline"
          />

          <label
            htmlFor="venue"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Venue:
          </label>
          <textarea
            id="venue"
            name="venue"
            value={formData.venue}
            onChange={handleInputChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-[#000] dark:text-white leading-tight focus:outline-none focus:shadow-outline"
          />

          <label
            htmlFor="date"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Date:
          </label>
          <textarea
            id="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            required
            className="border rounded w-full py-2 px-3 text-[#000] dark:text-white focus:outline-none focus:shadow-outline"
          />
        </div>

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
        <button
          type="submit"
          className="w-32 h-14 bg-red hover:bg-[#b72727] flex justify-center items-center rounded-md mx-auto"
        >
          Add Event
        </button>
      </form>
    </section>
  );
};

export default AddEvent;
