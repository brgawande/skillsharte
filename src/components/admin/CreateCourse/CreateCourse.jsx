import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  FormLabel,
  Grid,
  Heading,
  Image,
  Input,
  Select,
  VStack,
} from "@chakra-ui/react";
import cursor from "../../../assets/cursor.png";
import SideBar from "../SideBar";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { createCourse } from "../../../redux/actions/admin";

const CreateCourse = () => {
  const { loading, message, error } = useSelector((state) => state.admin);
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [createdBy, setCreatedBy] = useState("");
  const [image, setImage] = useState("");
  const [imagePrev, setImagePrev] = useState("");

  const changePosterHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(file);
      setImagePrev(reader.result);
    };
  };

  const createCourseHandler = async (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.append("title", title);
    myForm.append("description", description);
    myForm.append("category", category);
    myForm.append("createdBy", createdBy);
    myForm.append("file", image);
    await dispatch(createCourse(myForm));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, error, message]);

  return (
    <Grid
      bgColor={"#002333"}
      // css={{
      //   cursor: `url(${cursor}), default`,
      // }}
      minH={"100vh"}
      templateColumns={["1fr", "5fr 1fr"]}
    >
      <VStack pt={"80px"} pb={"150px"} px={["5%", "10%", "20%", "30%"]}>
        <Heading color={"white"}>Create Course</Heading>
        <form style={{ width: "100%" }} onSubmit={createCourseHandler}>
          <Box w={"full"} my={4} color={"white"}>
            <FormLabel>Enter Course Title</FormLabel>
            <Input
              type="text"
              placeholder="Enter Course Title"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Box>
          <Box w={"full"} my={4} color={"white"}>
            <FormLabel>Enter Course Description</FormLabel>
            <Input
              type="text"
              placeholder="Enter Course Description"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Box>
          {/*   const categories = [
    "Web Development",
    "App Development",
    "React Js",
    "Node Js",
    "Backend Development",
    "Frontend Development",
    "Data Structure and Algorithm",
    "UI UX Design",
  ]; */}
          <Box w={"full"} my={4} color={"white"}>
            <FormLabel>Enter Course Category</FormLabel>
            <Select
              color={"white"}
              required
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option style={{ color: "black" }}>Enter Course Category</option>
              <option style={{ color: "black" }} value="Web Development">
                Web Development
              </option>
              <option style={{ color: "black" }} value="App Development">
                App Development
              </option>
              <option style={{ color: "black" }} value="React Js">
                React Js
              </option>
              <option style={{ color: "black" }} value="Node Js">
                Node Js
              </option>
              <option style={{ color: "black" }} value="Backend Development">
                Backend Development
              </option>
              <option style={{ color: "black" }} value="Frontend Development">
                Frontend Development
              </option>
              <option
                style={{ color: "black" }}
                value="Data Structure and Algorithm"
              >
                Data Structure and Algorithm
              </option>
              <option style={{ color: "black" }} value="UI UX Design">
                UI UX Design
              </option>
            </Select>
            {/* <FormLabel>Enter Course Category</FormLabel>
            <Input
              type="text"
              placeholder="Enter Course Category"
              required
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            /> */}
          </Box>
          <Box w={"full"} my={4} color={"white"}>
            <FormLabel>Enter Course Creator</FormLabel>
            <Input
              type="text"
              placeholder="Enter Course Creator"
              required
              value={createdBy}
              onChange={(e) => setCreatedBy(e.target.value)}
            />
          </Box>
          {imagePrev && <Image w={"100%"} src={imagePrev} />}

          <Box w={"full"} my={4} color={"white"}>
            <FormLabel
              border={"1px solid white"}
              w={"full"}
              borderRadius={"5px"}
              p={2}
              htmlFor="chooseposter"
            >
              Choose Course Poster
            </FormLabel>
            <Input
              type="file"
              accept="image/*"
              display={"none"}
              id="chooseposter"
              required
              onChange={changePosterHandler}
            />
          </Box>
          <Box w={"full"} my={4} color={"white"}>
            <Button
              type="submit"
              variant={"outline"}
              borderColor={"rgb(0 255 132)"}
              color={"rgb(0 255 132)"}
              bgColor={"black"}
              _hover={{ color: "black", bgColor: "white" }}
            >
              Create Course
            </Button>
          </Box>
        </form>
      </VStack>
      <SideBar />
    </Grid>
  );
};

export default CreateCourse;
