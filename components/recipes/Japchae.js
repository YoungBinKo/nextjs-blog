import { Grid, Text, useTheme, styled } from "@nextui-org/react"
import SliderOfCards from "../SliderOfCards"
import IngredientsTable from "../IngredientsTable"

export default function Japchae() {

  const recipeSteps = [
    {
        title:"Soak the glass noodles",
        imgSrc:"/images/cooking/meal3/japchae/1.jpeg",
        text:"Soak the glass noodles fully in cold water for at least 30 minutes."
    },
    {
        title:"Prepare veggies",
        imgSrc:"/images/cooking/meal3/japchae/2.jpeg",
        text:"Gather all veggies."
    },
    {
        title:"Cut into strips",
        imgSrc:"/images/cooking/meal3/japchae/4.jpeg",
        text:"Cut all the veggies into strips as pictured."
    },
    {
        title:"Fry in the pan",
        imgSrc:"/images/cooking/meal3/japchae/6.jpeg",
        text:"Fry the cut veggies in a pan with oil. Sprinkle in some salt. You can fry all together but keep in mind harder veggies like carrots take longer to cook than zucchini."
    },
    {
        title:"Transfer to a large bowl",
        imgSrc:"/images/cooking/meal3/japchae/8.jpeg",
        text:"When all the vegetables are cooked, move them to a salad bowl."
    },
    {
        title:"Boil noodles",
        imgSrc:"/images/cooking/meal3/japchae/9.jpeg",
        text:"When the glass noodles look soft enough like photo, cook the noodles in boiling water for about 3-4 minutes, then drain and rince with cold water."
    },
    {
        title:"Fry the noodles",
        imgSrc:"/images/cooking/meal3/japchae/10.jpeg",
        text:"Fry the noodles in a pan with enough oil, soy sauce and sugar until the noodles are fully cooked. The oil will prevent the noodles from sticking together."
    },
    {
        title:"Mix together",
        imgSrc:"/images/cooking/meal3/japchae/11.jpeg",
        text:"Place the noodles into the bowl with veggies and mix well. Add sesame oil and soy sauce to taste."
    }
  ]

  const ingredients = [
    {
        key: "1",
        name: "Korean glass noodle",
        quantity: "500g",
        note: "",
    },
    {
        key: "2",
        name: "Vegetables",
        quantity: "as much as you want",
        note: "Good options are carrots, onions, bell peppers, zucchini, mushrooms, spinich, etc.",
    },
    {
        key: "3",
        name: "Protein",
        quantity: "",
        note: "(Optional) Tofu, scrambled egg, sliced beef, etc.",
    },
    {
        key: "4",
        name: "Soy sauce",
        quantity: "8 tbsp",
        note: "Every soy sauce has diffrent saltiness. Best to start with less and add more later based on your preferred saltiness level.",
    },
    {
        key: "5",
        name: "Sugar",
        quantity: "6-8 tbsp",
        note: "Any type of sugar or sugar substitute. It should be the same or a little less than the soy sauce amount that you put.",
    },
    {
        key: "6",
        name: "Sesame Oil",
        quantity: "4-6 tbsp",
        note: "We used korean sesame oil which made from roasted sesame seeds.",
    },
    
  ]

  const Title = styled('h2', {
    textAlign: "center",
  })

  return (
    <>
      <Grid.Container gap={0} justify="center">
        <Grid xs={12}>
          <Title>Japchae</Title>
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