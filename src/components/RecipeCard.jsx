import React from "react";
import {
  Stack,
  Card,
  CardBody,
  Image,
  Heading,
  Text,
  Center,
  SimpleGrid,
} from "@chakra-ui/react";

export const RecipeCard = ({ setRecipe, recipes }) => {
  const handleOpenRecipe = (recipe) => {
    setRecipe(recipe);
  };

  return (
    <SimpleGrid minChildWidth={4}>
      {recipes.map((recipe, index) => (
        <Card
       
          key={index}
          onClick={() => handleOpenRecipe(recipe.recipe)}
          borderRadius="xl"
          cursor="pointer"
          _hover={{ transform: "scale(1.01)" }}
          m={2}
          minWidth="400px"
          maxWidth="400px"
          minHeight="600px"
          maxHeight="600px"

        >
          <Center> 
          <CardBody borderRadius="xl"  
           align="center"
          
          
          >
            <Stack spacing={4} p={1}>
              <Heading as="h3" size="md"></Heading>
              <Image
                src={recipe.recipe.image}
                alt={recipe.recipe.label}
                h={60}
                borderRadius="md"
                objectFit="cover"
              />
             
            
              <Text>Meal Type: {recipe.recipe.mealType}</Text>

              <Heading as="h6" size="md">
                {" "}
                {recipe.recipe.label}{" "}
              </Heading>




              
              <Text key={index} bgColor="purple.200" p={0} >
                {recipe.recipe.healthLabels
                  ? recipe.recipe.healthLabels
                      .filter(
                        (label) => label === "Vegan" || label === "Vegetarian"
                      )
                      .join(", ")
                  : ""}
              </Text>

             
             
              <Text>Dish:  {recipe.recipe.dishType}</Text>
             
              <Text>
                {recipe.recipe.dietLabels
                  ? recipe.recipe.dietLabels.join(" ")
                  : ""}
              </Text>


              <Text>Cautions:</Text> <Text> {recipe.recipe.cautions ? recipe.recipe.cautions.join (" "): "" }</Text>

            
            </Stack>
          </CardBody>
          </Center>
        </Card>
      ))}
    </SimpleGrid>
  );
};
