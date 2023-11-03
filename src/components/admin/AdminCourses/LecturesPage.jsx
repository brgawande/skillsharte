import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Heading,
  Grid,
  Box,
  VStack,
  HStack,
  Text,
  FormLabel,
  Input,
} from "@chakra-ui/react";

const LecturesPage = ({
  lectures,
  isOpen,
  onClose,
  courseId,
  courseTitle,
  addLectureHandler,
  lectureId,
  deleteCourseLectureHandler,
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [video, setVideo] = useState("");
  const [videoPrev, setVideoPrev] = useState("");

  const changeVideoHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setVideo(file);
      setVideoPrev(reader.result);
    };
  };

  return (
    <Modal size={"full"} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader m={0} p={0}>
          <Heading size={"lg"} pl={6} my={2}>
            {courseId}
          </Heading>
          <Heading size={"lg"} pl={6} my={2}>
            {courseTitle}
          </Heading>
        </ModalHeader>

        <ModalCloseButton />
        <ModalBody>
          <Grid gap={6} templateColumns={["1fr", "6fr 5fr"]} py={4}>
            <VStack>
              {lectures &&
                lectures.map((item, index) => (
                  <LectureRow
                    key={index}
                    title={item.title}
                    description={item.description}
                    lectureId={item._id}
                    courseId={courseId}
                    deleteCourseLectureHandler={deleteCourseLectureHandler}
                  />
                ))}
            </VStack>
            <Box px={["5%", "10%", "15%"]}>
              <Heading my={4} size={"lg"} textAlign={"center"}>
                Add Lecture
              </Heading>

              <form
                onSubmit={(e) =>
                  addLectureHandler(e, title, description, video, courseId)
                }
              >
                <Box my={4}>
                  <FormLabel>Enter Lecture Title</FormLabel>
                  <Input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </Box>
                <Box my={4}>
                  <FormLabel>Enter Lecture Description</FormLabel>
                  <Input
                    type="text"
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </Box>
                {videoPrev && <video src={videoPrev}></video>}
                <Box my={4}>
                  <FormLabel
                    border={"1px solid lightblue"}
                    p={2}
                    w={"full"}
                    textAlign={"center"}
                    htmlFor="choosevideo"
                  >
                    Choose Lecture Video
                  </FormLabel>
                  <Input
                    type="file"
                    id="choosevideo"
                    display={"none"}
                    required
                    accept="video/*"
                    onChange={changeVideoHandler}
                  />
                </Box>
                <VStack my={4}>
                  <Button type="submit">Add Lecture</Button>
                </VStack>
              </form>
            </Box>
          </Grid>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default LecturesPage;

function LectureRow({
  title,
  description,
  lectureId,
  deleteCourseLectureHandler,
  courseId,
}) {
  return (
    <HStack
      // border={"1px solid gray"}
      px={4}
      my={2}
      py={2}
      w={"full"}
      justifyContent={"space-between"}
      alignItems={"center"}
      boxShadow={"md"}
    >
      <Box>
        <Heading size={"lg"}>{title}</Heading>
        <Text>{description}</Text>
      </Box>
      <Button
        onClick={(e) => deleteCourseLectureHandler(e, lectureId, courseId)}
      >
        Delete
      </Button>
    </HStack>
  );
}
