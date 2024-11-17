import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Searchbox = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/search?search=${query}`);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className='flex rounded-md overflow-hidden w-full mt-4 lg:mt-0 lg:w-[400px]'>
      <input
        type="text"
        className='border-0 py-1 px-2 text-md w-full'
        placeholder='Search your topics'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button className='bg-orange-500 p-2 text-white' onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Searchbox;
