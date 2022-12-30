import { Grid, Text, useTheme, styled } from "@nextui-org/react"
import SliderOfCards from "../SliderOfCards"
import IngredientsTable from "../IngredientsTable"

export default function KnifeCutNoodles() {

  const recipeSteps = [
    {
        title:"Knead dough",
        imgSrc:"/images/cooking/meal2/noodle/noodle1.jpeg",
        text:"Combine flour, salt and water and knead until fully combined."
    },
    {
        title:"Rest",
        imgSrc:"/images/cooking/meal2/noodle/noodle2.jpeg",
        text:"Put it in a container and let it sit for 0.5-1 hour in the fridge."
    },
    {
        title:"Ready to roll",
        imgSrc:"/images/cooking/meal2/noodle/noodle3.jpeg",
        text:"Transfer the dough to a floured surface."
    },
    {
        title:"Roll",
        imgSrc:"/images/cooking/meal2/noodle/noodle4.jpeg",
        text:"Roll the dough as thin as you can go without breaking or to your desired thickness."
    },
    {
        title:"Fold",
        imgSrc:"/images/cooking/meal2/noodle/noodle5.jpeg",
        text:"Fold the dough in sections and make sure to dust the sides with a little flour."
    },
    {
        title:"Cut",
        imgSrc:"/images/cooking/meal2/noodle/noodle7.jpeg",
        text:"Cut all noodles to similar size."
    },
    {
        title:"Boil",
        imgSrc:"/images/cooking/meal2/noodle/noodle.jpeg",
        text:"In a separate pot of boiling water, cook the noodles for 1-3 minute to get rid of excess flour (Without doing this, the soup can become very thick)."
    }
  ]

  const ingredients = [
    {
      key: "1",
      name: "Flour",
      quantity: "2 cups",
      note: "",
    },
    {
        key: "2",
        name: "Salt",
        quantity: "1 tsp",
        note: "",
    },
    {
        key: "3",
        name: "Water",
        quantity: "2/3 cup",
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
          <Title>Knife-cut noodles</Title>
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