import RecipeStepCard from "./recipe-step-card"
import SliderSt from "../styles/SliderStyles.module.css"

function SliderOfCards() {
  return (
    <div className={SliderSt.CardsGroup}>
        <RecipeStepCard
            stepNumber={1}
            title={"Wash rice"}
            imgSrc={"/images/cooking/tofu-rice/rice-1.jpg"}
            imgAlt={"Washing rice"}
            text={"First wash the rice under cold water, draining it several times until the water is clear."} 
        />
        <RecipeStepCard
            stepNumber={2}
            title={"Wash rice"}
            imgSrc={"/images/cooking/tofu-rice/rice-1.jpg"}
            imgAlt={"Washing rice"}
            text={"First wash the rice under cold water, draining it several times until the water is clear."} 
        />
        <RecipeStepCard
            stepNumber={3}
            title={"Wash rice"}
            imgSrc={"/images/cooking/tofu-rice/rice-1.jpg"}
            imgAlt={"Washing rice"}
            text={"First wash the rice under cold water, draining it several times until the water is clear."} 
        />
        <RecipeStepCard
            stepNumber={3}
            title={"Wash rice"}
            imgSrc={"/images/cooking/tofu-rice/rice-1.jpg"}
            imgAlt={"Washing rice"}
            text={"First wash the rice under cold water, draining it several times until the water is clear."} 
        />
        <RecipeStepCard
            stepNumber={3}
            title={"Wash rice"}
            imgSrc={"/images/cooking/tofu-rice/rice-1.jpg"}
            imgAlt={"Washing rice"}
            text={"First wash the rice under cold water, draining it several times until the water is clear."} 
        />
        <RecipeStepCard
            stepNumber={3}
            title={"Wash rice"}
            imgSrc={"/images/cooking/tofu-rice/rice-1.jpg"}
            imgAlt={"Washing rice"}
            text={"First wash the rice under cold water, draining it several times until the water is clear."} 
        />
    </div>
  )
}

export default SliderOfCards