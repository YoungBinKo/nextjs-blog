import { Grid } from "@nextui-org/react";
import { RecipeCard } from '../../components/card';
import { Card2 } from '../../components/card2';
import { Card3 } from '../../components/card3';

export default function CookingHome() {
  return (
    <Grid.Container gap={2} justify="center">
      <Grid sm={12}>
        <h1>
          Merry Christmas🎅🤶🏽
        </h1>
      </Grid>
      <Grid sm={12}>
        <h3>
          Here's hoping the year ahead is filled with love, joy and good memories!💕 
          <br />
          I want to share some of our favorite meals so that you can also enjoy them. I'm still working on the recipes and they will be available soon. 🫶 
        </h3>
      </Grid>
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