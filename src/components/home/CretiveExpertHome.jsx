import { Box, Grid, Heading, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import lovebabbar from "./../../assets/lovebabbar.jpeg";
import packprogrammer from "./../../assets/6packprogrammer.jpg";
import codewithharry from "./../../assets/codewithharry.webp";
import roadsidecoder from "./../../assets/roadsidecoder.png";
import javascriptmastery1 from "./../../assets/jsmastery.jpg";
import shreyainscoding from "./../../assets/shreyainscodeing.jpg";
import bgline5 from "./../../assets/bgline5.svg";

const CretiveExpertHome = () => {
  return (
    <Box py={20} bgColor={"#002333"} position={"relative"}>
      <Image
        zIndex={1}
        position={"absolute"}
        bottom={"-90"}
        left={"-85px"}
        src={bgline5}
      />
      <VStack>
        <VStack p={["0 5%", "0 10%", "0 25%"]}>
          <Heading my={4} size={"2xl"} color={"white"} textAlign={"center"}>
            Learn from Creative Experts
          </Heading>
          <Text fontSize={"25px"} color={"white"} textAlign={"center"}>
            Skillshare classes are taught by industry leaders excited to share
            their tools, techniques, and professional journeys with you.
          </Text>
        </VStack>
        <Grid
          my={4}
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
          ]}
          p={["10px 3%", "10px 6%", "10px 15%"]}
          gap={2}
          w={"100%"}
          // border={"2px solid white"}
        >
          <Box
            h={"300px"}
            bgImage={lovebabbar}
            bgSize={"cover"}
            bgPosition={"center"}
            color={"white"}
            border={"1px solid black"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"start"}
            justifyContent={"end"}
          >
            <Box
              h={"150px"}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"start"}
              justifyContent={"end"}
              p={"20px"}
              w={"full"}
              bgGradient="linear(to-b,rgba(255, 255, 255, 0), rgba(0, 0, 0, 1))"
            >
              <Heading>Love Babbar</Heading>
              <Text>Ex-Amazon</Text>
            </Box>
          </Box>
          <Box
            h={"300px"}
            bgImage={packprogrammer}
            bgSize={"cover"}
            bgPosition={"center"}
            color={"white"}
            border={"1px solid black"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"start"}
            justifyContent={"end"}
          >
            <Box
              h={"150px"}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"start"}
              justifyContent={"end"}
              p={"20px"}
              w={"full"}
              bgGradient="linear(to-b,rgba(255, 255, 255, 0), rgba(0, 0, 0, 1))"
            >
              <Heading>6 Pack Programmer</Heading>
              <Text>Ex-Amazon</Text>
            </Box>
          </Box>
          <Box
            h={"300px"}
            bgImage={codewithharry}
            bgSize={"cover"}
            bgPosition={"center"}
            color={"white"}
            border={"1px solid black"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"start"}
            justifyContent={"end"}
          >
            <Box
              h={"150px"}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"start"}
              justifyContent={"end"}
              p={"20px"}
              w={"full"}
              bgGradient="linear(to-b,rgba(255, 255, 255, 0), rgba(0, 0, 0, 1))"
            >
              <Heading>Code With Harry</Heading>
              <Text>Ex-Amazon</Text>
            </Box>
          </Box>
          <Box
            h={"300px"}
            bgImage={roadsidecoder}
            bgSize={"cover"}
            bgPosition={"center"}
            color={"white"}
            border={"1px solid black"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"start"}
            justifyContent={"end"}
          >
            <Box
              h={"150px"}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"start"}
              justifyContent={"end"}
              p={"20px"}
              w={"full"}
              bgGradient="linear(to-b,rgba(255, 255, 255, 0), rgba(0, 0, 0, 1))"
            >
              <Heading>RoadSide Coder</Heading>
              <Text>Ex-Amazon</Text>
            </Box>
          </Box>
          <Box
            zIndex={10}
            h={"300px"}
            bgImage={javascriptmastery1}
            bgSize={"cover"}
            bgPosition={"center"}
            color={"white"}
            border={"1px solid black"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"start"}
            justifyContent={"end"}
          >
            <Box
              h={"150px"}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"start"}
              justifyContent={"end"}
              p={"20px"}
              w={"full"}
              bgGradient="linear(to-b,rgba(255, 255, 255, 0), rgba(0, 0, 0, 1))"
            >
              <Heading>JavaScript Mastery</Heading>
              <Text>Ex-Amazon</Text>
            </Box>
          </Box>
          <Box
            zIndex={10}
            h={"300px"}
            bgImage={shreyainscoding}
            bgSize={"cover"}
            bgPosition={"center"}
            color={"white"}
            border={"1px solid black"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"start"}
            justifyContent={"end"}
          >
            <Box
              h={"150px"}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"start"}
              justifyContent={"end"}
              p={"20px"}
              w={"full"}
              bgGradient="linear(to-b,rgba(255, 255, 255, 0), rgba(0, 0, 0, 1))"
            >
              <Heading>Shreyains Coding</Heading>
              <Text>Ex-Amazon</Text>
            </Box>
          </Box>
        </Grid>
      </VStack>
    </Box>
  );
};

export default CretiveExpertHome;
