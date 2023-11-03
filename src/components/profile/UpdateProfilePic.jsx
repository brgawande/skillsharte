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
  Image,
  Box,
  Input,
  VStack,
} from "@chakra-ui/react";

const UpdateProfilePic = ({
  isOpen,
  onClose,
  submitProfilePicHandler,
  user,
}) => {
  const [image, setImage] = useState("");
  const [imagePrev, setImagePrev] = useState(user.avatar.url);

  const changeImageHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(file);
      setImagePrev(reader.result);
    };
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader textAlign={"center"}>Update Profile Pic</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={(e) => submitProfilePicHandler(e, image)}>
            <VStack>
              {imagePrev && (
                <Image
                  height={"100px"}
                  width={"100px"}
                  borderRadius={"100%"}
                  objectFit={"cover"}
                  src={imagePrev}
                />
              )}

              <Box my={4}>
                <label
                  style={{
                    border: "1px solid blue",
                    borderRadius: "5px",

                    padding: "7px 20px",
                    textAlign: "center",
                  }}
                  htmlFor="UpdateProfilePic"
                >
                  Choose Avatar
                </label>
                <Input
                  display={"none"}
                  type="file"
                  accept="image/*"
                  id="UpdateProfilePic"
                  onChange={changeImageHandler}
                />
              </Box>
              <Box>
                <button
                  style={{
                    border: "1px solid blue",
                    borderRadius: "5px",

                    padding: "7px 20px",
                    textAlign: "center",
                  }}
                  type="submit"
                >
                  Update Profile Pic
                </button>
              </Box>
            </VStack>
          </form>
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme="red"
            color={"black"}
            fontWeight={"bold"}
            mr={3}
            onClick={onClose}
          >
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default UpdateProfilePic;
