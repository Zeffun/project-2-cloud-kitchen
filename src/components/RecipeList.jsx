import Recipe from "./Recipe";

const RecipeList = (props) => {

    return (
        <>
        {props.recipes.map((recipe, index) => (
            <Recipe key={index} recipe={recipe}/>
        ))}
        </>
    )
}

export default RecipeList;
