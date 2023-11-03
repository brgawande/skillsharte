import { Box, Button, HStack, Image, useColorMode } from "@chakra-ui/react";
import React, { useState } from "react";
import logo from "../../assets/logoinwhite.svg";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { MoonIcon } from "@chakra-ui/icons";
import { SunIcon } from "@chakra-ui/icons";
import { Link, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/user";

const Header = ({ isAuthenticated = false, user }) => {
  const [color, setCOlor] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
  const dispatch = useDispatch();

  const changeColor = () => {
    if (window.scrollY >= 150) {
      setCOlor(true);
    } else {
      setCOlor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  const logoutHandler = (e) => {
    e.preventDefault();
    dispatch(logout());
    <Navigate to={"/login"} />;
  };
  return (
    <HStack
      className={color && "header-bg"}
      zIndex={1000}
      position={"fixed"}
      top={0}
      left={0}
      right={0}
      justifyContent={"space-between"}
      // color={"whiteAlpha.900"}
      // bgColor={"blackAlpha.900"}
      p={["10px 2%"]}
      bgGradient="linear(to-b, rgba(0, 0, 0, 1), rgba(255, 255, 255, 0))"
    >
      <HStack spacing={10}>
        <Box>
          <Link to={"/"}>
            <Image src={logo} />
          </Link>
        </Box>
        <Menu color={"blackAlpha.900"}>
          <MenuButton fontWeight={"bold"} color={"whiteAlpha.900"}>
            Browse
          </MenuButton>

          <MenuList>
            <MenuGroup>
              <Link to={"/"}>
                <MenuItem>Home</MenuItem>
              </Link>

              {/* <MenuItem>About</MenuItem> */}
              <Link to={"/profile"}>
                <MenuItem>Profile </MenuItem>
              </Link>

              <Link to={"/courses"}>
                <MenuItem>Courses </MenuItem>
              </Link>
            </MenuGroup>
            <MenuDivider />
            {/* <MenuGroup>
              <MenuItem>FAQ</MenuItem>
              <MenuItem>Terms & Conditions</MenuItem>
            </MenuGroup> */}
          </MenuList>
        </Menu>
        {user && user.role === "admin" && (
          <Link to={"/admin/dashboard"}>
            <Box fontWeight={"bold"} color={"whiteAlpha.900"}>
              Admin
            </Box>
          </Link>
        )}
      </HStack>

      <HStack spacing={"2"}>
        {isAuthenticated ? (
          <Button
            fontWeight={"bold"}
            // bgColor={"rgb(0, 255, 132)"}
            bgColor={"rgb(0 255 132)"}
            _hover={{ bg: "rgb(10, 208, 100)" }}
            onClick={logoutHandler}
          >
            Logout
          </Button>
        ) : (
          <>
            {" "}
            <Link to={"/login"}>
              <Button
                fontWeight={"bold"}
                color={"whiteAlpha.900"}
                outline={"none"}
                border={"none"}
                variant={"ghost"}
                _hover={{ bg: "none", color: "rgb(0, 255, 132)" }}
              >
                Sign In
              </Button>
            </Link>
            <Link to={"/register"}>
              <Button
                fontWeight={"bold"}
                // bgColor={"rgb(0, 255, 132)"}
                bgColor={"rgb(0 255 132)"}
                _hover={{ bg: "rgb(10, 208, 100)" }}
              >
                Sign Up
              </Button>
            </Link>
          </>
        )}

        {/* <Button
          // bgColor={"rgb(0, 255, 132)"}
          bgColor={"rgb(0 255 132)"}
          _hover={{ bg: "rgb(10, 208, 100)" }}
          // colorScheme="whatsapp"
          onClick={toggleColorMode}
        >
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </Button> */}
      </HStack>
    </HStack>
  );
};

export default Header;
