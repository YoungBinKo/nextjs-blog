import { Grid, Text, useTheme, styled } from "@nextui-org/react"
import SliderOfCards from "../../components/SliderOfCards"
import IngredientsTable from "../../components/IngredientsTable"

export default function Meal1() {
  const { theme } = useTheme()

  const recipeSteps = [
    {
      title:"acc",
      imgSrc:"/images/cooking/tofu-rice/rice-1.jpg",
      alt:"1234",
      text:"123344556"
    },
    {
      title:"acc",
      imgSrc:"/images/cooking/tofu-rice/rice-1.jpg",
      alt:"1234",
      text:"123344556"
    },
    {
      title:"acc",
      imgSrc:"/images/cooking/tofu-rice/rice-1.jpg",
      alt:"1234",
      text:"123344556"
    }
  ]

  const ingredients = [
    {
      key: "1",
      name: "Ginger",
      quantity: "1 tbsp",
      note: "Minced",
    },
    {
      key: "2",
      name: "Soy sauce",
      quantity: "2 tbsp",
      note: "",
    },
    {
      key: "3",
      name: "Dark soy sauce",
      quantity: "1 tbsp",
      note: "(Optional) for color",
    },
    {
      key: "4",
      name: "Tofu",
      quantity: "250g",
      note: "Tofu should be firm, crumble easily. E.g. the store-brand tofu from Kaufland or Rewe",
    },
  ]

  const Title = styled('h1', {
    textAlign: "center",
  })

  return (
    <>
      <Grid.Container gap={2} justify="center">
        <Grid xs={12}>
          <Title>Tofu over Rice</Title>
        </Grid>
        <Grid xs={12}>
          <IngredientsTable ingredients={ingredients} />
        </Grid>
        <Grid xs={12}>
          <SliderOfCards recipeSteps={recipeSteps} />
        </Grid>
      </Grid.Container>
    </>
  )
}