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
          Artist:
          <textarea
            name="artist"
            value={formData.artist}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Venue:
          <textarea
            name="venue"
            value={formData.venue}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Date:
          <textarea
            name="date"
            value={formData.date}
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
        <button type="submit">Add Event</button>
      </form>
    </section>
  );
};

export default AddEvent;
