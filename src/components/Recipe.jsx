const Recipe = (props) => {

    return (
        <section>
            <h3>{props.recipe.strMeal}</h3>
            <img src={props.recipe.strMealThumb}/>
            <p>Category: {props.recipe.strCategory}</p>
            <p>Cuisine: {props.recipe.strArea}</p>
            <p>Instructions: {props.recipe.strInstructions}</p>
            <div><button>Save</button> <button>Remove</button> <button>Edit</button></div>
            <br></br>
        </section>
    );

}

export default Recipe;