import { Grid, Text, useTheme, styled } from "@nextui-org/react"
import Rice from "../../components/recipes/Rice"
import TofuOverRice from "../../components/recipes/TofuOverRice"

export default function Meal1() {
  const { theme } = useTheme()

  const Title = styled('h1', {
    paddingBottom: 0,
    marginBottom: 0,
  })

  return (
    <>
      <Grid.Container gap={2} justify="center">
        <Grid xs={12} css={{ paddingBottom: 0 }}>
          <Title>Tofu over Rice</Title>
        </Grid>
        <Grid xs={12}>
          <Rice />
        </Grid>
        <Grid xs={12}>
          <TofuOverRice />
        </Grid>
      </Grid.Container>
    </>
  )
}