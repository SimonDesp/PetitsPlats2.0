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
    this.assetMedia = `assets/recette-les-petits-plats/`;
    this.totalIncluded = 0
  }

  display() {

      const picture = this.assetMedia + this.image;

      const cardContainer = document.getElementById('card-container');
      const cardRecette = document.getElementById('card-recette');
      const div = document.createElement('div');
      const img = document.createElement('img');
      img.setAttribute('src', picture);
      img.classList.add('img-card');
      img.setAttribute('aria-label', `image : ${this.name}`);
      const temps = document.createElement('div');
      temps.classList.add('temps');
      const pTemps = document.createElement('p');
      pTemps.textContent = `${this.time}min`;
      const h2Name = document.createElement('h2');
      h2Name.textContent = this.name;

      const recette = document.createElement('div');
      recette.classList.add('recette');
      const h3recette = document.createElement('h3');
      h3recette.textContent = `RECETTE`;
      const pRecette = document.createElement('p');
      pRecette.textContent = `${this.description}`;

      const ingredient = document.createElement('div');
      ingredient.classList.add('ingredients');
      const h3ringredient = document.createElement('h3');
      h3ringredient.textContent = `INGRÉDIENTS`;

      cardRecette.appendChild(h2Name);
      cardRecette.appendChild(pTemps);
      cardRecette.appendChild(pRecette);
      cardContainer.appendChild(cardRecette);
      cardContainer.appendChild(img);
    };

}

class DisplayRecipes {
  constructor(recipes) {
    this.recipes = recipes
    this.assetMedia = `assets/recette-les-petits-plats/`
    this.totalIncluded = 0
    /*
    if (typeFilter == 'custom') {
      this.filter = new FilterPerso()
    } else {
      this.filter = new FilterFunctional()
    }*/
  }

  displayPage() {
    this.recipes.forEach(recipe => {
      const card = new RecipeCardInformation(recipe)
      card.display()
    })
  }

  filter(filter) {

    this.recipes.forEach(element => {
      const domElt = document.getElementById(element.id)

      if (this.filter.isInclued(filter, element)) {
        domElt.display()
        this.totalIncluded++
      } else {
        domElt.hiden()
      }
    });

    this.refreshTotal()
  }

  refreshTotal() {
    // TODO
    const domEltTotal =document.getElementById("TODO")
    domEltTotal.innerHTML(this.totalIncluded)
  }
}
