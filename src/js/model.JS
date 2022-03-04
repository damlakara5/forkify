import { async } from 'regenerator-runtime';
import { API_URL } from './config';
import { getJSON } from './helper';

export const state = {
  recipe: {},
};

// we export it so then we can use it in the controller
export const loadRecipe = async function (id) {
  try {
    const data = await getJSON(`${API_URL}${id}`);
    const { recipe } = data.data;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
  } catch (err) {
    console.error(`${err}👎👎`);
    throw err;
  }
};

//it is going to be called by controller
export const loadSearchResulst = async function (query) {
  try {
    const data = await getJSON(`${API_URL}?search=${query}`);
    console.log(data);
  } catch (err) {
    console.error(`${err}👎👎`);
    //throw the error so in the and we will be able to use it in the controller
    throw err;
  }
};
loadSearchResulst('pizza');
