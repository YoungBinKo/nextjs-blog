import { Grid, Text, useTheme, styled } from "@nextui-org/react"
import SliderOfCards from "../SliderOfCards"
import IngredientsTable from "../IngredientsTable"

export default function SeafoodNoodleSoup() {

    const recipeSteps = [
    {
        title:"Thaw seafood",
        imgSrc:"/images/cooking/meal2/soup/seafood.jpeg",
        text:"If you're using frozen seafood, thaw it in advance."
    },
    {
        title:"Prepare Veggies",
        imgSrc:"/images/cooking/meal2/soup/veg.jpeg",
        text:"Peel and wash."
    },
    {
        title:"Cut",
        imgSrc:"/images/cooking/meal2/soup/veg2.jpeg",
        text:"Cut the veggies into strips and mince garlic."
    },
    {
        title:"Combine ingredients",
        imgSrc:"/images/cooking/meal2/soup/together.jpeg",
        text:"In a pot of boiling vegetable broth or just water, mix in seafood, sliced veggies, minced garlic and soy sauce"
    },
    {
        title:"Add noodles",
        imgSrc:"/images/cooking/meal2/soup/boil.jpeg",
        text:"Add the noodles and cook until the noodles are fully cooked. The cooking time depends on the thickness, so it's best to try it."
    }
  ]

  const ingredients = [
    {
      key: "1",
      name: "Carrot",
      quantity: "1/2 large",
      note: "",
    },
    {
        key: "2",
        name: "Zucchini",
        quantity: "1/3 large",
        note: "",
    },
    {
        key: "3",
        name: "Onion",
        quantity: "1 large or 2 small",
        note: "",
    },
    {
        key: "4",
        name: "Garlic",
        quantity: "2-4 cloves",
        note: "",
    },
    {
        key: "5",
        name: "Seafood",
        quantity: "250g",
        note: "frozen or fresh",
    },
    {
        key: "6",
        name: "Vegetable broth",
        quantity: "for ~1L",
        note: "(Optional but recommended)",
    },
    {
        key: "7",
        name: "Soy sauce",
        quantity: "to taste",
        note: "at most 2 tbsp, if more saltiness is needed, use salt or fish sauce.",
    },
    {
        key: "8",
        name: "Noodles",
        quantity: "2 portions",
        note: "",
    }

  ]

  const Title = styled('h2', {
    textAlign: "center",
  })

  return (
    <>
      <Grid.Container gap={0} justify="center">
        <Grid xs={12}>
          <Title>Soup</Title>
        </Grid>
        <Grid xs={12} css={{ marginBottom: "1rem" }} >
          <IngredientsTable ingredients={ingredients} />
        </Grid>
        <Grid xs={12}>
          <SliderOfCards recipeSteps={recipeSteps} />
        </Grid>
      </Grid.Container>
    </>
  )
}