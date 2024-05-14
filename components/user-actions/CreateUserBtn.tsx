"use client";
import { useState } from "react";
import CreateUserForm from "./CreateUserForm";

const CreateUserBtn = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <>
      <button
        onClick={() => setOpenModal(!openModal)}
        className="w-fit bg-darkYellow hover:bg-green rounded-2xl py-2 px-7 cursor-pointer transition-all transform duration-300 ease-linear"
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
