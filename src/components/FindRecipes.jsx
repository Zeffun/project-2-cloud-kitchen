import '../App.css';
import * as recipeService from "../services/recipeService";
import RecipeSearch from './RecipeSearch';
import Recipe from './Recipe';

import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const FindRecipes = () => {

    const [recipes, setRecipes] = useState([]);
    const navigate = useNavigate();
  
    const fetchRecipes = async (searchInput) => {
      const data = await recipeService.getRecipeAPI(searchInput);
      setRecipes(data);
    };

    const handleSave = async (recipe) => {
      const savedRecipe = {
        name: recipe.strMeal,
        image: recipe.strMealThumb,
        category: recipe.strCategory,
        cuisine: recipe.strArea,
        instructions: recipe.strInstructions
      };
      await recipeService.saveRecipeDB(savedRecipe);
      navigate("/my-recipes");
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