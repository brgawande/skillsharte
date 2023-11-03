import { Box, HStack, Heading, Image, Stack } from "@chakra-ui/react";
import React from "react";
import tickmark from "./../../assets/tickmark.svg";

const Home1 = () => {
  return (
    <Stack
      p={["30px 3%", "30px 5%", "50px 5%", "70px 8%"]}
      justifyContent={"center"}
      alignItems={"center"}
      // border={"2px solid black"}
      direction={["column", "column", "row", "row"]}
    >
      <Box w={["100%", "100%", "30%"]} px={4}>
        <Heading lineHeight={1.3} size={"2xl"}>
          Get Creative With Skillshare
        </Heading>
      </Box>
      <Box px={["4", "4", "10"]}>
        <HStack my={4} alignItems={"center"} spacing={3}>
          <Image src={tickmark} />
          <Heading size={"lg"}>
            Learn creative skills to achieve your personal and professional
            goals.
          </Heading>
        </HStack>
        <HStack my={4} alignItems={"center"} spacing={3}>
          <Image src={tickmark} />
          <Heading size={"lg"}>Tune in and level up at your own pace.</Heading>
        </HStack>
        <HStack my={4} alignItems={"center"} spacing={3}>
          <Image src={tickmark} />
          <Heading size={"lg"}>
            Go from dabbler to master in a matter of hours.
          </Heading>
        </HStack>
        <HStack my={4} alignItems={"center"} spacing={3}>
          <Image src={tickmark} />
          <Heading size={"lg"}>
            Connect with a global community of curious creatives.
          </Heading>
        </HStack>
      </Box>
    </Stack>
  );
};

export default Home1;
