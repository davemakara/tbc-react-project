"use client";

const SearchSection = () => {
  return (
    <form className="py-2 w-full flex justify-center">
      <input
        type="search"
        placeholder="Search.."
        className="w-3/5 md:w-2/5 lg:w-1/3 px-6 py-2 md:py-4 rounded-full"
      />
      <button className="bg-darkYellow ml-2 px-8 rounded-3xl text-[14px] md:text-[18px] font-semibold">
        Sort
      </button>
    </form>
  );
};

export default SearchSection;
