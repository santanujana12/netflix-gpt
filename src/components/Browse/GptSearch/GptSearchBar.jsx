import React from "react";

const GptSearchBar = () => {
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="bg-black w-1/2 grid grid-cols-12 rounded-sm">
        <input
          type="text"
          className="p-4 m-4 rounded-lg col-span-10"
          placeholder="What would you like to search?"
        />
        <button className="bg-red-700 text-white  p-4 mx-2 my-4 rounded-lg col-span-2">
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;