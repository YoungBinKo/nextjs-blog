import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { Link, Text } from "@nextui-org/react";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingLg}>
        <Text css={{ marginBottom:"$3" }}>Hi! This is my website and recipe application.</Text>
        <Text>I'm originally from South Korea and moved to Berlin in 2016. </Text>
        <Text css={{ marginBottom:"$3" }}>Currently, I'm studying IT-Systems Engineering at the Hasso Plattner Institute and will graduate in April 2023.</Text>
        <Text>
          Feel free to reach out to me at{' '} 
          <Link href='mailto:youngbinkoko@gmail.com'>
            youngbinkoko@gmail.com
          </Link>
        </Text>
      </section>
    </Layout>
  );
}