import { useState } from "react";

const RecipeSearch = (props) => {
    const [searchInput, setSearchInput] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        props.fetchRecipe(searchInput);
        setSearchInput("");
    };

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <label htmlFor="searchQuery">Search for a Recipe: </label>
                <input 
                    id="searchQuery"
                    type="text"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
        </section>
    )
}

export default RecipeSearch;