import { FaSignOutAlt } from "react-icons/fa";

import { handleLogout } from "../../../scripts/logout";

const SignOutBtn = () => {
  return (
    <FaSignOutAlt
      className="w-5 h-5 cursor-pointer text-[#000] dark:text-[#f4f4f4] hover:text-red hover:dark:text-red"
      onClick={() => {
        handleLogout().then(() => window.location.reload());
      }}
    />
  );
};

export default SignOutBtn;