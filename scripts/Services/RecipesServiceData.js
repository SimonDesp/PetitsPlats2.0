class RecipesServiceData {
  static init() {
    fetch('/data/recipes.json')
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Erreur lors de la récupération des données.');
      }
    })
    .then(data => {
      //const recipes = []

      data.recipes.forEach(recipe => {
        //const recipeObject = new Recipe()

        const id = recipe.id;
        const image = recipe.image;
        const name = recipe.name;
        const servings = recipe.servings;
        const ingredients = recipe.ingredients;
        const time = recipe.time;
        const description = recipe.description;
        const appliance = recipe.appliance;
        const ustensils = recipe.ustensils;
        ingredients.forEach(ingredient => {
          //const ingredientObject = new ingredient()
          const ingredientName = ingredient.ingredient;
          const quantity = ingredient.quantity;
          const unit = ingredient.unit || '';
          //recipeObject.add(ingredingredientObjectient)
        });

      });

      //recipes.push(recipeObject)

      //return recipes
      return data.recipes
    })
    .then(recipes =>{
      displayRecipes = new DisplayRecipes(recipes);
      displayRecipes.displayPage();
    })
    .catch(error => {
      console.error(error);
    });
  }
}

let displayRecipes = null;
RecipesServiceData.init();
