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
 
  return obj;
}

destructivelyUpdateObjectWithKeyAndValue(recipes, 'prop', '1');
destructivelyUpdateObjectWithKeyAndValue(recipes, 'prop', '2');