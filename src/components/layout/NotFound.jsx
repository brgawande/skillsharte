import { Button, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <VStack
      spacing={4}
      h={"90vh"}
      alignItems={"center"}
      justifyContent={"center"}
      bgColor={"#002333"}
    >
      <Heading color={"white"}>Page Not Found</Heading>
      <Link to={"/"}>
        <Button>Go To Home</Button>
      </Link>
    </VStack>
  );
};

export default NotFound;
