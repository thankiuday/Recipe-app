import React, { useEffect } from 'react'
import RecipeCard from '../RecipeCard';
let fav = [];
const Favorites = () => {
useEffect(()=>{
   fav = JSON.parse(localStorage.getItem('favorites')) || [];
},[fav])
  return (
    <div className='bg-blue-300 border-s-2 flex-1 p-10 min-h-screen'>
      <div className='max-w-screen-lg mx-auto'>
        <p className='font-bold text-3xl md:text-5xl my-4 text-green-800'>My Favorites</p>
        {fav.length ==0 &&(
          <div className='h-[80vh]  flex flex-col items-center gap-4'>
            <img src="/NotFound.svg" alt="404.svg" className='h-3/4' style={{mixBlendMode:"color-burn"}} />
          </div>
        )}

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {fav.map((recipe, index) => {
           return <RecipeCard recipe={recipe} index={index} />
          })}
        </div>  
      </div>
    </div>
  )
}

export default Favorites