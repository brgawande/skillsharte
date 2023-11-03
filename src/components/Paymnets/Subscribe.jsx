import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { server } from "../../redux/store.js";
import { buySubscription } from "../../redux/actions/subscription";
import toast from "react-hot-toast";
import logog from "../../assets/favicon-512.webp";

const Subscribe = ({ user }) => {
  const dispatch = useDispatch();
  const [key, setKey] = useState("");

  const { loading, subscriptionId, error } = useSelector(
    (state) => state.subscription
  );
  const { error: adminError } = useSelector((state) => state.admin);

  const subscribeHandler = async () => {
    // abb hume data me key mil rahi hai
    const {
      data: { key },
    } = await axios.get(`${server}/razorpaykey`);

    setKey(key);

    dispatch(buySubscription());
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
    if (adminError) {
      toast.error(adminError);
      dispatch({ type: "clearError" });
    }

    if (subscriptionId) {
      const openPopUp = () => {
        const options = {
          key, // Enter the Key ID generated from the Dashboard

          currency: "INR",
          name: "SkillShare",
          description: "Get Access To All Premium Content",
          image: logog,
          subscription_id: subscriptionId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
          callback_url: `${server}/paymentverification`,
          prefill: {
            name: user.name,
            email: user.email,
            contact: "",
          },
          notes: {
            address: "SkillShare Corporate Office",
          },
          theme: {
            color: "#3399cc",
          },
        };

        const razor = new window.Razorpay(options);
        razor.open();
      };
      openPopUp();
    }
  }, [dispatch, error, user.name, user.email, key, subscriptionId, adminError]);

  return (
    <Box h={"90vh"} p={16} bgColor={"#002333"}>
      <VStack>
        <Heading my={4} color={"white"}>
          Welcome
        </Heading>
        <VStack
          bgColor={"white"}
          w={"450px"}
          border={"2px solid black"}
          borderRadius={"15px"}
        >
          <Box w={"full"} bgColor={"#FEDD00"} borderRadius={"15px 15px 0 0"}>
            <Text fontSize={"20px"} fontWeight={600} p={2}>
              Pro Pack - ₹299.00
            </Text>
          </Box>

          <VStack spacing={0} bgColor={"white"} borderRadius={"15px"}>
            <Heading textAlign={"center"} fontWeight={400} my={4} size={"md"}>
              Join Pro Pack And get Access To All Premium Content
            </Heading>
            <Heading textAlign={"center"} my={6} size={"md"}>
              ₹299 Only
            </Heading>
            <Button
              // mx={5}
              display={"block"}
              w={"90%"}
              border={"1px solid black"}
              bgColor={"#FEDD00"}
              mb={4}
              onClick={subscribeHandler}
              isLoading={loading}
            >
              Buy Now
            </Button>
            <Box
              // border={"2px solid black"}
              bgColor={"gray"}
              borderRadius={"0 0 15px 15px"}
              w={"full"}
              textAlign={"start"}
              py={2}
              pl={4}
              mt={6}
            >
              <Text color={"white"}>100% Refund At Cancellation</Text>
              <Text color={"white"}>Terms & Condition Apply</Text>
            </Box>
          </VStack>
        </VStack>
      </VStack>
    </Box>
  );
};

export default Subscribe;
