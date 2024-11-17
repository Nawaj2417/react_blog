import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Blogcard2 from './Blogcard2';

const Searchpage = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('search');

  useEffect(() => {
    const fetchBlogs = async () => {
      setIsLoading(true);
      setError(null); // Reset error before a new request

      try {
        const response = await fetch(`http://127.0.0.1:8000/api/blog/search?search=${query}`);
        if (response.ok) {
          const data = await response.json();
          setBlogs(data);
        } else {
          setError('Failed to fetch data');
        }
      } catch (error) {
        setError('An error occurred while fetching data');
      } finally {
        setIsLoading(false);
      }
    };

    if (query) {
      fetchBlogs();
    }
  }, [query]);

  return (
    <div className='min-h-96 p-10'>
      <h1 className="text-center text-2xl font-semibold ">Search Results for: {query}</h1>

      {isLoading ? (
        <p className="text-center text-xl">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-500 text-xl mt-2">{error}</p>
      ) : (
        <div className="blog flex justify-center space-x-5 flex-wrap mt-4">
          {blogs.length > 0 ? (
            blogs.map((data) => <Blogcard2 key={data.id} data={data} />)
          ) : (
            <p>No results found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Searchpage;
