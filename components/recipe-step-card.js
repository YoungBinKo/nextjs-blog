import { Card, Col, Row, Button, Text } from "@nextui-org/react";
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export const RecipeStepCard = (props) => (
  <motion.li className="card" whileHover={{
    position: 'relative',
    zIndex: 1,
    background: 'transparent',
    scale: 1.03  ,
    transition: {
      duration: .2
    }
  }}>
    <Card css={{ w: "100%", h: "100%" }}>
      <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
        <Col>
          <Text size={12} weight="bold" transform="uppercase" color="black">
            {props.stepNumber}
          </Text>
          <Text h3 color="black">
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
          alt={props.imgAlt}
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
            <Text color="#000" size={13}>
              {props.text}
            </Text>
          </Col>
        
        </Row>
      </Card.Footer>
    </Card>
  </motion.li>
);