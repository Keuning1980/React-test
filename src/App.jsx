import { useState } from "react";
import { RecipePage } from "./pages/RecipePage";
import { ChakraProvider } from "@chakra-ui/react";

import { RecipeListPage } from "./pages/RecipeListPage";


export const App = () => {
  // const [selectItem, setSelectedItem] = useState();
  const [selectedRecipe, setSelectedRecipe] = useState();
  //  const item=data.hits[7]
  return (
    
    <>
      <ChakraProvider>
        {/* {selectItem ? (
          <RecipePage item={selectItem} clickFn={setSelectedItem} />
        ) : (



          <RecipeListPage  clickFn={setSelectedItem} />
        )} */}

{selectedRecipe ? (
    <RecipeListPage recipe={selectedRecipe} setRecipe={setSelectedRecipe} />
) : (
<>
    <RecipeListPage setRecipe={setSelectedRecipe} />
</>
)}




      </ChakraProvider>
    </>
  );
};
