"use client";

import React, { useRef } from "react";
import { BASE_URL } from "@/constants";

interface AddBlogPictureProps {
  setBlobUrl: (url: string) => void;
}

const UploadPhoto: React.FC<AddBlogPictureProps> = ({ setBlobUrl }) => {
  const inputFileRef = useRef<HTMLInputElement>(null);

  const handleUpload = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!inputFileRef.current?.files) {
      throw new Error("No file selected");
    }

    const file = inputFileRef.current.files[0];

    const response = await fetch(
      `${BASE_URL}/api/avatar/upload?filename=${file.name}`,
      {
        method: "POST",
        body: file,
      }
    );

    const newBlob = await response.json();
    setBlobUrl(newBlob.url); // Update the photo URL in the parent component
  };

  return (
    <div>
      <form onSubmit={handleUpload} className="upload-photo">
        <label htmlFor="file-upload">Add photo</label>
        <input
          name="file"
          ref={inputFileRef}
          type="file"
          required
          id="file-upload"
        />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default UploadPhoto;
