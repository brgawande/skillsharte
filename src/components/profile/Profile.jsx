import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  Grid,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import UpdateProdile from "./UpdateProdile";
import ChnagePassword from "./ChnagePassword";
import UpdateProfilePic from "./UpdateProfilePic";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { AiFillDelete } from "react-icons/ai";
import {
  changePassword,
  removeFromPlaylist,
  updateProfile,
  updateProfilePic,
} from "../../redux/actions/profile";
import { loadUser } from "../../redux/actions/user";
import Loader from "../layout/Loader";
import { Link } from "react-router-dom";
import { cancelSubscription } from "../../redux/actions/subscription";

const Profile = ({ user }) => {
  const { loading, message, error } = useSelector((state) => state.profile);
  const {
    loading: subscriptionLoading,
    message: subscriptionMessage,
    error: subscriptionError,
  } = useSelector((state) => state.subscription);
  const dispatch = useDispatch();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isPassOpen,
    onOpen: onPassOpen,
    onClose: onPassCLose,
  } = useDisclosure();
  const {
    isOpen: isPicOpen,
    onOpen: onPicOpen,
    onClose: onPicCLose,
  } = useDisclosure();

  const submitProfileHandler = async (e, name, email) => {
    e.preventDefault();
    await dispatch(updateProfile(name, email));
    dispatch(loadUser());
  };

  const changePasswordHandler = async (e, oldPassword, newPassword) => {
    e.preventDefault();
    await dispatch(changePassword(oldPassword, newPassword));
  };

  const submitProfilePicHandler = async (e, image) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.append("file", image);
    await dispatch(updateProfilePic(myForm));
    dispatch(loadUser());
  };

  const removeFromPlaylistHandler = async (id) => {
    // console.log(id);
    await dispatch(removeFromPlaylist(id));
    dispatch(loadUser());
  };

  const cancelSubscriptionHandler = async () => {
    await dispatch(cancelSubscription());
    // dispatch(loadUser());
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
    if (subscriptionError) {
      toast.error(subscriptionError);
      dispatch({ type: "clearError" });
    }
    if (subscriptionMessage) {
      toast.success(subscriptionMessage);
      dispatch({ type: "clearMessage" });
      dispatch(loadUser());
    }
  }, [dispatch, error, message, subscriptionMessage, subscriptionError]);

  // console.log(user.playlist);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <VStack
          minH={"100vh"}
          bgColor={"#002333"}
          pt={"100px"}
          pb={"50px"}
          px={["4%", "7%", "10%", "13%"]}
        >
          <Box
            // w={"full"}
            // bgColor={"rgb(0 255 132)"}
            style={{ boxShadow: "#39FF14 1px 1px 5px" }}
            borderRadius={"15px"}
            // h={"300px"}
            pb={6}
          >
            <VStack gap={4} p={3} px={["2", "10"]}>
              <Text
                pl={5}
                // w={"full"}
                textAlign={["center"]}
                fontWeight={"bold"}
                fontSize={"30px"}
                color={"white"}
              >
                Your Profile
              </Text>
              <Stack
                gap={5}
                direction={["column", "row", "row", "row"]}
                w={["full"]}
                alignItems={"center"}
                pl={5}
              >
                <Image
                  src={user.avatar.url}
                  h={"150px"}
                  w={"150px"}
                  objectFit={"cover"}
                  borderRadius={"100%"}
                />
                <Box color={"white"}>
                  <Heading
                    textAlign={["center", "start"]}
                    fontWeight={700}
                    size={"md"}
                    textTransform={"capitalize"}
                  >
                    Name : {user.name}
                  </Heading>
                  <Heading
                    textAlign={["center", "start"]}
                    fontWeight={700}
                    my={4}
                    size={"md"}
                  >
                    Email : {user.email}
                  </Heading>
                  <Heading
                    textAlign={["center", "start"]}
                    fontWeight={700}
                    my={4}
                    size={"md"}
                    textTransform={"capitalize"}
                  >
                    Role : {user.role}
                  </Heading>
                  <Heading
                    textAlign={["center", "start"]}
                    fontWeight={700}
                    my={4}
                    size={"md"}
                  >
                    CreatedAt : {user.createdAt.split("T")[0]}
                  </Heading>
                  <Heading
                    textAlign={["center", "start"]}
                    fontWeight={700}
                    my={4}
                    size={"md"}
                  >
                    Subscription :{" "}
                    {user.subscription &&
                    user.subscription.status === "active" ? (
                      <Button
                        bgColor={"rgb(0 255 132)"}
                        _hover={{ bg: "rgb(10, 208, 100)" }}
                        fontWeight={700}
                        onClick={cancelSubscriptionHandler}
                        isLoading={subscriptionLoading}
                      >
                        Cancel Subscription
                      </Button>
                    ) : (
                      <Link to={"/subscribe"}>
                        <Button
                          bgColor={"rgb(0 255 132)"}
                          _hover={{ bg: "rgb(10, 208, 100)" }}
                          fontWeight={700}
                        >
                          Buy Subscription
                        </Button>
                      </Link>
                    )}
                  </Heading>
                </Box>
              </Stack>
              <Box
                display={"flex"}
                flexWrap={"wrap"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Button
                  color={"white"}
                  _hover={{ bg: "black" }}
                  variant={"outline"}
                  onClick={onPicOpen}
                >
                  Update Profile Pic
                </Button>
                <Button
                  color={"white"}
                  _hover={{ bg: "black" }}
                  variant={"outline"}
                  mx={4}
                  my={["4", "0"]}
                  onClick={onOpen}
                >
                  Update Profile{" "}
                </Button>
                <Button
                  color={"white"}
                  _hover={{ bg: "black" }}
                  variant={"outline"}
                  onClick={onPassOpen}
                >
                  Change Password
                </Button>
              </Box>
            </VStack>
          </Box>

          {/* user playlist */}

          <Grid
            templateColumns={[
              "repeat(1, 1fr)",
              "repeat(2, 1fr)",
              "repeat(2, 1fr)",
              "repeat(3, 1fr)",
            ]}
            gap={6}
            my={16}
          >
            {user.playlist.length > 0 ? (
              user.playlist.map((item) => (
                <ProfileCourseCard
                  key={item._id}
                  imgSrc={item.poster}
                  id={item.course}
                  removeFromPlaylistHandler={removeFromPlaylistHandler}
                />
              ))
            ) : (
              <Heading color={"white"}>No Courses Added</Heading>
            )}
          </Grid>
          <UpdateProdile
            user={user}
            isOpen={isOpen}
            onClose={onClose}
            submitProfileHandler={submitProfileHandler}
          />
          <ChnagePassword
            isOpen={isPassOpen}
            onClose={onPassCLose}
            changePasswordHandler={changePasswordHandler}
          />
          <UpdateProfilePic
            user={user}
            isOpen={isPicOpen}
            onClose={onPicCLose}
            submitProfilePicHandler={submitProfilePicHandler}
          />
        </VStack>
      )}
    </>
  );
};

export default Profile;

function ProfileCourseCard({ imgSrc, id, removeFromPlaylistHandler }) {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image src={imgSrc} alt={id} borderRadius="lg" />
      </CardBody>
      <Divider />
      <Box
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent={"space-between"}
        p={["13px 5%"]}
        rowGap={4}
      >
        <Link to={`/course/${id}`}>
          <Button
            color={"rgb(0 255 132)"}
            bgColor={"black"}
            _hover={{ color: "white", bgColor: "black" }}
          >
            Watch now
          </Button>
        </Link>
        <Button
          onClick={() => removeFromPlaylistHandler(id)}
          color={"rgb(0 255 132)"}
          bgColor={"black"}
          _hover={{ color: "white", bgColor: "black" }}
        >
          <AiFillDelete />
        </Button>
      </Box>
    </Card>
  );
}
