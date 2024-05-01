import React from "react";

import {
  Box,
  Center,
  Container,
  VStack,
  Image,
  Card,
  CardBody,
  Stack,
  Heading,
  Text,
  Flex,
  Button,
  SimpleGrid,
  GridItem,
  Divider,
} from "@chakra-ui/react";

export const RecipePage = ({ recipe, setRecipe }) => {
  return (
    <Container bgColor="blue.200">
      {/* <VStack w="full" h="full" p={0} spacing={2} alignItems="flex-start"> */}
      <Button w="fit-content" onClick={() => setRecipe()}>
        back
      </Button>

      <Image src={recipe.image} alt="recipe" width={"100%"} height={"250px"} />
      <SimpleGrid padding={0} columns={2} columngap={3} rowGap={20}>
        <Box>
          <Text fontSize={13} color="grey">
            {String(recipe.mealType).toUpperCase()}
          </Text>

          <Text fontSize={20}> {recipe.label}</Text>

          <Text> cookingtime :{recipe.totalTime} minutes</Text>
          <Text> servings :{recipe.yield} </Text>

          <Center height="10px">
            <Divider orientation="vertical" />
          </Center>

          <Text fontWeight={"bold"}> Ingredients: </Text>

          <Center height="10px">
            <Divider orientation="vertical" />
          </Center>

          <VStack alignItems="flex-start">
            {" "}
            {/* Verticale stapel voor ingredientLines */}
            {recipe.ingredientLines.map((line, index) => (
              <Text key={index}>{line}</Text>
            ))}
          </VStack>
        </Box>

        <Box>
          <Text> Health Labels: </Text>
          {recipe.healthLabels.map((label, index) => (
            <React.Fragment key={index}>
              <Text bgColor="purple.200" p={1} display="inline-block">
                {label}
              </Text>{" "}
            </React.Fragment>
          ))}
          {/* <Text> Diet: </Text>
              <Text>{recipe.dietLabels} </Text> */}
          <Text> Diet: </Text>
          {recipe.dietLabels.map((label, index) => (
            <React.Fragment key={index}>
              <Text bgColor="green.200" p={1} display="inline-block">
                {label}
              </Text>{" "}
            </React.Fragment>
          ))}
          <Text> Cautions:</Text>
          <Text bgColor="red.200" p={1} display="inline-block">
            {recipe.cautions}{" "}
          </Text>
          <Text>Total Nutrients: </Text>
          CALORIES: {Math.round(recipe.totalNutrients.ENERC_KCAL.quantity)}{" "}
          CARBS: {Math.round(recipe.totalNutrients.CHOCDF.quantity)}
          PROTEIN: {Math.round(recipe.totalNutrients.PROCNT.quantity)}
          FAT: {Math.round(recipe.totalNutrients.FAT.quantity)}
          CHOLESTEROL: {Math.round(recipe.totalNutrients.CHOLE.quantity)}
          SODIUM {Math.round(recipe.totalNutrients.NA.quantity)}
        </Box>
      </SimpleGrid>
      {/* </VStack> */}
      {/* </Flex> */}
    </Container>
  );
};
