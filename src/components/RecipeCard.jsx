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
  Flex,
  Box,
  useBreakpointValue,
} from "@chakra-ui/react";

// ... importeren van de benodigde modules

export const RecipeCard = ({ setRecipe, recipes }) => {
  const handleOpenRecipe = (recipe) => {
    setRecipe(recipe);
  };
  const cardWidth = useBreakpointValue({ base: "100%", md: "50%", lg: "25%" });
  return (
    <Box>
      {recipes.map((recipe, index) => (
        <Card
          key={index}
          onClick={() => handleOpenRecipe(recipe.recipe)}
          borderRadius="xl"
          cursor="pointer"
          _hover={{ transform: "scale(1.01)" }}
          m={2}
          minWidth={{base:"300px", lg:"400px"}}
          maxWidth={{base:"300px", lg:"400px"}}
          minHeight={{base:"300px", lg:"660px"}}
          maxHeight={{base:"660px", lg:"660px"}}
        >
          <Center>
            <CardBody borderRadius="xl" align="center">
              <Stack spacing={4} p={1}>
                <Heading as="h3" size="md"></Heading>
                <Image
                  src={recipe.recipe.image}
                  alt={recipe.recipe.label}
                  h={60}
                  borderRadius="md"
                  objectFit="cover"
                />
                <Text color="grey" textTransform="uppercase">
                  {recipe.recipe.mealType}
                </Text>

                <Heading as="h6" size="md">
                  {recipe.recipe.label}
                </Heading>

                {recipe.recipe.healthLabels ? (
                  <Flex justifyContent="center" mb={2}>
                    {recipe.recipe.healthLabels
                      .filter(
                        (label) => label === "Vegan" || label === "Vegetarian"
                      )
                      .map((label, index) => (
                        <Text key={index} bgColor="purple.200" p={2} mr={2}>
                          {label}
                        </Text>
                      ))}
                  </Flex>
                ) : null}

                <Text>Dish: {recipe.recipe.dishType}</Text>
                <Flex justifyContent="center" mb={2}>
                  {recipe.recipe.dietLabels &&
                    recipe.recipe.dietLabels.map((label, index) => (
                      <Text key={index} bgColor="green.200" p={2} mr={2}>
                        {label}
                      </Text>
                    ))}
                </Flex>
                <Text> Cautions: </Text>
                {recipe.recipe.cautions &&
                  recipe.recipe.cautions.length > 0 && (
                    <Flex justifyContent="center" mb={2}>
                      {recipe.recipe.cautions.map((caution, index) => (
                        <Text key={index} bgColor="red.200" p={2} mr={2}>
                          {caution}
                        </Text>
                      ))}
                    </Flex>
                  )}
              </Stack>
            </CardBody>
          </Center>
        </Card>
      ))}
    </Box>
  );
};
