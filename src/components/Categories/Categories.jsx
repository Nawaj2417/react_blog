import React, { useEffect, useState } from 'react';
import Blogcard2 from '../Home/Blogcard2';

const Categories = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(''); // Default category

  useEffect(() => {
    const fetchPostsAndCategories = async () => {
      try {
        // Fetch all posts
        const postsResponse = await fetch('http://localhost:8000/api/blogs/');
        if (postsResponse.ok) {
          const postsData = await postsResponse.json();
          setPosts(postsData); // Assuming API returns all posts
          setFilteredPosts(postsData.filter(post => post.category === selectedCategory)); // Filter by default category
        } else {
          console.error('Error fetching posts');
        }

        // Fetch categories
        const categoriesResponse = await fetch('http://localhost:8000/api/categories/'); // Adjust URL as needed
        if (categoriesResponse.ok) {
          const categoriesData = await categoriesResponse.json();
          setCategories(categoriesData); // Assuming API returns an array of categories
        } else {
          console.error('Error fetching categories');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchPostsAndCategories();
  }, []);

  useEffect(() => {
    // Filter posts whenever the selected category changes
    setFilteredPosts(posts.filter(post => post.category === selectedCategory));
  }, [selectedCategory, posts]);

  const handleCategoryChange = (newCategory) => {
    setSelectedCategory(newCategory);
  };

  return (
    <div className='px-8 py-6 min-h-96'>
      <h1 className='text-3xl font-bold px-4 py-2 text-center'>{selectedCategory}</h1>

      {/* Category Filter */}
      <div className="flex justify-center mb-4">
        {categories.length > 0 ? (
          categories.map((category) => (
            <button
              key={category.id} // Assuming categories have unique ids
              onClick={() => handleCategoryChange(category.name)} // Assuming category object has a 'name' property
              className={`mx-2 py-1 px-3 rounded ${selectedCategory === category.name ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            >
              {category.name} {/* Display category name */}
            </button>
          ))
        ) : (
          <p>Loading categories...</p>
        )}
      </div>

      {/* Posts */}
      <div className="posts flex flex-wrap justify-center">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => <Blogcard2 key={post.id} data={post} />)
        ) : (
          <p>No posts found in this category</p>
        )}
      </div>
    </div>
  );
};

export default Categories;
