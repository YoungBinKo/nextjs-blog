import { Card, Col, Row, Button, Text } from "@nextui-org/react";
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export const Card2 = () => (
  <motion.li className="card" whileHover={{
    position: 'relative',
    zIndex: 1,
    background: 'transparent',
    scale: 1.03  ,
    transition: {
      duration: .2
    }
  }}>
    <Link href="/cooking/meal2">
      <Card css={{ w: "100%", h: "100%" }}>
        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
          <Col>
            <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
              Meal 2
            </Text>
            <Text h3 color="#ffffffAA">
              Seafood noodle soup
            </Text>
          </Col>
        </Card.Header>
        <Card.Body css={{ p: 0 }}>
          <Card.Image
            src="/images/cooking/IMG_1285.jpeg"
            width="100%"
            height="100%"
            objectFit="cover"
            alt="meal1"
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
    </Link>
  </motion.li>
);