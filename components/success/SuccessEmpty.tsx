"use client";

import { useEffect } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { resetCartAction } from "@/app/actions";

const SuccessEmpty = () => {
  const { user } = useUser();

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const fromStripe = query.get("from") === "stripe";

    if (fromStripe && typeof user?.sub === "string") {
      const emptyCartWhenSuccess = async () => {
        await resetCartAction(user.sub as string);
      };
      emptyCartWhenSuccess();
    }
  }, [user]);

  return <div></div>;
};

export default SuccessEmpty;
