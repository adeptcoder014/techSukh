import Head from "next/head";
import Image from "next/image";
import Header from "../components/header";
import { Container } from "@mui/system";
import Hero from "../components/hero";
import { useTheme } from "@mui/system";
import Services from "../components/services";
import Portfolio from "../components/portfolio";
import Testimonials from "../components/testimonial";
import ProjectStats from "../components/projectStats";
import LatestStory from "../components/latestStory";
import Assurance from "../components/assuranceCard";
import Footer from "../components/footer";
import HowItWorks from "../components/howWorks";
import { Box } from "@mui/material";
//===================================================
export default function Home() {
  const theme = useTheme();
  //===================================================
  return (
    <>
      <Header />

      <Container
        maxWidth="xl"
        sx={{
          // backgroundImage: `url("/bg.jpg")`,
          backgroundColor: "#0080FF",
        }}
      >
        <Head>
          <title>CD</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght..300&display=swap"
            rel="stylesheet"
          />
          <meta
            name="google-site-verification"
            content="CAL3__7xZpNYM02GL7PT6D2s3jevwQWx7ZDpkdcm-wk"
          />
        </Head>

        <Hero />
      </Container>
      <Services />
      <Box>
        <HowItWorks />
      </Box>
      <Portfolio />
      <Testimonials />
      <ProjectStats />
      <LatestStory />
      <Assurance />
      <Footer />
    </>
  );
}
