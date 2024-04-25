import {
  Center,
  Image,
  Card,
  CardBody,
  Stack,
  Heading,
  Text,
  Flex,
  Button,
} from "@chakra-ui/react";



export const RecipeCard = ({ setRecipe, recipes }) => {

// console.log("recipes:",{recipes})
recipes.map(recipe => console.log("enkel recept:",recipe));


  const Vegan = recipes.recipe.healthLabels?.filter(
    (item) =>
      item.toLowerCase() === "vegan" || item.toLowerCase() === "vegetarian"

  );

  console.log("hello")
  // console.log("clickFn:", clickFn);
  return (
    <>
      <button onClick={ setRecipe}> hello</button>
      <p> {recipes.recipe.label}</p>
      <img src={recipes.recipe.image} width={500} />
      <p>Cautions: {recipes.recipe.cautions} </p>
      <p>{recipes.recipe.mealType} </p>
      <p>{recipes.recipe.dishType} </p>
      <p>{recipes.recipe.healthLabels}</p>
      <p> {Vegan ? Vegan.join(" ") : " "} </p>
      <p>{recipes.recipe.dietLabels ? recipes.recipe.dietLabels.join(" ") : " "} </p>
    </>
  );
};
