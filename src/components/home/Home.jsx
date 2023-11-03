import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

import CodePic from "../../assets/codepic.jpg";
import gitrlPic1 from "../../assets/girlpic1done.jpg";
import gitrlPic2 from "../../assets/girlpic2dome.jpg";
import gitrlPic3 from "../../assets/girlpic3.jpg";
import mern from "../../assets/mern.jpg";
// import laptopcode from "../../assets/laptopcode.jpg";
import dsa from "../../assets/dsaposter.jpg";
import Home1 from "./Home1";
import CretiveExpertHome from "./CretiveExpertHome";
import Testimonial from "./Testimonial";
import HomeTeam from "./HomeTeam";
import Faq from "./Faq";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box>
      <Grid
        bgColor={"blackAlpha.900"}
        templateColumns={["repeat(6, 1fr)"]}
        gap={1}
      >
        <GridItem
          rowSpan={2}
          colSpan={2}
          border={"2px solid black"}
          h={"460px"}
          bgImage={CodePic}
          bgSize={"cover"}
          bgPosition={"center"}
        ></GridItem>
        <GridItem
          border={"2px solid black"}
          h={"200px"}
          colSpan={2}
          bgImage={mern}
          bgSize={"cover"}
          bgPosition={"20% -23%"}
        ></GridItem>

        <GridItem
          rowSpan={2}
          colSpan={2}
          border={"2px solid black"}
          // h={"150px"}
          bgImage={gitrlPic1}
          bgSize={"cover"}
          bgPosition={"center"}
        ></GridItem>
        <GridItem
          colSpan={2}
          rowSpan={2}
          border={"2px solid black"}
          bgColor={"whiteAlpha.900"}
        >
          <VStack px={4} pt={6}>
            <Heading color={"blackAlpha.900"} my={"4"} textAlign={"center"}>
              The Ultimate Guide <br /> Full Stack <br /> Web Development
            </Heading>
            <Heading
              color={"blackAlpha.900"}
              textAlign={"center"}
              lineHeight={1.5}
              size={"md"}
            >
              Imporve Your Login By Building <br /> Real World Projects
            </Heading>
            <Link to={"/subscribe"}>
              <Button
                fontWeight={"bold"}
                color={"black"}
                mt={5}
                px={20}
                colorScheme="whatsapp"
              >
                Start Learning Today
              </Button>
            </Link>
            <Heading
              color={"blackAlpha.900"}
              my={1}
              textAlign={"center"}
              lineHeight={1.5}
              size={"sm"}
            >
              Get 7 Free Days of Skill Share
            </Heading>
            <Text
              color={"blackAlpha.900"}
              my={2}
              mx={8}
              fontSize={"13px"}
              textAlign={"center"}
            >
              By signing up you agree to Skillshare's Terms of Service and
              Privacy Policy, and agree to receive marketing communications from
              Skillshare at the email address provided. This page is protected
              by reCAPTCHA and is subject to Google's Terms of Service and
              Privacy Policy.
            </Text>
          </VStack>
        </GridItem>
        <GridItem
          rowSpan={2}
          colSpan={2}
          border={"2px solid black"}
          h={"400px"}
          bgImage={gitrlPic3}
          bgSize={"cover"}
          bgPosition={"center"}
        ></GridItem>
        <GridItem
          rowSpan={2}
          colSpan={2}
          border={"2px solid black"}
          h={"400px"}
          bgImage={gitrlPic2}
          bgSize={"cover"}
          bgPosition={"center"}
        ></GridItem>
        <GridItem
          colSpan={2}
          bgImage={dsa}
          bgSize={"cover"}
          bgPosition={"center center"}
          border={"2px solid black"}
          h={"150px"}
        ></GridItem>
      </Grid>
      <Home1 />
      <CretiveExpertHome />
      <Testimonial />
      <HomeTeam />
      <Faq />
    </Box>
  );
};

export default Home;
