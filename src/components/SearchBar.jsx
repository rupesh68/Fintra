import React from "react";

export default function SearchComponent() {
  return (
    <form className="w-3/5 px-2 rounded-full">
      <div className="relative">
        <input
          type="text"
          placeholder="Search about Mutual Funds"
          className="w-full py-1 pl-2 pr-4 shadow-lg rounded-full outline-none bg-white font-montserrat text-xs "
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 bottom-0 w-4 h-4 my-auto text-[#00C6CA] right-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7   0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </form>
  );
}
