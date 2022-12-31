import { Card, Col, Row, Text } from "@nextui-org/react";
import { motion } from 'framer-motion';

export const Card3 = () => (
  <motion.div className="card" whileHover={{
    position: 'relative',
    zIndex: 1,
    background: 'transparent',
    scale: 1.03  ,
    transition: {
      duration: .5
    }
  }}>
      <Card css={{ w: "100%", h: "100%" }}>
        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
          <Col>
            <Text size={12} weight="bold" transform="uppercase" color="#444444">
              Meal 3
            </Text>
            <Text h3 color="#444444">
              Japchae and Kimchi-Jeon
            </Text>
          </Col>
        </Card.Header>
        <Card.Body css={{ p: 0 }}>
          <Card.Image
            src="/images/meal_3.jpeg"
            width="100%"
            height="100%"
            objectFit="cover"
            alt="meal3"
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
                Prep time: 1h
              </Text>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
  </motion.div>
);