import { Heading, VStack } from "@chakra-ui/react";
import React from "react";

const Testimonial = () => {
  return (
    <VStack py={20}>
      <VStack p={["0 3%", "0 7%", "0 12%", "0 20%"]}>
        <Heading zIndex={10} textAlign={"center"} size={"2xl"}>
          Why Students Love Skillshare
        </Heading>
        <Heading
          zIndex={10}
          lineHeight={1.3}
          textAlign={"center"}
          my={4}
          size={"md"}
        >
          Whether it's a first brush on canvas or the last frame in an
          animation, Skillshare is here to support you on every step of your
          creative journey.
        </Heading>
      </VStack>
    </VStack>
  );
};

export default Testimonial;
