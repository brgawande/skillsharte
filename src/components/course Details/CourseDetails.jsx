import { Box, Grid, Heading, Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Navigate } from "react-router-dom";
import { getCourseLectures } from "../../redux/actions/admin";
import Loader from "../layout/Loader";

const CourseDetails = ({ user }) => {
  const [lectureNumber, setLectureNumber] = useState(0);

  const { loading, lectures } = useSelector((state) => state.admin);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(getCourseLectures(params.id));
  }, [dispatch, params.id]);

  // console.log(lectures);

  if (
    user.role !== "admin" &&
    (user.subscription === undefined || user.subscription.status !== "active")
  ) {
    return <Navigate to={"/subscribe"} />;
  }

  return loading ? (
    <Loader />
  ) : (
    <Grid
      minH={"100vh"}
      templateColumns={["1fr", "3fr 1fr"]}
      bgColor={"#002333"}
    >
      {lectures && lectures.length > 0 ? (
        <>
          {" "}
          <Box mt={"80px"}>
            <video
              src={lectures[lectureNumber].video.url}
              width={"100%"}
              controls
              controlsList="nodownload noremoteplayback"
              disablePictureInPicture
              disableRemotePlayback
            ></video>

            <Heading size={"lg"} color={"white"} m={4}>
              #{lectureNumber + 1} {lectures[lectureNumber].title}
            </Heading>
            <Heading size={"md"} color={"white"} m={4}>
              Description
            </Heading>
            <Text pl={4} color={"white"}>
              {lectures[lectureNumber].description}
            </Text>
          </Box>
          <VStack mt={"80px"}>
            {lectures.map((item, index) => (
              <button
                onClick={() => setLectureNumber(index)}
                key={item._id}
                style={{
                  width: "100%",
                  padding: "1rem",
                  textAlign: "center",
                  margin: 0,
                  borderBottom: "2px solid white",
                }}
              >
                <Text color={"white"}>
                  #{index + 1} {item.title}
                </Text>
              </button>
            ))}
          </VStack>
        </>
      ) : (
        <Heading pt={"200px"} color={"white"} children="No Lectures" />
      )}
    </Grid>
  );
};

export default CourseDetails;
