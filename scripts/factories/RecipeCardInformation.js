class RecipeCardInformation {
  constructor(recipeInformation) {
    console.log(recipeInformation)
    const { image, name, servings, description, ingredients, time } = recipeInformation;

    this.image = image;
    this.name = name;
    this.servings = servings;
    this.description = description;
    this.ingredients = ingredients;
    this.time = time;
    this.assetMedia = `/assets/recette-les-petits-plats/recette/`;
    this.totalIncluded = 0
  }

  display() {
    const picture = this.assetMedia + this.image;

    const cardContainer = document.getElementById('card-container');
    const cardRecette = document.createElement('div');
    cardRecette.classList.add('card-recette');


    const containerImg = document.createElement('div');

    const img = document.createElement('img');
    img.setAttribute('src', picture);
    img.classList.add('img-card');
    img.setAttribute('aria-label', `image : ${this.name}`);

    const pTemps = document.createElement('p');
    pTemps.classList.add('temps');
    pTemps.textContent = `${this.time}min`;

    const h2Name = document.createElement('h2');
    h2Name.textContent = this.name;


    containerImg.appendChild(img);
    containerImg.appendChild(h2Name);
    containerImg.appendChild(pTemps);

    const containerRecette = document.createElement('div');
    containerRecette.classList.add('recette');

    const h3Recette = document.createElement('h3');
    h3Recette.textContent = 'RECETTE'
    const pRecette = document.createElement('p');
    pRecette.textContent = `${this.description}`;

    containerRecette.appendChild(h3Recette);
    containerRecette.appendChild(pRecette);

    const containerIngredient = document.createElement('div');
    containerIngredient.classList.add('ingredients');

    const h3Ingredient = document.createElement('h3');
    h3Ingredient.textContent = `INGRÉDIENTS`;

    containerIngredient.appendChild(h3Ingredient);

    const containerDescriptionCard = document.createElement('div');
    containerDescriptionCard.classList.add('description-card');

    this.ingredients.forEach((ingredient) => {

      const divDescription = document.createElement('div')
      divDescription.classList.add('description-card-item')

      const pDescription = document.createElement('p');
      pDescription.classList.add('description');
      const pQuantity = document.createElement('p')
      pQuantity.classList.add('quantite')
      pDescription.textContent = ingredient.ingredient;

      if (ingredient.ingredient && ingredient.quantity && ingredient.unit !== undefined) {
        pDescription.textContent = `${ingredient.ingredient}`;
        pQuantity.textContent = `${ingredient.quantity} ${ingredient.unit}`;
      }
      else if (ingredient.ingredient && ingredient.quantity !== undefined) {
        pDescription.textContent = `${ingredient.ingredient}`;
        pQuantity.textContent = `${ingredient.quantity}`;
      }


      divDescription.appendChild(pDescription);
      divDescription.appendChild(pQuantity);
      containerDescriptionCard.appendChild(divDescription);
      containerIngredient.appendChild(containerDescriptionCard);
    });

    cardRecette.appendChild(containerImg);
    cardRecette.appendChild(containerRecette);
    cardRecette.appendChild(containerIngredient);

    cardContainer.appendChild(cardRecette);
  };


}
