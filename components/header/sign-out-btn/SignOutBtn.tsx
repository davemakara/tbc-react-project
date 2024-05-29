import { MdExitToApp } from "react-icons/md";

import { handleLogout } from "../../../scripts/logout";

const SignOutBtn = () => {
  return (
    <button
      className="w-full p-2 hover:bg-green3 text-[16px] cursor-pointer flex items-center gap-1 border-t"
      onClick={() => {
        handleLogout().then(() => window.location.reload());
      }}
    >
      Sign out
      <MdExitToApp className="text-xl" />
    </button>
  );
};

export default SignOutBtn;
