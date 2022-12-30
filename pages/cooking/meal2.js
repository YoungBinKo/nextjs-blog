import { Grid, Text, useTheme, styled } from "@nextui-org/react"
import KnifeCutNoodles from "../../components/recipes/KnifeCutNoodles"
import SeafoodNoodleSoup from "../../components/recipes/SeafoodNoodleSoup"

export default function Meal2() {
  const { theme } = useTheme()

  const Title = styled('h1', {
    paddingBottom: 0,
    marginBottom: 0,
  })

  return (
    <>
      <Grid.Container gap={2} justify="center">
        <Grid xs={12} css={{ paddingBottom: 0 }}>
          <Title>Seafood noodle soup</Title>
        </Grid>
        <Grid xs={12}>
          <KnifeCutNoodles />
        </Grid>
        <Grid xs={12}>
          <SeafoodNoodleSoup />
        </Grid>
      </Grid.Container>
    </>
  )
}