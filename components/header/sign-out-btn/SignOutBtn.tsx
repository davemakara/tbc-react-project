import { MdExitToApp } from "react-icons/md";

import { handleLogout } from "../../../scripts/logout";

const SignOutBtn = () => {
  return (
    <MdExitToApp
      className="w-7 h-7 cursor-pointer text-[#000] dark:text-[#f4f4f4] hover:text-red hover:dark:text-red"
      onClick={() => {
        handleLogout().then(() => window.location.reload());
      }}
    />
  );
};

export default SignOutBtn;
