import * as recipeService from "../services/recipeService";
import Recipe from "./Recipe";
import { useState, useEffect } from 'react';

const MyRecipes = () => {

    const [myRecipes, setMyRecipes] = useState([]);
  
    // const fetchRecipe = async (searchInput) => {
    //   const data = await recipeService.getRecipe(searchInput);
    //   setRecipes(data);
    // };
  
    useEffect(() => {
      const loadMyRecipes = async () => {
        const data = await recipeService.getRecipeDB();
        setMyRecipes(data);
      }
      loadMyRecipes();
    }, []);

    return (
      <>
        <h1>My Recipes</h1>
        {/* <RecipeList recipes={recipes}/> */}
        {myRecipes ? myRecipes.map((recipe, index) => (
          <Recipe key={index} recipe={recipe} />
        )) : "No results"}
      </>
    );

}

export default MyRecipes;