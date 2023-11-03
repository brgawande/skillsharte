import {
  Box,
  Button,
  FormLabel,
  Heading,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import loginpagebg from "./../../assets/lgoinpagebg.jpg";

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/user.js";

const Login = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };
  return (
    <Box
      minH={"100vh"}
      bgImage={loginpagebg}
      bgSize={"cover"}
      bgPosition={"center"}
      py={20}
      display={"flex"}
      alignItems={"center"}
      pr={["20px", "100px", "500px"]}
      justifyContent={"center"}
    >
      <VStack
        w={["300px", "400px"]}
        height={"450px"}
        p={["30px 5px", "30px 20px"]}
        bgColor={"white"}
        borderRadius={"10px"}
        opacity={0.7}
        position={"relative"}
      ></VStack>
      <VStack
        w={["300px", "400px"]}
        p={["30px 5px", "30px 20px"]}
        // bgColor={"white"}
        borderRadius={"10px"}
        position={"absolute"}
      >
        <Heading textAlign={"center"} w={"full"}>
          Login From
        </Heading>
        <form onSubmit={submitHandler}>
          <Box w={["250px", "350px"]} my={4}>
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              borderBottom={"2px solid black"}
              placeholder="Enter Your Email"
              required
              color={"black"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Box>
          <Box my={4}>
            <FormLabel>Password</FormLabel>
            <Input
              borderBottom={"2px solid black"}
              type="password"
              placeholder="Enter Your Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>
          <Box my={4}>
            <Button type="submit">Login</Button>
          </Box>
          <Box my={4}>
            <Text fontSize={"16px"} fontWeight={450}>
              Not Yet Registered ?
            </Text>
            <Link to={"/register"}>Register Here</Link>
          </Box>
        </form>
      </VStack>
    </Box>
  );
};

export default Login;
