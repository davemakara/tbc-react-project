"use client";

import { useRouter } from "next/navigation";
import { createUserAction } from "../../app/actions";

const CreateUserForm = () => {
  const router = useRouter();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    try {
      await createUserAction(formData);
    } catch (error) {
      console.error("Error occurred while handling form submission:", error);
    }
    router.refresh();
  };

  return (
    <form
      action=""
      className="flex flex-col w-[300px] gap-3"
      onSubmit={handleSubmit}
    >
      <input type="text" name="name" placeholder="Name" />
      <input type="email" name="email" placeholder="Email" />
      <input type="age" name="age" placeholder="Age" />
      <button type="submit">Create User</button>
    </form>
  );
};

export default CreateUserForm;
