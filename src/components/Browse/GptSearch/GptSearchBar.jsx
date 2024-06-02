import React, { useRef } from "react";
import { useSelector } from "react-redux";
import useGptSearch from "../../../customHooks/useGptSearch";


//Language file import
import { languages } from "../../../utils/LANGUAGE_CONSTANTS/languageConstant";

const GptSearchBar = () => {
  const language = useSelector((store) => store.languageSlice.currentLanguage);
  const gptSearchInput = useRef();
  const handleGptSearch = useGptSearch();



  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="bg-black w-1/2 grid grid-cols-12 rounded-sm"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={gptSearchInput}
          type="text"
          className="p-4 m-4 rounded-lg col-span-10"
          placeholder={languages[language].gptSearchPlaceholder}
        />
        <button
          className="bg-red-700 text-white  p-4 mx-2 my-4 rounded-lg col-span-2"
          onClick={()=>handleGptSearch(gptSearchInput.current.value)}
        >
          {languages[language].searchButtonText}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
