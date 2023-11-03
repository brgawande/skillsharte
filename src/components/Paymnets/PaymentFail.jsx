import { Button, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const PaymentFail = () => {
  return (
    <VStack
      spacing={4}
      h={"90vh"}
      alignItems={"center"}
      justifyContent={"center"}
      bgColor={"#002333"}
    >
      <Heading color={"white"}>Payment Failed</Heading>
      <Link to={"/subscribe"}>
        <Button>Try Again</Button>
      </Link>
    </VStack>
  );
};

export default PaymentFail;
