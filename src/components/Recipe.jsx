const Recipe = (props) => {

    return (
        <section>
            <h3>{props.recipe.strMeal || props.recipe.name}</h3>
            <img width="500" src={props.recipe.strMealThumb || props.recipe.image}/>
            <p>Category: {props.recipe.strCategory || props.recipe.category}</p>
            <p>Cuisine: {props.recipe.strArea || props.recipe.cuisine}</p>
            <p>Instructions: {props.recipe.strInstructions || props.recipe.instructions}</p>
            <button onClick={props.save}>Save</button>
            <br></br>
        </section>
    );

}

export default Recipe;