const Recipe = (props) => {

    return (
        <section>
            <h3>{props.recipe.strMeal}</h3>
            <img src={props.recipe.strMealThumb}/>
            <p>Category: {props.recipe.strCategory}</p>
            <p>Cuisine: {props.recipe.strArea}</p>
            <p>Instructions: {props.recipe.strInstructions}</p>
            <button onClick={props.save}>Save</button>
            <br></br>
        </section>
    );

}

export default Recipe;