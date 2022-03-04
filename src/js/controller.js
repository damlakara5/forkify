import * as model from './model.JS';
import recipeView from './views/recipeView';

import 'core-js/stable'; //polyfill everything. to use old browser
import 'regenerator-runtime/runtime'; //pollyfilling asyc await
import { async } from 'regenerator-runtime';
const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;
    recipeView.renderSpinner();
    // Loading recipe
    await model.loadRecipe(id); //it returns promise

    //Rendering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    console.log(err);
    recipeView.renderError();
  }
};

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
};
init();
