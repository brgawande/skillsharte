import {
  Box,
  Button,
  FormLabel,
  HStack,
  Heading,
  Image,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import loginpagebg from "./../../assets/lgoinpagebg.jpg";

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../../redux/actions/user";

const Register = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");
  const [imagePrev, setImagePrev] = useState("");

  const changeImageHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(file);
      setImagePrev(reader.result);
    };
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.append("name", name);
    myForm.append("email", email);
    myForm.append("password", password);
    myForm.append("file", image);
    dispatch(register(myForm));
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
        height={"600px"}
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
          Registration From
        </Heading>
        <form onSubmit={submitHandler}>
          <Box w={["250px", "350px"]} my={4}>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              borderBottom={"2px solid black"}
              placeholder="Enter Your Name"
              required
              color={"black"}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Box>
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
          <HStack my={4} justifyContent={"center"}>
            <label
              style={{
                border: "2px solid white",
                borderRadius: "5px",
                padding: "5px 10px",
                width: "",
              }}
              htmlFor="chooseavatar"
            >
              Choose Avatar
            </label>
            <Input
              type="file"
              id="chooseavatar"
              accept="image/*"
              display={"none"}
              onChange={changeImageHandler}
            />
            {imagePrev && (
              <Image
                h={"100px"}
                w={"100px"}
                borderRadius={"100px"}
                objectFit={"cover"}
                border={"2px solid black"}
                src={imagePrev}
              />
            )}
          </HStack>
          <HStack justifyContent={"center"} my={4}>
            <Button type="submit">Register</Button>
          </HStack>
          <Box my={4}>
            <Text textAlign={"center"} fontSize={"16px"} fontWeight={450}>
              Already Registered ? <Link to={"/login"}>Login Here</Link>
            </Text>
          </Box>
        </form>
      </VStack>
    </Box>
  );
};

export default Register;
