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

const UpdateProdile = ({ isOpen, onClose, submitProfileHandler, user }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Upadte Profile</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={(e) => submitProfileHandler(e, name, email)}>
            <Box my={4}>
              <FormLabel>Name</FormLabel>
              <Input
                borderBottom={"2px solid black"}
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Box>
            <Box my={4}>
              <FormLabel>Email address</FormLabel>
              <Input
                borderBottom={"2px solid black"}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Box>
            <Box my={4}>
              <Button type="submit" colorScheme="messenger">
                Update Profile
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

export default UpdateProdile;

function BasicUsage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>
    </>
  );
}
