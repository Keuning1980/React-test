import React from "react";
import { Center, Heading, Input, VStack, SimpleGrid } from "@chakra-ui/react";
import { data } from "../utils/data";
import { RecipeCard } from "../components/RecipeCard";

export const RecipeSearch = ({ setResults }) => {
  const handleChange = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const matchedRecipes = data.hits.filter(({ recipe }) => {
      const recipeNameMatch = recipe.label.toLowerCase().includes(searchTerm);
      const healthLabelMatch = recipe.healthLabels.some((label) =>
        label.toLowerCase().includes(searchTerm)
      );
      return recipeNameMatch || healthLabelMatch;
    });
    setResults(matchedRecipes);
  };

  return (
    <VStack spacing={4} mb={4}>
      <Center>
        <Heading color="white" as="h2" size="xl">
          WINC Recipe Search
        </Heading>
      </Center>

      <Center>
        <Input
          minWidth="500px"
          bgColor="white"
          placeholder="Search Recipe"
          onChange={handleChange}
        />
      </Center>
    </VStack>
  );
};
