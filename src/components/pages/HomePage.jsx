import { Search } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import RecipeCard from '../RecipeCard';
import { toast } from 'react-toastify';

const API_ID = import.meta.env.VITE_API_ID;
const API_KEY = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [recipe, setRecipe] = useState([]); // Ensure initialization as an array
  const [loading, setLoading] = useState(true);

  const fetchRecipe = async (searchQuery) => {
    setLoading(true);
    setRecipe([]); // Clear previous data
    try {
      const res = await fetch(`https://api.edamam.com/api/recipes/v2/?app_id=${API_ID}&app_key=${API_KEY}&q=${searchQuery}&type=public`);
      const data = await res.json();
      console.log('API Response:', data); // Check API response structure
      setRecipe(data.hits || []); // Ensure `data.hits` is an array
      if (data.hits.length === 0) {
        // Trigger toast if no results found
        toast.error('No recipes found for your search!', {
          position: "top-center",
          autoClose: 5000, // Closes the toast after 3 seconds
        });
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("API_ID:", API_ID, "API_KEY:", API_KEY); // Ensure env variables are loaded
    fetchRecipe("strawberry ice cream");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchRecipe(e.target[0].value);
  };

  return (
    <div className='bg-blue-300 p-10 flex-1'>
      <div className='max-w-screen-lg mx-auto'>
        <form onSubmit={handleSubmit}>
          <label className='input shadow-md flex items-center gap-2'>
            <Search size={"24"} />
            <input type='text'
              className='text-sm md:text-md grow font-semibold'
              placeholder='What Do You Want To Cook Today?' />
          </label>
        </form>
        <p className='font-bold text-2xl md:text-4xl mt-4'>Top Recommended Recipes</p>
        <p className='text-slate-950 font-semibold text-2xl ml-1 my-2 tracking-tight'>Popular Choices</p>
        <div className='grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {/* Recipe cards */}
          {!loading && Array.isArray(recipe) && recipe.map(({ recipe }, index) => {
            return <RecipeCard key={index} recipe={recipe} />;
          })}

          {/* If it's loading */}
          {loading && [...Array(9)].map((_, index) => (
            <div key={index} className="flex w-52 flex-col gap-4 mt-5">
              <div className="skeleton h-32 w-full"></div>
              <div className="skeleton h-4 w-28"></div>
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-full"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
