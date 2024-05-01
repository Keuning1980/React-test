import { useState } from "react";
import { RecipePage } from "./pages/RecipePage";
import { ChakraProvider } from "@chakra-ui/react";
import { RecipeListPage } from "./pages/RecipeListPage";

export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState();

  return (
    <>
      <ChakraProvider>
        {selectedRecipe ? (
          <RecipePage recipe={selectedRecipe} setRecipe={setSelectedRecipe} />
        ) : (
          <>
            <RecipeListPage setRecipe={setSelectedRecipe} />
          </>
        )}
      </ChakraProvider>
    </>
  );
};
