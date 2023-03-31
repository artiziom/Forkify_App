import {async} from 'regenerator-runtime';

export const state = {
    recipe: {}
}
export const loadRecipe = async (id)=>{
    try{
      const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}?key=038d72ab-1bf1-41bd-bfbd-158903f099a5`)
      const data = await res.json();
      
      if(!res.ok) throw new Error(`${data.message}`);

      let {recipe} = data.data
      state.recipe = {
        id: recipe.id,
        title: recipe.title,
        publisher: recipe.publisher,
        sourceUrl: recipe.source_url,
        image: recipe.image_url,
        servings: recipe.servings,
        cookingTime: recipe.cooking_time,
        ingredients: recipe.ingredients,
      }
      console.log(state.recipe);

    }catch(err){
        alert(err);
    }
    
}