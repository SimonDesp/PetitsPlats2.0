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
