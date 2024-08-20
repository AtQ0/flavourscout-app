
export function generateRecipes(incomingSearchQuery, setRecipes) {
    const fetchAddress = `https://www.themealdb.com/api/json/v1/1/search.php?f=${incomingSearchQuery}`;
    fetch(fetchAddress)
        .then(response => response.json())
        .then(result => setRecipes(result.meals))
        .catch(error => console.error('Error fetching recipes:', error));
}

export function generateRecipe(recipeID, setRecipe) {
    const fetchAddress = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeID}`;

    fetch(fetchAddress)
        .then(response => response.json())
        .then(result => {
            if (result && result.meals && result.meals.length > 0) {
                setRecipe(result.meals[0]);
            } else {
                console.error('No meals found for the given recipe ID');
            }
        })
        .catch(error => console.error('Error fetching recipe:', error));
}
