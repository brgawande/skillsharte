import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { Link, useSearchParams } from "react-router-dom";

const PaymentSuccess = () => {
  const reference = useSearchParams()[0].get("reference");

  return (
    <Box h={"90vh"} p={16} bgColor={"#002333"}>
      <VStack>
        <Heading my={4} color={"white"}>
          You Have Pro Pack
        </Heading>
        <VStack
          bgColor={"white"}
          w={"450px"}
          border={"2px solid black"}
          borderRadius={"15px"}
        >
          <Box w={"full"} bgColor={"#FEDD00"} borderRadius={"15px 15px 0 0"}>
            <Text fontSize={"20px"} fontWeight={600} p={2}>
              Payment Success
            </Text>
          </Box>

          <VStack pb={6} spacing={0} bgColor={"white"} borderRadius={"15px"}>
            <Heading textAlign={"center"} fontWeight={400} my={4} size={"md"}>
              Congratulations You are a Pro Member, You have access to Premium
              Content
            </Heading>
            <Heading textAlign={"center"} my={2} size={"2xl"}>
              <RiCheckboxCircleFill />
            </Heading>
            <Link to={"/profile"}>
              <Button
                mx={5}
                display={"block"}
                w={"90%"}
                border={"1px solid black"}
                bgColor={"rgb(255, 240, 0)"}
                mb={4}
              >
                Go To Profile
              </Button>
            </Link>
            <Heading size={"md"}>Reference : {reference}</Heading>
          </VStack>
        </VStack>
      </VStack>
    </Box>
  );
};

export default PaymentSuccess;
