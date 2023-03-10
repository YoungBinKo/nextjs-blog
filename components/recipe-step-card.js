import { Card, Col, Row, Button, Text } from "@nextui-org/react";
import SliderSt from '../styles/SliderStyles.module.css'

export default function RecipeStepCard(props) {

  return (
    <Card className={SliderSt.recipeCard}>
      <Card.Header 
        css={{ 
          position: "absolute", 
          zIndex: 1, 
          top: 0,
          bgBlur: "#ffffff66",          
           }}>
        <Col>
          <Text size={12} weight="bold" transform="uppercase" color="black">
            {props.stepNumber}
          </Text>
          <Text h4 color="black">
            {props.title}
          </Text>
        </Col>
      </Card.Header>
      <Card.Body css={{ p: 0 }}>
        <Card.Image
          src={props.imgSrc}
          width="100%"
          height="400px"
          objectFit="cover"
          alt={props.title}
        />
      </Card.Body>
      <Card.Footer
        isBlurred
        css={{
          position: "absolute",
          bgBlur: "#ffffff66",
          borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
          bottom: 0,
          zIndex: 1,
        }}
      >
        <Row>
          <Col>
            <Text color="#000" size={16}>
              {props.text}
            </Text>
          </Col>
        
        </Row>
      </Card.Footer>
    </Card>
  )
}