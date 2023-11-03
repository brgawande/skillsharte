import React, { useEffect } from "react";
import {
  Box,
  Button,
  Grid,
  HStack,
  Heading,
  Image,
  VStack,
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
import { useDispatch, useSelector } from "react-redux";
import {
  changeUserRole,
  deleteUser,
  getAllUsers,
} from "../../../redux/actions/admin";
import toast from "react-hot-toast";

const Users = () => {
  const { loading, users, message, error } = useSelector(
    (state) => state.admin
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const chnageUserRoleHandler = async (id) => {
    // console.log(id);
    await dispatch(changeUserRole(id));
    dispatch(getAllUsers());
  };

  const deleteUserHandler = async (id) => {
    // console.log(id);
    await dispatch(deleteUser(id));
    dispatch(getAllUsers());
  };

  // console.log(users);

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
      <Box overflow={"auto"}>
        {" "}
        <VStack color={"white"} pt={"50px"}>
          <Heading size={"lg"} my={4}>
            Users Database
          </Heading>
          <TableContainer>
            <Table variant="simple">
              <TableCaption color={"white"}>
                All Registered Users DataBase
              </TableCaption>
              <Thead>
                <Tr>
                  <Th color={"white"} textAlign={"center"}>
                    Id
                  </Th>
                  <Th color={"white"} textAlign={"center"}>
                    Avatar
                  </Th>
                  <Th color={"white"} textAlign={"center"}>
                    Name
                  </Th>
                  <Th color={"white"} textAlign={"center"}>
                    Email
                  </Th>
                  <Th color={"white"} textAlign={"center"}>
                    Role
                  </Th>
                  <Th color={"white"} textAlign={"center"}>
                    Subscription
                  </Th>
                  <Th color={"white"} textAlign={"center"}>
                    Actions
                  </Th>
                </Tr>
              </Thead>
              {users &&
                users.map((item) => (
                  <TableBody
                    id={item._id}
                    key={item._id}
                    imgSrc={item.avatar.url}
                    name={item.name}
                    email={item.email}
                    role={item.role}
                    subscription={"active"}
                    chnageUserRoleHandler={chnageUserRoleHandler}
                    deleteUserHandler={deleteUserHandler}
                  />
                ))}
            </Table>
          </TableContainer>
        </VStack>
      </Box>
      <SideBar />
    </Grid>
  );
};

export default Users;

function TableBody({
  id,
  imgSrc,
  name,
  email,
  role,
  subscription,
  chnageUserRoleHandler,
  deleteUserHandler,
}) {
  return (
    <Tbody>
      <Tr>
        <Td textAlign={"center"}>{id}</Td>
        <Td textAlign={"center"}>
          <Image
            src={imgSrc}
            h={"100px"}
            minW={"100px"}
            objectFit={"cover"}
            borderRadius={"100%"}
          />
        </Td>
        <Td textAlign={"center"}>{name}</Td>
        <Td textAlign={"center"}>{email}</Td>
        <Td textAlign={"center"}>{role}</Td>
        <Td textAlign={"center"}>{subscription}</Td>
        <Td>
          <Button mx={2} size={"sm"} onClick={() => chnageUserRoleHandler(id)}>
            Change Role
          </Button>
          <Button mx={2} size={"sm"} onClick={() => deleteUserHandler(id)}>
            Delete
          </Button>
        </Td>
      </Tr>
    </Tbody>
  );
}
