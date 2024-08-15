import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as recipeService from "../services/recipeService";

const CreateRecipe = () => {

    const [formData, setFormData] = useState({
        name: "",
        image: "",
        category: "",
        cuisine: "",
        instructions: ""
      });

    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleCreate = async (event) => {
        event.preventDefault();
        await recipeService.saveRecipeDB(formData);
        navigate("/my-recipes");
    };
    
    return (
        <>
            <form onSubmit={handleCreate}>
                <fieldset>
                    <legend>New Recipe</legend>
                    <label>
                        Name:
                        <input name="name" value={formData.name} onChange={handleChange} />
                    </label>
                    <br></br>
                    <label>
                        ImageURL:
                        <input
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                        />
                    </label>
                    <br></br>
                    <label>
                        Category:
                        <input name="category" value={formData.category} onChange={handleChange} />
                    </label>
                    <br></br>
                    <label>
                        Cuisine:
                        <input name="cuisine" value={formData.cuisine} onChange={handleChange} />
                    </label>
                    <br></br>
                    <br></br>
                    <label>
                        Instructions:
                        <textarea name="instructions" value={formData.instructions} onChange={handleChange} />
                    </label>
                    <br></br>
                    <br></br>
                    <button>Add</button>
                </fieldset>
            </form>
        </>
    );

}

export default CreateRecipe;