import { Grid, styled } from "@nextui-org/react";
import RecipeStepCard from "./recipe-step-card"

function SliderOfCards(props) {
  const recipeSteps = props.recipeSteps

  const CardGroup = styled("div", {
    overflowX: "auto",
    display: "grid",
    gridTemplateColumns: "repeat(" + recipeSteps.length +",1fr)",
    columnGap: "0.6rem",
    rowGap: "0.6rem",
    scrollSnapType: "x mandatory"
  })

  const recipeStepCards = recipeSteps.map((step, index) =>
    <RecipeStepCard
      stepNumber={index+1}
      title={step.title}
      imgSrc={step.imgSrc}
      imgAlt={step.alt}
      text={step.text} 
    />
  )

  return (
    <Grid.Container>
      <Grid xs={12} css={{ paddingBottom: 0 }}>
          <h4>Steps</h4>
      </Grid> 
      <Grid xs={12}>
        <CardGroup>
            {recipeStepCards}
        </CardGroup>
      </Grid>
    </Grid.Container>
  )
}

export default SliderOfCards