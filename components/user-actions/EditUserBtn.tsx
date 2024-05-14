"use client";
import { useState } from "react";
import EditUserForm from "./EditUserForm";
import { User } from "@/types/types";
import { FaRegEdit } from "react-icons/fa";

const EditUserBtn = ({ user }: { user: User }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <FaRegEdit
        className="w-5 h-5 cursor-pointer hover:text-darkYellow"
        onClick={() => setOpenModal(!openModal)}
      />

      {openModal ? (
        <EditUserForm setOpenModal={setOpenModal} user={user} />
      ) : (
        ""
      )}
    </>
  );
};

export default EditUserBtn;
