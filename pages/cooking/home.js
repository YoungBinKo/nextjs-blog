import { Grid } from "@nextui-org/react";
import { RecipeCard } from '../../components/card';
import { Card2 } from '../../components/card2';
import { Card3 } from '../../components/card3';

export default function CookingHome() {
  return (
    <Grid.Container gap={2} justify="center">
      <Grid xs={12} sm={4}>
        <RecipeCard />
      </Grid>
      <Grid xs={12} sm={4}>
        <Card2 />
      </Grid>
      <Grid xs={12} sm={4}>
        <Card3 />
      </Grid>
      
    </Grid.Container>
  );
}