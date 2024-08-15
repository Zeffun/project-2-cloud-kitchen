//Styling
import './App.css';
//Libraries
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from 'react';
//Components
import NavBar from "./components/NavBar";
import FindRecipes from "./components/FindRecipes";
import MyRecipes from "./components/MyRecipes";
import EditRecipe from "./components/EditRecipe";
import CreateRecipe from "./components/CreateRecipe";
import * as recipeService from "./services/recipeService";

function App() {

  return (
    <>
      <header className="container">
        <h1>Cloud Kitchen</h1>
      </header>
      <main className="container">
        <NavBar />
        <Routes>
          <Route path="/" element={<img width="100" src="https://static.vecteezy.com/system/resources/previews/026/757/704/non_2x/chef-hat-with-ai-generated-free-png.png"/>} />
          <Route path="/find-recipes" element={<FindRecipes />} />
          <Route path="/my-recipes" element={<MyRecipes />} />
          <Route path="/my-recipes/edit/:recipeId" element={<EditRecipe />} />
          <Route path="/create-recipe" element={<CreateRecipe />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
