import { Grid, Text, useTheme } from "@nextui-org/react"
import styled from "styled-components"
import { RecipeStepCard } from "../../components/recipe-step-card"
import CardSlider from "../../components/CardSlider"
import SliderOfCards from "../../components/SliderOfCards"

export default function Meal2() {

  const { theme } = useTheme();

  return (
    <>
      <Grid.Container gap={2} justify="center">
        <Grid xs={12}>
          <Title>Tofu over Rice</Title>
        </Grid>
        <Grid xs={12}>
          <IngredientsSection>
            <Ingredient>
              <Name>Ginger</Name>
              <Quantity>1 tbsp</Quantity>
              <Note>Minced</Note>
            </Ingredient>
          </IngredientsSection>
        </Grid>
        <Grid xs={12}>
          <SliderOfCards />
        </Grid>
      </Grid.Container>
    </>
  )
}

const Title = styled.h1`
  text-align: center;
`

const IngredientsSection = styled.section`
  display: flex;
  flex-flow: column nowrap;
`

const Ingredient = styled.div`
  display: flex;
  flex-flow: row nowrap;
`

const Name = styled.span`
  margin-right: 2em;
`

const Quantity = styled.span`
  margin-right: 4em;
`

const Note = styled.span`

`

const StepsSection = styled.section`
  display: flex;
  flex-flow: column nowrap;
`

const Step = styled.div`
  display: flex:
  flex-flow: row nowrap;
`

const Information = styled.p``