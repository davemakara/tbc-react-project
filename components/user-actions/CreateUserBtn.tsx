"use client";
import { useState } from "react";
import CreateUserForm from "./CreateUserForm";

const CreateUserBtn = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleClick = () => {
    setOpenModal(!openModal);
    document.body.style.overflow = "hidden";
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="bg-darkYellow hover:bg-green rounded-xl py-2 px-4 mb-5 cursor-pointer transition-all transform duration-300 ease-linear"
      >
        + Add User
      </button>
      {openModal ? (
        <CreateUserForm openModal={openModal} setOpenModal={setOpenModal} />
      ) : (
        ""
      )}
    </>
  );
};

export default CreateUserBtn;
