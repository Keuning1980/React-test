// import { Textinput } from "./ui/textInput";
import { Input } from '@chakra-ui/react';
import { useState } from "react";
import { data } from "../utils/data";
import { RecipeCard } from "./RecipeCard";

export const RecipeSearch = () => {
  const [searchField, setSearchField] = useState(" ");

  const handleChange = (event) => {
	console.log("event:",event)
    setSearchField(event.target.value);
  };

  const searchResult = data.hits.filter((item) => {
    return item.recipe.label.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
    <>
      <label> Search recipe</label>
      <Input onChange={handleChange} />
      <p> {searchField} </p>
      {searchResult.map((item) => (
        <RecipeCard key={item.recipe.label} item={item} />
      ))}
    </>
  );
};