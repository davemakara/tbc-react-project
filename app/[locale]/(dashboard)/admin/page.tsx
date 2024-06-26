import React from "react";

import Link from "next/link";
import AllProducts from "@/components/admin/AllProducts";
import AllBlogs from "@/components/admin/AllBlogs";
import AllEvents from "@/components/admin/AllEvents";

const AdminPage = async () => {
  return (
    <section className="w-full min-h-screen bg-mainLightBG dark:bg-mainDarkBG bg-opacity-70 dark:bg-opacity-70 py-36 lg:py-40 overflow-hidden">
      <div className="w-full flex justify-center gap-4 mb-20">
        <Link
          href="/admin/add"
          className="w-32 h-10 flex justify-center items-center bg-red hover:bg-[#b72727] rounded-lg"
        >
          Add Product
        </Link>
        <Link
          href="/admin/add-blog"
          className="w-32 h-10 flex justify-center items-center bg-red hover:bg-[#b72727] rounded-lg"
        >
          Add Blog
        </Link>
        <Link
          href="/admin/add-event"
          className="w-32 h-10 flex justify-center items-center bg-red hover:bg-[#b72727] rounded-lg"
        >
          Add Event
        </Link>
        <Link
          href="/admin/orders"
          className="w-32 h-10 flex justify-center items-center text-white dark:text-[#000] bg-mainDarkBG dark:bg-mainLightBG hover:bg-[#b72727] dark:hover:bg-[#b72727] rounded-lg"
        >
          Order History
        </Link>
      </div>
      <AllProducts />
      <AllBlogs />
      <AllEvents />
    </section>
  );
};

export default AdminPage;
