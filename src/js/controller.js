import 'regenerator-runtime/runtime';
import * as model from './model.js';
import recipeView from './views/recipeView.js';


const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

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
        alert(err)
    }
}

window.addEventListener('hashchange', controlRecipes);
window.addEventListener('load', controlRecipes);


