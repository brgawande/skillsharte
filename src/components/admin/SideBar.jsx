import { Button, Icon, VStack } from "@chakra-ui/react";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  RiDashboardFill,
  RiAddCircleFill,
  RiEyeFill,
  RiUser3Fill,
} from "react-icons/ri";

const SideBar = () => {
  // abb is location ki heklp se mai access kar sakta hu ki kya location hai
  const loaction = useLocation();
  return (
    <VStack
      bgColor={"#002333"}
      spacing={8}
      pt={["10", "24"]}
      pb={"10"}
      boxShadow={"-2px 0 10px rgb(0 255 132)"}
    >
      <LinkButton
        Icon={RiDashboardFill}
        url={"dashboard"}
        text={"DashBoard"}
        active={loaction.pathname === "/admin/dashboard"}
      />
      <LinkButton
        Icon={RiAddCircleFill}
        url={"createcourse"}
        text={"Create Course"}
        active={loaction.pathname === "/admin/createcourse"}
      />
      <LinkButton
        Icon={RiEyeFill}
        url={"courses"}
        text={"Courses"}
        active={loaction.pathname === "/admin/courses"}
      />
      <LinkButton
        Icon={RiUser3Fill}
        url={"users"}
        text={"Users"}
        active={loaction.pathname === "/admin/users"}
      />
    </VStack>
  );
};

export default SideBar;

function LinkButton({ url, Icon, text, active }) {
  return (
    <Link to={`/admin/${url}`}>
      <Button
        zIndex={5}
        variant={"outline"}
        borderColor={"rgb(0 255 132)"}
        color={active ? "black" : "rgb(0 255 132)"}
        bgColor={active ? "white" : "black"}
        _hover={{ color: "black", bgColor: "white" }}
      >
        <Icon style={{ marginRight: "5px" }} />
        {text}
      </Button>
    </Link>
  );
}
