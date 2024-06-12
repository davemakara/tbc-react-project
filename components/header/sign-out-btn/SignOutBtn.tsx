import { MdExitToApp } from "react-icons/md";

const SignOutBtn = () => {
  return (
    <button className="w-full p-2 hover:bg-green3 text-[16px] cursor-pointer flex items-center gap-1 border-t">
      Sign out
      <MdExitToApp className="text-xl" />
    </button>
  );
};

export default SignOutBtn;
