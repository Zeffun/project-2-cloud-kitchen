const BASE_URL = "https://www.themealdb.com/api/json/v1/1/";

const getRecipe = async (searchInput) => {
    try {
        const queryString = `search.php?s=${searchInput}`;
        const res = await fetch(BASE_URL + queryString);
        const data = await res.json();
        console.log(data.meals);
        return data.meals;
    } catch (error) {
        console.log(error);
    };
};

export { getRecipe };
