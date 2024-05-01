import { useState } from "react";
import { RecipePage } from "./pages/RecipePage";

import { RecipeListPage } from "./pages/RecipeListPage";
import { ChakraProvider, Box, CSSReset } from '@chakra-ui/react';

export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState();

  return (
    <>
      <ChakraProvider>
        <CSSReset/>
       <Box bgColor="blue.200" minHeight="100vh" display="flex" flexDirection="column" > {selectedRecipe ? (
          <RecipePage recipe={selectedRecipe} setRecipe={setSelectedRecipe} />
        ) : (
          <>
            <RecipeListPage setRecipe={setSelectedRecipe} />
          </>
        )}
</Box> 

      </ChakraProvider>
    </>
  );
};
