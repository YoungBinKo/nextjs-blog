import { NextUIProvider } from '@nextui-org/react';
import { motion } from 'framer-motion';
import { Navbar, Link, Button} from "@nextui-org/react";

function MyApp({ Component, pageProps, router }) {
  return (
    <div>
      <Navbar isCompact isBordered variant="sticky">
        <Navbar.Content enableCursorHighlight activeColor="success" variant="highlight">
          <Navbar.Link href="/">Home</Navbar.Link>
          <Navbar.Link href="/cooking/home">Cooking</Navbar.Link>
        </Navbar.Content>
    </Navbar>
    <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" variants={{
      pageInitial: {
        opacity: 0
      },
      pageAnimate: {
        opacity: 1
      },
    }}>
        <NextUIProvider>
          <Component {...pageProps} />
        </NextUIProvider>
    </motion.div>
    </div>
    
  );
}

export default MyApp;
