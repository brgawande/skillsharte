import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Grid,
  HStack,
  Heading,
  Image,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import cursor from "../../../assets/cursor.png";
import SideBar from "../SideBar";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import LecturesPage from "./LecturesPage";
import { useDispatch, useSelector } from "react-redux";
import { getAllCourses } from "../../../redux/actions/course";
import {
  addLecture,
  deleteCourse,
  deleteCourseLecture,
  getCourseLectures,
} from "../../../redux/actions/admin";
import toast from "react-hot-toast";

const AdminCourses = () => {
  const [courseTitle, setCourseTitle] = useState("");
  const [courseId, setCourseId] = useState("");

  const { isOpen, onOpen, onClose } = useDisclosure();

  const { courses } = useSelector((state) => state.course);
  const { loading, message, error, lectures } = useSelector(
    (state) => state.admin
  );
  const dispatch = useDispatch();

  const viewLectureHandler = async (courseId, courseTitle) => {
    onOpen();
    // console.log(courseTitle);
    // console.log(courseId);
    setCourseTitle(courseTitle);
    setCourseId(courseId);
    await dispatch(getCourseLectures(courseId));

    // console.log(lectures);
  };

  const deleteCourseHandler = async (courseId) => {
    // console.log(courseId);
    await dispatch(deleteCourse(courseId));
    dispatch(getAllCourses());
  };

  const addLectureHandler = async (e, title, description, video, courseId) => {
    // console.log(courseId);
    // console.log(title);
    // console.log(description);
    e.preventDefault();
    const myForm = new FormData();
    myForm.append("title", title);
    myForm.append("description", description);
    myForm.append("file", video);
    await dispatch(addLecture(courseId, myForm));
    dispatch(getCourseLectures(courseId));
  };

  const deleteCourseLectureHandler = async (e, lectureId, courseId) => {
    e.preventDefault();
    // console.log(lectureId);
    // console.log(courseId);
    await dispatch(deleteCourseLecture(courseId, lectureId));
    dispatch(getCourseLectures(courseId));
  };

  useEffect(() => {
    dispatch(getAllCourses());
  }, [dispatch]);

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
    <>
      <Grid
        bgColor={"#002333"}
        // css={{
        //   cursor: `url(${cursor}), default`,
        // }}
        minH={"100vh"}
        templateColumns={["1fr", "5fr 1fr"]}
      >
        <Box p={["0", "8"]} overflowX="auto">
          <Heading
            pt={"20px"}
            textAlign={"center"}
            my={4}
            color={"white"}
            size={"lg"}
          >
            Courses Database
          </Heading>
          <TableContainer color={"white"}>
            <Table variant="simple">
              <TableCaption color={"white"}>All Courses Database</TableCaption>
              <Thead>
                <Tr>
                  <Th color={"white"} textAlign={"center"}>
                    Id
                  </Th>
                  <Th color={"white"} textAlign={"center"}>
                    Poster
                  </Th>
                  <Th color={"white"} textAlign={"center"}>
                    Title
                  </Th>
                  <Th color={"white"} textAlign={"center"}>
                    Num Of Videos
                  </Th>
                  <Th color={"white"} textAlign={"center"}>
                    Views
                  </Th>
                  <Th color={"white"} textAlign={"center"}>
                    Category
                  </Th>
                  <Th color={"white"} textAlign={"center"}>
                    Created By
                  </Th>
                  <Th color={"white"} textAlign={"center"}>
                    Actions
                  </Th>
                </Tr>
              </Thead>
              {courses &&
                courses.map((item) => (
                  <CourseRow
                    imgSrc={item.poster.url}
                    viewLectureHandler={viewLectureHandler}
                    key={item._id}
                    courseId={item._id}
                    courseTitle={item.title}
                    numOfVideos={item.numOfVideos}
                    views={item.views}
                    category={item.category}
                    createdBy={item.createdBy}
                    deleteCourseHandler={deleteCourseHandler}
                  />
                ))}
            </Table>
          </TableContainer>
        </Box>

        <SideBar />
        <LecturesPage
          isOpen={isOpen}
          onClose={onClose}
          courseTitle={courseTitle}
          courseId={courseId}
          addLectureHandler={addLectureHandler}
          lectures={lectures}
          // lectureId={lectureId}
          deleteCourseLectureHandler={deleteCourseLectureHandler}
        />
      </Grid>
    </>
  );
};

export default AdminCourses;

function CourseRow({
  viewLectureHandler,
  deleteCourseHandler,
  imgSrc,
  courseId,
  courseTitle,
  numOfVideos,
  views,
  category,
  createdBy,
}) {
  return (
    <Tbody>
      <Tr>
        <Td textAlign={"center"}>{courseId}</Td>
        <Td textAlign={"center"}>
          <Image src={imgSrc} minW={"150px"} />
        </Td>
        <Td textAlign={"center"}>{courseTitle}</Td>
        <Td textAlign={"center"}>{numOfVideos}</Td>
        <Td textAlign={"center"}>{views}</Td>
        <Td textAlign={"center"}>{category}</Td>
        <Td textAlign={"center"}>{createdBy}</Td>
        <Td>
          <Button
            mx={2}
            size={"sm"}
            onClick={() => viewLectureHandler(courseId, courseTitle)}
          >
            View Lectures
          </Button>
          <Button
            mx={2}
            size={"sm"}
            onClick={() => deleteCourseHandler(courseId)}
          >
            Delete
          </Button>
        </Td>
      </Tr>
    </Tbody>
  );
}
