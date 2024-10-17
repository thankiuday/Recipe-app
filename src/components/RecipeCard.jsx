import React, { useState } from 'react'
import { Heart, HeartPulse, Search, Soup } from 'lucide-react'
const getTwoValuesFromArray = (arr) => {
    // give me the first two index of arr
    return [arr[0], arr[1]];

}

const RecipeCard = ({ recipe }) => {
    const [isFavorites, setIsFavorites] = useState(localStorage.getItem('favorites')?.includes(recipe.label));
    const [heartColor, setHeartColor] = useState(false);
    const healthlabels = getTwoValuesFromArray(recipe.healthLabels)

    const addRecipeToFavorites = () => {
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        const isRecipeAlreadyInDavorites = favorites.some((fav) => fav.label === recipe.label)

        if (isRecipeAlreadyInDavorites) {
            favorites = favorites.filter((fav) => fav.label !== recipe.label)
            setIsFavorites(false)
        }
        else {
            favorites.push(recipe)
            setIsFavorites(true)
        }
        localStorage.setItem('favorites', JSON.stringify(favorites))
        setHeartColor(true)
    }
    return (
        <div className=' bg-slate-100 flex flex-col rounded-md overflow-hidden p-3 relative'>
            <a href={`https://www.youtube.com/results?search_query=${recipe.label} recipe`}
                target='_blank'
                className='relative h-32'>
                <div className='skelton absolute inset-0'></div>
                <img src={recipe.image}
                    alt="img"
                    className='rounded-md w-full h-full object-cover cursor-pointer border-2 opacity-0 transition-opacity duration-300'
                    onLoad={(e) => {
                        e.currentTarget.style.opacity = 1;
                        e.currentTarget.previousElementSibling.style.display = "none";
                    }}
                />
                <div className='absolute bottom-2 left-2 bg-blue-200 rounded-full p-1 cursor-pointer
               flex items-center gap-1 text-sm'>
                    <Soup size={16} /> {recipe.yield} Searving
                </div>
                <div className='absolute top-1 right-2 bg-red-300 rounded-full p-1 cursor-pointer'
                    onClick={(e) => {
                        e.preventDefault();
                        addRecipeToFavorites();
                    }}>

                    {/* <Heart size={18} className={`${heartColor ? "fill-red-600": "hover:fill-red-600 hover:text-red-500"}`}  /> */}
                    {!isFavorites && <Heart size={18} className='hover:fill-red-600 hover:text-red-500' />}
                    {isFavorites && <Heart size={18} className='fill-red-600' />}
                </div>
            </a>
            <div className='flex mt-1'>
                <p className='font-bold'>{recipe.label}</p>
            </div>
            <p className='my-2'>{recipe.cuisineType[0].charAt(0).toUpperCase() + recipe.cuisineType[0].slice(1)} Kitchen</p>
            <div className='flex gap-2 mt-2'>
                {healthlabels.map((label, idx) => {
                    return (
                        <div key={idx} className=' flex gap-1 bg-green-300  hover:bg-green-400 items-center p-1 rounded-md'>
                            <HeartPulse size={16} />
                            <span className='text-sm tracking-tighter font-semibold'>{label}</span>
                        </div>)
                })}

            </div>
        </div>
    )
}

export default RecipeCard