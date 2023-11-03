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
  Box,
  FormLabel,
  Input,
} from "@chakra-ui/react";

const ChnagePassword = ({ isOpen, onClose, changePasswordHandler }) => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Change Password</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form
            onSubmit={(e) => changePasswordHandler(e, oldPassword, newPassword)}
          >
            <Box my={4}>
              <FormLabel>Enter Old Password</FormLabel>
              <Input
                borderBottom={"2px solid black"}
                type="password"
                placeholder="Enter Old Password"
                required
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
              />
            </Box>
            <Box my={4}>
              <FormLabel>Enter New Password</FormLabel>
              <Input
                borderBottom={"2px solid black"}
                type="password"
                placeholder="Enter New Password"
                required
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </Box>
            <Box my={4}>
              <Button type="submit" colorScheme="messenger">
                Update Password
              </Button>
            </Box>
          </form>
        </ModalBody>

        <ModalFooter mt={"-30px"}>
          <Button colorScheme="red" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ChnagePassword;
