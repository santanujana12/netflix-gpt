import React from 'react';
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { HOME_PICTURE_URL } from '../../../utils/CONSTANTS/constants';

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={HOME_PICTURE_URL} alt="background" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
}

export default GptSearch;