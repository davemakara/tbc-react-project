import React from "react";

import { getUsers } from "../../../api";
import { User } from "../../../../types/types";

import DeleteUserBtn from "../../../../components/user-actions/DeleteUserBtn";
import EditUserBtn from "../../../../components/user-actions/EditUserBtn";
import CreateUserBtn from "@/components/user-actions/CreateUserBtn";

const AdminPage = async () => {
  const users = await getUsers();
  console.log(users);
  const sortedUsers = users.sort((a: User, b: User) => b.id - a.id);

  return (
    <section className="w-full min-h-screen bg-[#DDDDDD] dark:bg-[#2C3333] flex flex-col items-center pt-[2rem] lg:pt-[5rem] xxl:pt-[7rem]">
      <div>
        <CreateUserBtn />
        <div className="flex flex-col min-w-[1000px]">
          {users.length ? (
            <div className="grid grid-cols-5 border-b border-t gap-5 py-2 px-2 bg-green">
              <p>Name</p>
              <p>Email</p>
              <p>Age</p>
            </div>
          ) : (
            ""
          )}

          {sortedUsers.map((user: User) => (
            <div
              key={user.id}
              className="grid grid-cols-5 border-b gap-5 py-2 px-2 hover:bg-[#E5E1CC] dark:hover:bg-green3"
            >
              <p>{user.name}</p>
              <p>{user.email}</p>
              <p>{user.age}</p>
              <span className="flex justify-end">
                <EditUserBtn user={user} />
              </span>

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
