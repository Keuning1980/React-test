import React from "react";

import {
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
  Box,
  Divider,
} from "@chakra-ui/react";
import { data } from "../utils/data";

export const RecipePage = ({ item, clickFn }) => {
  // const recipeLabel= data.hits.recipe.label.map

  return (
    <Center bgColor="blue.100" height="vh" flexDirection="column">
      <Card w="3xl">
        {/* <Flex > */}

        <VStack w="full" h="full" p={0} spacing={2} alignItems="flex-start">
          <Button w="fit-content" onClick={() => clickFn()}>
            back
          </Button>

          <Image
            src={item.recipe.image}
            alt="recipe"
            width={"100%"}
            height={"250px"}
          />
          <SimpleGrid padding={10} columns={2} columngap={3} rowGap={20}>
            <Box>
              <Text fontSize={13} color="grey">
                {String(item.recipe.mealType).toUpperCase()}
              </Text>

              <Text fontSize={20}> {item.recipe.label}</Text>

              <Text> cookingtime :{item.recipe.totalTime} minutes</Text>
              <Text> servings :{item.recipe.yield} </Text>

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
                {item.recipe.ingredientLines.map((line, index) => (
                  <Text key={index}>{line}</Text>
                ))}
              </VStack>
            </Box>

            <Box>
              <Text> Health Labels: </Text>
              {item.recipe.healthLabels.map((label, index) => (
                <React.Fragment key={index}>
                  <Text bgColor="purple.200" p={1} display="inline-block">
                    {label}
                  </Text>{" "}
                </React.Fragment>
              ))}
              {/* <Text> Diet: </Text>
              <Text>{item.recipe.dietLabels} </Text> */}
              <Text> Diet: </Text>
              {item.recipe.dietLabels.map((label, index) => (
                <React.Fragment key={index}>
                  <Text bgColor="green.200" p={1} display="inline-block">
                    {label}
                  </Text>{" "}
                </React.Fragment>
              ))}
              <Text> Cautions:</Text>
              <Text>{item.recipe.cautions} </Text>
              <Text>Total Nutrients: </Text>
              CALORIES:{" "}
              {Math.round(item.recipe.totalNutrients.ENERC_KCAL.quantity)}{" "}
              CARBS: {Math.round(item.recipe.totalNutrients.CHOCDF.quantity)}
              PROTEIN: {Math.round(item.recipe.totalNutrients.PROCNT.quantity)}
              FAT: {Math.round(item.recipe.totalNutrients.FAT.quantity)}
              CHOLESTEROL:{" "}
              {Math.round(item.recipe.totalNutrients.CHOLE.quantity)}
              SODIUM {Math.round(item.recipe.totalNutrients.NA.quantity)}
            </Box>
          </SimpleGrid>
        </VStack>
        {/* </Flex> */}
      </Card>
    </Center>
  );
};
