import { Grid, Text, useTheme, styled } from "@nextui-org/react"
import SliderOfCards from "../SliderOfCards"
import IngredientsTable from "../IngredientsTable"

export default function KimchiJeon() {

  const recipeSteps = [
    {
        title:"Place powder in a bowl",
        imgSrc:"/images/cooking/meal3/kimchi-jeon/1.jpeg",
        text:"Place flour, any kind of starch and salt in a big bowl."
    },
    {
        title:"Alternative",
        imgSrc:"/images/cooking/meal3/kimchi-jeon/jeon-mix.jpeg",
        text:"This is the product that we use normally for the batter."
    },
    {
        title:"Mix with cold water",
        imgSrc:"/images/cooking/meal3/kimchi-jeon/2.jpeg",
        text:"Whisk well with cold water until no clumps remain. Colder water makes the Jeon more crispy."
    },
    {
        title:"Put Kimchi",
        imgSrc:"/images/cooking/meal3/kimchi-jeon/3.jpeg",
        text:"Put Kimchi and chili powder into the batter. If the kimchi is not sour, you can add 1-2 tsp of vinegar"
    },
    {
        title:"Mix well",
        imgSrc:"/images/cooking/meal3/kimchi-jeon/5.jpeg",
        text:"Mix well and you can add spring onions now."
    },
    {
        title:"Fry",
        imgSrc:"/images/cooking/meal3/kimchi-jeon/6.jpeg",
        text:"Heat up the pan with enough oil to cover the surface. Scoop the batter into the pan"
    },
    {
        title:"Make thin",
        imgSrc:"/images/cooking/meal3/kimchi-jeon/7.jpeg",
        text:"Spread the batter into a thin layer using the scoop."
    },
    {
        title:"Flip",
        imgSrc:"/images/cooking/meal3/kimchi-jeon/9.jpeg",
        text:"When the bottom is cooked, flip the jeon and add some oil if needed."
    },
    {
        title:"Serve",
        imgSrc:"/images/cooking/meal3/kimchi-jeon/10.jpeg",
        text:"When both sides of the Jeon are crispy enough, it is ready to serve. It can be served with soy sauce on the side to dip in."
    },
  ]

  const ingredients = [
    {
      key: "1",
      name: "Flour and starch",
      quantity: "200g",
      note: "It can be like 180g of flour and 20g of starch. Or you can use Jeon-mix flour 200g.",
    },
    {
        key: "2",
        name: "Water",
        quantity: "260g",
        note: "If the batter looks thicker than the photo, add some more water. If can vary based on flour type.",
    },
    {
        key: "3",
        name: "Chili powder",
        quantity: "1 tbsp",
        note: "",
    },
    {
        key: "4",
        name: "Kimchi",
        quantity: "300g",
        note: "",
    },
    {
        key: "5",
        name: "Spring onion",
        quantity: "1",
        note: "either chopped finely or sliced into finger-length pieces.",
    }
  ]

  const Title = styled('h2', {
    textAlign: "center",
  })

  return (
    <>
      <Grid.Container gap={0} justify="center">
        <Grid xs={12}>
          <Title>Kimchi-Jeon</Title>
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