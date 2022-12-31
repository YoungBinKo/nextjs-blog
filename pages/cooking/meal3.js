import { Grid, Text, useTheme, styled } from "@nextui-org/react"
import Japchae from "../../components/recipes/Japchae"
import KimchiJeon from "../../components/recipes/KimchiJeon"

export default function Meal3() {
  const { theme } = useTheme()

  const Title = styled('h1', {
    paddingBottom: 0,
    marginBottom: 0,
  })

  return (
    <>
      <Grid.Container gap={2} justify="center">
        <Grid xs={12} css={{ paddingBottom: 0 }}>
          <Title>Japchae (glass noodle salad) and Kimchi Jeon (korean pancake)</Title>
        </Grid>
        <Grid xs={12}>
          <Japchae />
        </Grid>
        <Grid xs={12}>
          <KimchiJeon />
        </Grid>
      </Grid.Container>
    </>
  )
}