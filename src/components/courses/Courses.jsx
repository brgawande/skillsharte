import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  Grid,
  HStack,
  Heading,
  Image,
  Input,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { addToPlaylist, getAllCourses } from "../../redux/actions/course";
import { loadUser } from "../../redux/actions/user";
import { Link } from "react-router-dom";

const Courses = () => {
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();

  const { loading, courses, error, message } = useSelector(
    (state) => state.course
  );

  const categories = [
    "Web Development",
    "App Development",
    "React Js",
    "Node Js",
    "Backend Development",
    "Frontend Development",
    "Data Structure and Algorithm",
    "UI UX Design",
  ];

  const addToPlaylistHandler = async (id) => {
    // console.log(id);
    await dispatch(addToPlaylist(id));
    dispatch(loadUser());
  };

  useEffect(() => {
    dispatch(getAllCourses(category, keyword));

    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, error, message, category, keyword]);

  return (
    <VStack
      // border={"2px solid white"}
      pt={"80px"}
      pb={"60px"}
      minH={"100vh"}
      bgColor={"#002333"}
      px={["3%", "5%", "8%", "10%"]}
    >
      <Box w={"full"}>
        <Heading px={["5%"]} textAlign={"center"} color={"white"}>
          Explore Inspiring Online Courses
        </Heading>
        <Box px={["2%", "7%", "10%"]} my={4}>
          <Input
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            border={"1px solid rgb(0 255 132)"}
            type="search"
            placeholder="Real Time Search Filter..."
            color={"white"}
          />
        </Box>
        <Box
          display={"flex"}
          flexWrap={"wrap"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={5}
          my={4}
        >
          {categories.map((item, index) => (
            <Button
              onClick={() => setCategory(item)}
              border={"1px solid rgb(0 255 132)"}
              variant={"outline"}
              color={"white"}
              fontWeight={"bold"}
              // minWidth={60}
              px={5}
              borderRadius={40}
              key={index}
              _hover={{ bg: "white", color: "black" }}
            >
              {item}
            </Button>
          ))}
        </Box>

        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
          ]}
          gap={10}
          my={"60px"}
        >
          {courses.length > 0 ? (
            courses.map((item) => (
              <CourseCard
                key={item._id}
                id={item._id}
                imgSrc={item.poster.url}
                title={item.title}
                description={item.description}
                numOfVideos={item.numOfVideos}
                views={item.views}
                category={item.category}
                createdBy={item.createdBy}
                addToPlaylistHandler={addToPlaylistHandler}
              />
            ))
          ) : (
            <Heading textAlign={"center"} color={"white"}>
              Course Not Found
            </Heading>
          )}
        </Grid>
      </Box>
    </VStack>
  );
};

export default Courses;

function CourseCard({
  id,
  imgSrc,
  title,
  description,
  numOfVideos,
  views,
  category,
  createdBy,
  addToPlaylistHandler,
}) {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image w={"100%"} src={imgSrc} alt={id} borderRadius="lg" />
        <Stack direction={"column"} mt="6" spacing="2">
          <Heading size="md">{title}</Heading>
          <Text size={"lg"}>Course Description - {description}</Text>
          <Text size={"lg"}>Lectures - {numOfVideos}</Text>
          <Text size={"lg"}>Views - {views}</Text>
          <Text size={"lg"}>Category - {category}</Text>
          <Text size={"lg"}>Created By - {createdBy}</Text>
        </Stack>
      </CardBody>
      {/* <Divider /> */}

      <HStack py={4} px={6} justifyContent={"space-between"}>
        <Link to={`/course/${id}`}>
          <Button
            color={"rgb(0 255 132)"}
            bgColor={"black"}
            _hover={{ color: "white", bgColor: "black" }}
          >
            Watch Now
          </Button>
        </Link>
        <Button
          onClick={() => addToPlaylistHandler(id)}
          color={"rgb(0 255 132)"}
          bgColor={"black"}
          _hover={{ color: "white", bgColor: "black" }}
        >
          Add To Playlist
        </Button>
      </HStack>
    </Card>
  );
}
