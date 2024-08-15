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

  const [myRecipes, setMyRecipes] = useState([""]);

  const fetchRecipe = async () => {
    const data = await recipeService.getRecipe("Arrabiata");
    console.log(data);
  }

  return (
    <>
      <header className="container">
        <h1>Cloud Kitchen</h1>
      </header>
      <main className="container">
        <NavBar />
        <Routes>
          <Route path="/" element={<h2>Home</h2>} />
          <Route path="/find-recipes" element={<FindRecipes />} />
          <Route path="/my-recipes" element={<MyRecipes />} />
          <Route path="/my-recipes/edit/:recipeId" element={<EditRecipe />} />
          <Route path="/myrecipes/create" element={<CreateRecipe />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
