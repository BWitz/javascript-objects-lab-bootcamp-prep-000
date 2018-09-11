var recipes = {
  
};

function updateObjectWithKeyAndValue(object, key, value) {
  recipes.ingredients = "flour";
  recipes.prop = "1";
  recipes.prop2 = "2";
  return recipes;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  recipes.tools = "spatula"
  
  return recipes;
}

const recipes = { 'tools' : '3'}

destructivelyUpdateObjectWithKeyAndValue(recipes, 'tools', 'spatula');