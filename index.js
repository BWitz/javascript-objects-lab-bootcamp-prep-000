var recipes = {
  
};

function updateObjectWithKeyAndValue(object, key, value) {
  recipes.ingredients = "flour";
  recipes.prop = "1";
  recipes.prop2 = "2";
  return recipes;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  recipes.prop = "1",
  recipes.prop = "2"
  
  return recipes;
}

destructivelyUpdateObjectWithKeyAndValue(recipes, 'tools', 'spatula');