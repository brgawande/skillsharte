import { Box, Button, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import teamwork from "./../../assets/teamwork.jpg";
import bgline2 from "./../../assets/bgline2.svg";

const HomeTeam = () => {
  return (
    <Box position={"relative"} bgColor={"#002333"}>
      <Stack
        direction={["column", "column", "row", "row"]}
        py={"150px"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        spacing={["5", "5", "20"]}
        px={["2%", "5%", "10%"]}
      >
        <Box flex={"1 1 300px"}>
          <Heading my={6} color={"white"} size={"2xl"}>
            Skillshare for Teams
          </Heading>
          <Text fontSize={"19px"} my={6} color={"white"}>
            Set your team up for success with reimagined learning to empower
            their personal and professional growth.
          </Text>
          <Text fontSize={"19px"} my={6} color={"white"}>
            With inspiring classes on soft skills, business essentials,
            well‑being and more, your whole team will have deep knowledge and
            expertise at their fingertips.
          </Text>
          <Button color={"white"} _hover={{ bg: "none" }} variant={"outline"}>
            Learn More
          </Button>
        </Box>
        <Box
          flex={"1 1 300px"}
          zIndex={10}
          h={"400px"}
          width={"full"}
          bgImage={teamwork}
          bgSize={"cover"}
          bgPosition={"center"}
          color={"white"}
          border={"1px solid black"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"start"}
          justifyContent={"end"}
        ></Box>
      </Stack>
      <Image bottom={0} position={"absolute"} src={bgline2} />
    </Box>
  );
};

export default HomeTeam;
