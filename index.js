var recipes = {
  
};

function updateObjectWithKeyAndValue(object, key, value) {
  recipes.ingredients = "flour";
  recipes.prop = "1";
  recipes.prop2 = "2";
  return recipes;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
 
  return object;
}

destructivelyUpdateObjectWithKeyAndValue(recipes, 'prop', '1');
destructivelyUpdateObjectWithKeyAndValue(recipes, 'prop', '2');

function deleteFromObjectByKey(object, key) {
  var recipes = {
      ingredients : flour,
      prop : 1,
      prop2 : 2
  }
  var newRecipes = Object.assign({}, recipes)
  
  newRecipes;
  
  delete newRecipes.prop;
  
  newRecipes;
  
  recipes;
}