import { getUsers } from "../../../api";
import { User } from "../../../../types/types";
import CreateUserForm from "../../../../components/user-actions/CreateUserForm";

import { FaRegEdit } from "react-icons/fa";
import DeleteUserBtn from "@/components/user-actions/DeleteUserBtn";

const AdminPage = async () => {
  const users = await getUsers();
  console.log(users);

  return (
    <section className="w-full min-h-screen bg-[#DDDDDD] dark:bg-[#2C3333] flex flex-col items-center pt-[2rem] lg:pt-[5rem] xxl:pt-[7rem]">
      <div>
        <CreateUserForm />

        <div className="flex flex-col min-w-[1000px] overflow-scroll">
          {users.length ? (
            <div className="grid grid-cols-5 border-b border-t gap-5 py-2 px-2 bg-green">
              <div>Name</div>
              <div>Email</div>
              <div>Age</div>
            </div>
          ) : (
            ""
          )}

          {users.map((user: User) => (
            <div
              key={user.id}
              className="grid grid-cols-5 border-b gap-5 py-2 px-2 hover:bg-[#E5E1CC] dark:hover:bg-green3"
            >
              <p>{user.name}</p>
              <p>{user.email}</p>
              <p>{user.age}</p>

              <p className="relative">
                <FaRegEdit className="absolute right-0 w-5 h-5" />
              </p>
              <p className="relative">
                <DeleteUserBtn id={user.id} />
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdminPage;
