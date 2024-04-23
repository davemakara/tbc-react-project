"use client";

const SearchSection = () => {
  return (
    <form className="w-full flex justify-center">
      <input
        type="search"
        placeholder="Search.."
        className="w-3/5 md:w-1/3 px-10 py-2 md:py-3 rounded-full"
      />
      <button
        type="button"
        className="bg-darkYellow ml-2 px-8 rounded-3xl text-[14px] md:text-[18px] font-semibold"
      >
        Sort
      </button>
    </form>
  );
};

export default SearchSection;
