import { Grid, Link, Button } from "@nextui-org/react";
import { RecipeCard } from '../../components/card';
import { Card2 } from '../../components/card2';
import { Card3 } from '../../components/card3';

export default function CookingHome() {
  const HeartIcon = ({
    fill = 'currentColor',
    filled,
    size,
    height,
    width,
    label,
    ...props
  }) => {
    return (
      <svg
        width={size || width || 24}
        height={size || height || 24}
        viewBox="0 0 24 24"
        fill={filled ? fill : 'none'}
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12Z"
          stroke={fill}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };
  return (
    <Grid.Container gap={2} justify="center">
      <Grid sm={12}>
        <h1>
          Happy New Year 2023!🎇🥂
        </h1>
      </Grid>
      <Grid sm={12}>
        <h3>
          Here's hoping the year ahead is filled with love, joy and good memories!💕 
          <br />
          I want to share some of our favorite meals so that you can also enjoy them.
          <br />
          If you are enjoying our recipe project, feel free to contribute to our challenge on ShareTheMeal to prove the meals around the world for those in need.
        </h3>
      </Grid>
      <Grid xs={12}>
        <Link href="https://sharethemeal.org/challenges/e8d5be81-8e76-44ad-9b2c-054b9364c2a9_youngbinko.com-Recip?adjust_t=siep6tc&hl=en-GB">
          <Button rounded auto color="error" icon={<HeartIcon fill="currentColor" filled />}>
            Our ShareTheMeal challenge
          </Button>
        </Link>  
      </Grid>
      <Grid xs={12} sm={4}>
        <Link href="/cooking/meal1">
          <RecipeCard />
        </Link>
      </Grid>
      <Grid xs={12} sm={4}>
        <Link href="/cooking/meal2">
          <Card2 />
        </Link>
      </Grid>
      <Grid xs={12} sm={4}>
        <Card3 />
      </Grid>
      
    </Grid.Container>
  );
}