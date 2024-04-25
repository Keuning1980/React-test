import { useState } from "react";
import { data } from "../utils/data";
import { RecipeCard } from "../components/RecipeCard";
import { RecipeSearch } from "../components/RecipeSearch";

export const RecipeListPage = ({ setRecipe }) => { 
  console.log("ssetRecipe:",{setRecipe})
	const [selectedRecipeList, setSelectedRecipeList] = useState(data.hits);

  const handleSearch = (results) => {
    setSearchResults(results);

 
  };
  console.log(typeof clickFn)
  return (
    <>
      <RecipeSearch onSearch={handleSearch} />
      {/* {searchResults.map((item) => (
        <RecipeCard ={clickFn} item={item} key={item.recipe.label}/> */}
   {/* ))} */}
<RecipeCard setRecipe={setRecipe} recipes={selectedRecipeList} />
   
    </>
  );
};

