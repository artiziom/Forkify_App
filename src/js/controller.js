import 'regenerator-runtime/runtime';
import * as model from './model.js';
import recipeView from './views/recipeView.js';




const controlRecipes = async function(){
    try{
      
      const id = window.location.hash.slice(1);

      if(!id)return;
      recipeView.renderSpinner()
      
      //1) LOADING RECIPE
      await model.loadRecipe(id);
      //2) RENDER RECIPE
      recipeView.render(model.state.recipe)

    }catch(err){
        recipeView.renderError(err);
    }
}

const init = ()=>{
  recipeView.addHandlerRender(controlRecipes)
}
init();


