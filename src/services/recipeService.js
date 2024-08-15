const BASE_URL = "https://www.themealdb.com/api/json/v1/1/";

const headers = {
    "Content-Type": "application/json",
    Authorization:
      "Bearer pat9FZvbXDirjvbAO.5eb8efb0a0e265218d8558b46cd98cc8b05f2d057da1a3a2186994392183e042",
  };

const getRecipeAPI = async (searchInput) => {
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

const saveRecipeDB = async (recipeToSave) => {
    const url = "https://api.airtable.com/v0/appCjh8hlvQLUjYTJ/Table%201";
    const payload = { fields: { ...recipeToSave} };
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(payload),
        headers,
      });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();
      const result = { id: json.id, ...json.fields };
      return result;
    } catch (error) {
      console.error(error.message);
    }
};

const getRecipeDB = async () => {
    const url = "https://api.airtable.com/v0/appCjh8hlvQLUjYTJ/Table%201";
    try {
        const response = await fetch(url, {
          headers,
        });
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
    
        const json = await response.json();
        return json.records.map((record) => {
          return {
            id: record.id,
            ...record.fields,
          };
        });
      } catch (error) {
        console.error(error.message);
      }
}

export { getRecipeAPI, saveRecipeDB, getRecipeDB };
