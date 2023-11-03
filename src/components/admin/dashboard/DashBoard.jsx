import React, { useEffect } from "react";
import {
  Box,
  Grid,
  HStack,
  Heading,
  Progress,
  Stack,
  Text,
} from "@chakra-ui/react";
import cursor from "../../../assets/cursor.png";
import SideBar from "../SideBar";
import { RiArrowDownLine, RiArrowUpLine } from "react-icons/ri";
import { DoughnutChart, LineChart } from "./Chart";
import { useDispatch, useSelector } from "react-redux";
import { getDashBoardStats } from "../../../redux/actions/admin";
import Loader from "../../layout/Loader";

const Databox = ({ title, qty, qtyPrecentage, profit }) => (
  <Box
    w={["full", "20%"]}
    boxShadow={"2px 1px 5px rgb(0 255 132)"}
    p={8}
    borderRadius={"lg"}
  >
    <Text color={"white"}>{title}</Text>

    <HStack spacing={6}>
      <Text color={"white"} fontSize={"2xl"} fontWeight={"bold"}>
        {qty}
      </Text>

      <HStack>
        <Text color={"white"}>{qtyPrecentage}%</Text>
        {profit ? (
          <RiArrowUpLine color="rgb(0 255 132)" />
        ) : (
          <RiArrowDownLine color="red" />
        )}
      </HStack>
    </HStack>

    <Text color={"white"} opacity={0.8}>
      Since Last Month
    </Text>
  </Box>
);

const Bar = ({ title, value, profit }) => {
  return (
    <Box color={"white"} py={"4"} px={["0", "20"]}>
      <Heading size={"sm"} mb={2}>
        {title}
      </Heading>
      <HStack w={"full"} alignItems={"center"}>
        <Text>{profit ? 0 : `-${value}%`}</Text>
        <Progress
          width={"full"}
          value={profit ? value : 0}
          // style={{ color: "black" }}
          colorScheme={"green"}
        />
        <Text>100%</Text>
      </HStack>
    </Box>
  );
};

const DashBoard = () => {
  const {
    loading,
    stats,
    usersCount,
    subscriptionsCount,
    viewsCount,
    usersPercentage,
    viewsPercentage,
    subscriptionsPercentage,
    subscriptionsProfit,
    viewsProfit,
    usersProfit,
  } = useSelector((state) => state.admin);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDashBoardStats());
  }, [dispatch]);

  return (
    <Grid
      bgColor={"#002333"}
      // css={{
      //   cursor: `url(${cursor}), default`,
      // }}
      minH={"100vh"}
      templateColumns={["1fr", "5fr 1fr"]}
    >
      {loading || !stats ? (
        <Loader />
      ) : (
        <Box pt={"60px"} pb={"80px"}>
          <Text
            my={4}
            textAlign={"center"}
            color={"white"}
            children={`Last Change Was On -  ${
              String(new Date(stats[11].createdAt)).split("G")[0]
            }`}
          ></Text>

          <Stack
            pt={["0px", "20px"]}
            px={["5%"]}
            direction={["column", "row"]}
            minH={"24"}
            rowGap={4}
            justifyContent={"space-evenly"}
          >
            <Databox
              title="Views"
              qty={viewsCount}
              qtyPrecentage={viewsPercentage}
              profit={viewsProfit}
            />
            <Databox
              title="Users"
              qty={usersCount}
              qtyPrecentage={usersPercentage}
              profit={usersProfit}
            />
            <Databox
              title="Subscription"
              qty={subscriptionsCount}
              qtyPrecentage={subscriptionsPercentage}
              profit={subscriptionsProfit}
            />
          </Stack>

          <Box
            m={["0", "16"]}
            borderRadius={"lg"}
            p={["0", "16"]}
            mt={["4", "16"]}
            boxShadow={"2px 1px 5px rgb(0 255 132)"}
          >
            <Heading
              textAlign={["center", "left"]}
              size={"md"}
              pt={["8", "0"]}
              ml={["0", "16"]}
              color={"white"}
            >
              Views Graph
            </Heading>
            {/* line graph here */}
            <LineChart views={stats.map((item) => item.views)} />
          </Box>

          <Grid templateColumns={["1fr", "2fr 1fr"]}>
            <Box p={4}>
              <Heading
                textAlign={["center", "left"]}
                size={"md"}
                my={"8"}
                ml={["0", "16"]}
                color={"white"}
              >
                Progress Bar
              </Heading>

              <Box>
                <Bar
                  profit={viewsProfit}
                  title="Views"
                  value={viewsPercentage}
                />
                <Bar
                  profit={usersProfit}
                  title="Users"
                  value={usersPercentage}
                />
                <Bar
                  profit={subscriptionsProfit}
                  title="Subscription"
                  value={subscriptionsPercentage}
                />
              </Box>
            </Box>
            <Box p={10}>
              <DoughnutChart
                users={[subscriptionsCount, usersCount - subscriptionsCount]}
              />
            </Box>
          </Grid>
        </Box>
      )}
      <SideBar />
    </Grid>
  );
};

export default DashBoard;
