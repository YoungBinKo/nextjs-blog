import { Grid, Text, useTheme, styled } from "@nextui-org/react"
import SliderOfCards from "../SliderOfCards"
import IngredientsTable from "../IngredientsTable"

export default function TofuOverRice() {

  const recipeSteps = [
    {
        title:"Prepare tofu",
        imgSrc:"/images/cooking/tofu-rice/tofu/tofu.jpeg",
        text:"A firm tofu will be easier to cook."
    },
    {
        title:"Add tofu",
        imgSrc:"/images/cooking/tofu-rice/tofu/tofu1.jpeg",
        text:"Heat the pan with oil over medium-high heat. Crumble the tofu into the pan."
    },
    {
        title:"Mash tofu",
        imgSrc:"/images/cooking/tofu-rice/tofu/tofu2.jpeg",
        text:"Break tofu into small pieces and stir until no more liquid is visible."
    },
    {
        title:"Dice mushrooms",
        imgSrc:"/images/cooking/tofu-rice/tofu/mushroom.jpeg",
        text:"Dice the mushrooms."
    },
    {
        title:"Add mushrooms",
        imgSrc:"/images/cooking/tofu-rice/tofu/tofu3.jpeg",
        text:"Add diced mushrooms into the pan and stir."
    },
    {
        title:"Prepare sauce",
        imgSrc:"/images/cooking/tofu-rice/tofu/sauce.jpeg",
        text:"While the tofu and mushrooms are cooking, add oyster sauce, (liquid) sugar and soy sauce into a small bowl"
    },
    {
        title:"Grate ginger",
        imgSrc:"/images/cooking/tofu-rice/tofu/sauce1.jpeg",
        text:"Grate or press ginger into sauce."
    },
    {
        title:"Chop spring onion",
        imgSrc:"/images/cooking/tofu-rice/tofu/springonion.jpeg",
        text:"Finely chop spring onions."
    },
    {
        title:"Add sauce",
        imgSrc:"/images/cooking/tofu-rice/tofu/tofu4.jpeg",
        text:"Add sauce and stir until the color distributes and liquid dries away."
    },
    {
        title:"Add spring onions",
        imgSrc:"/images/cooking/tofu-rice/tofu/tofu6.jpeg",
        text:"Add spring onions into pan and stir a few more times."
    },
    {
        title:"Prepare rice",
        imgSrc:"/images/cooking/tofu-rice/tofu/tofu7.jpeg",
        text:"Scoop each portion of rice into a bowl. The rice should fill at most 2/3 of the bowl."
    },
    {
        title:"Finish",
        imgSrc:"/images/cooking/tofu-rice/tofu/tofu8.jpeg",
        text:"Place the tofu over the rice and serve with spoon. While eating, you can either mix everything together or live it separated."
    }
  ]

  const ingredients = [
    {
      key: "1",
      name: "Tofu",
      quantity: "200g",
      note: "Firm, plain tofu; Naturtofu in German",
    },
    {
        key: "2",
        name: "Mushrooms",
        quantity: "100g",
        note: "Your favorite kind e.g. 2 big King oyster mushrooms",
    },
    {
        key: "3",
        name: "Soy sauce",
        quantity: "3.5 tbsp",
        note: "If you use japanese soy sauce, you can add slightly more since it's less salty",
    },
    {
        key: "4",
        name: "Sugar",
        quantity: "1-1.5 tbsp",
        note: "Any type of sugar or sugar substitute. We use a type of liquid sugar",
    },
    {
        key: "5",
        name: "Oyster sauce",
        quantity: "1 tbsp",
        note: "(Optional)",
    },
    {
        key: "6",
        name: "Cooking oil",
        quantity: "2 tbsp",
        note: "Any kind except extra virgin olive oil",
    },
    {
        key: "7",
        name: "Cooked rice",
        quantity: "2 portions",
        note: "",
    },
  ]

  const Title = styled('h2', {
    textAlign: "center",
  })

  return (
    <>
      <Grid.Container gap={0} justify="center">
        <Grid xs={12} css={{ paddingBottom: 0 }}>
          <Title>Stir-fried tofu</Title>
        </Grid>
        <Grid xs={12} css={{ marginBottom: "1rem" }}>
          <IngredientsTable ingredients={ingredients} />
        </Grid>
        <Grid xs={12}>
          <SliderOfCards recipeSteps={recipeSteps} />
        </Grid>
      </Grid.Container>
    </>
  )
}