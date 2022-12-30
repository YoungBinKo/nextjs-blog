import { Grid, Text, useTheme, styled } from "@nextui-org/react"
import SliderOfCards from "../SliderOfCards"
import IngredientsTable from "../IngredientsTable"

export default function Rice() {

  const recipeSteps = [
    {
        title:"Gather Ingredients",
        imgSrc:"/images/cooking/tofu-rice/rice/rice1.jpeg",
        text:"Half cup of uncooked rice per portion (makes one cup of rice)"
    },
    {
        title:"Wash rice",
        imgSrc:"/images/cooking/tofu-rice/rice/rice2.jpeg",
        text:"Gently stir the rice with your hand"
    },
    {
        title:"Repeat 4-5 times",
        imgSrc:"/images/cooking/tofu-rice/rice/rice3.jpeg",
        text:"Throw away water and repeat 4-5 times"
    },
    {
        title:"Measure water",
        imgSrc:"/images/cooking/tofu-rice/rice/rice4.jpeg",
        text:"Add rice to the cooking pot and fill with water. A good reference is to touch the rice with your pinky, the water should be level with the first bend."
    },
    {
        title:"Start cooking",
        imgSrc:"/images/cooking/tofu-rice/rice/rice5.jpeg",
        text:"Bring the rice to a boil, then put on the lid and let cook at medium heat for 15 minutes. Finally, turn off the heat and let sit for 10 minutes."
    },
    {
        title:"Stir and serve",
        imgSrc:"/images/cooking/tofu-rice/rice/rice6.jpeg",
        text:"Gently fluff the entire pot of rice and serve"
    }
  ]

  const ingredients = [
    {
      key: "1",
      name: "Uncooked rice",
      quantity: "2 cups",
      note: "Short or medium grain",
    }
  ]

  const Title = styled('h2', {
    textAlign: "center",
  })

  return (
    <>
      <Grid.Container gap={0} justify="center">
        <Grid xs={12}>
          <Title>Rice</Title>
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