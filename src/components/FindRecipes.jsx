import '../App.css';
import * as recipeService from "../services/recipeService";
import RecipeSearch from './RecipeSearch';
import Recipe from './Recipe';

import { useState, useEffect } from 'react';

const FindRecipes = () => {

    const [recipes, setRecipes] = useState([""]);
    // const [savedRecipe, setSavedRecipe] = useState({
    //   name: "",
    //   category: "",
    //   cuisine: "",
    //   instructions: "",
    // });
  
    const fetchRecipes = async (searchInput) => {
      const data = await recipeService.getRecipeAPI(searchInput);
      setRecipes(data);
    };

    const handleSave = async (recipe) => {
      const savedRecipe = {
        name: recipe.strMeal,
        category: recipe.strCategory,
        cuisine: recipe.strArea,
        instructions: recipe.strInstructions
      };
      await recipeService.saveRecipeDB(savedRecipe);
      await console.log(savedRecipe);
    };
  
    useEffect(() => {
      fetchRecipes("");
    }, []);

    return (
        <>
              <h1>Find Recipes</h1>
              <h2>Search</h2>
              <RecipeSearch fetchRecipe={fetchRecipes}/>
              <h2>Recipes</h2>
              <p>Number of Results: {recipes ? recipes.length : 0}</p>
              {/* <RecipeList recipes={recipes}/> */}
              {recipes ? recipes.map((recipe, index) => (
                <Recipe key={index} recipe={recipe} save={() => handleSave(recipe)}/>
              )) : "No results"}
        </>
      );

};

export default FindRecipes;