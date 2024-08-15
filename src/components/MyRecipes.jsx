import * as recipeService from "../services/recipeService";

import { useState, useEffect } from 'react';

const MyRecipes = () => {

    const [recipes, setRecipes] = useState([""]);
  
    const fetchRecipe = async (searchInput) => {
      const data = await recipeService.getRecipe(searchInput);
      setRecipes(data);
    }
  
    useEffect(() => {
      fetchRecipe("");
    }, []);

    return (
        <main>
              <h1>My Recipes</h1>
              <h2>Search</h2>
              <h2>Recipes</h2>
              <p>Number of Results: {recipes.length}</p>
        </main>
      );

}

export default MyRecipes;