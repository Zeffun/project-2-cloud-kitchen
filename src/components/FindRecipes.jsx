import '../App.css';
import * as recipeService from "../services/recipeService";
import RecipeSearch from './RecipeSearch';
import RecipeList from './RecipeList';

import { useState, useEffect } from 'react';

const FindRecipes = (props) => {

    const [recipes, setRecipes] = useState([""]);
  
    const fetchRecipe = async (searchInput) => {
      const data = await recipeService.getRecipe(searchInput);
      setRecipes(data);
    }
  
    useEffect(() => {
      fetchRecipe("");
    }, []);

    return (
        <>
              <h1>Find Recipes</h1>
              <h2>Search</h2>
              <RecipeSearch fetchRecipe={fetchRecipe}/>
              <h2>Recipes</h2>
              <p>Number of Results: {recipes.length}</p>
              <RecipeList recipes={recipes}/>
        </>
      );

};

export default FindRecipes;