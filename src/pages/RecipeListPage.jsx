import React from "react";
import { useState } from "react";
import { data } from "../utils/data";
import { RecipeCard } from "../components/RecipeCard";
import { RecipeSearch } from "../components/RecipeSearch";
import { Center, Flex, Box } from "@chakra-ui/react";

export const RecipeListPage = ({ setRecipe }) => {
  const [selectedRecipeList, setSelectedRecipeList] = useState(data.hits);

  return (
    <>
      <Center bgColor="blue.200" m={0} p={0}> 
        <RecipeSearch setResults={setSelectedRecipeList} />
      </Center>

      <Flex
     bgColor="blue.200"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="flex-start"
        spacing={4}
      >
        {selectedRecipeList.map((recipe, index) => (
          <RecipeCard key={index} setRecipe={setRecipe} recipes={[recipe]} />
        ))}
      </Flex>
    </>
  );
};
