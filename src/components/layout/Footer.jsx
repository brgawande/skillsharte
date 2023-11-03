import {
  Box,
  Button,
  Grid,
  HStack,
  Heading,
  Image,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import googleplay from "./../../assets/playstore.svg";
import macstore from "./../../assets/macstore.svg";
import { GrFacebookOption } from "react-icons/gr";
import { BsTwitter } from "react-icons/bs";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { BsPinterest } from "react-icons/bs";

const Footer = () => {
  return (
    <VStack
      pt={"6"}
      bgColor={"#002333"}
      p={["10px 2%", "10px 5%", "10px 7%", "10px 12%"]}
    >
      <Box width={"full"}>
        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(2, 1fr)",
            "repeat(4, 1fr)",
          ]}
          pb={6}
        >
          <Box color={"white"}>
            <Heading my={6} size={"md"}>
              Company
            </Heading>
            <Heading my={2} size={"xs"}>
              About
            </Heading>
            <Heading my={2} size={"xs"}>
              Profile
            </Heading>
            <Heading my={2} size={"xs"}>
              Courses
            </Heading>
            <Heading my={2} size={"xs"}>
              Press
            </Heading>
            <Heading my={2} size={"xs"}>
              Blogs
            </Heading>
            <Heading my={2} size={"xs"}>
              Affiliates
            </Heading>
            <Heading my={2} size={"xs"}>
              Partnership
            </Heading>
          </Box>

          <Box color={"white"}>
            <Heading my={6} size={"md"}>
              Community
            </Heading>
            <Heading my={2} size={"xs"}>
              Team Plan
            </Heading>
            <Heading my={2} size={"xs"}>
              Refer a Friend
            </Heading>
            <Heading my={2} size={"xs"}>
              Limited Membership
            </Heading>
            <Heading my={2} size={"xs"}>
              Scholarship
            </Heading>
            <Heading my={2} size={"xs"}>
              Free Classes
            </Heading>
          </Box>
          <Box color={"white"}>
            <Heading my={6} size={"md"}>
              Teaching
            </Heading>
            <Heading my={2} size={"xs"}>
              Become a Teacher
            </Heading>
            <Heading my={2} size={"xs"}>
              Teacher Help Center
            </Heading>
            <Heading my={2} size={"xs"}>
              Teacher Rules And Requirements
            </Heading>
          </Box>
          <Box color={"white"}>
            <Heading my={6} size={"md"}>
              Mobile
            </Heading>
            <Image src={googleplay} />
            <Image my={4} src={macstore} />
          </Box>
        </Grid>
      </Box>
      <Box py={4} width={"full"} borderTop={"2px solid #00FF84"}>
        <HStack justifyContent={["space-between"]} flexWrap={"wrap"}>
          <HStack spacing={4} color={"white"}>
            <Heading size={"xs"}>© Skillshare, inc.2023</Heading>
            <Heading size={"xs"}>Help</Heading>
            <Heading size={"xs"}>Privacy</Heading>
            <Heading size={"xs"}>Terms</Heading>
          </HStack>
          <HStack spacing={2} color={"white"}>
            <Button size={"xs"}>
              <GrFacebookOption />
            </Button>
            <Button size={"xs"}>
              <BsTwitter />
            </Button>
            <Button size={"xs"}>
              <BiLogoInstagramAlt />
            </Button>
            <Button size={"xs"}>
              <BsPinterest />
            </Button>
          </HStack>
        </HStack>
      </Box>
    </VStack>
  );
};

export default Footer;
