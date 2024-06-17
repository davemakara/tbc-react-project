"use client";

import { resetCartAction } from "@/app/actions";

const ResetCartBtn = ({ id }: any) => {
  return <button onClick={() => resetCartAction(id)}>RESET</button>;
};

export default ResetCartBtn;
