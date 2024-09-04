import { StyleSheet } from "react-native";
import React, { useState } from "react";
import { Box, Input, Text, FormControl, Modal, Button } from "native-base";
import { useRouter } from "expo-router";
type Props = {};

const SignUp = (props: Props) => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  return (
    <Box safeArea alignItems={"center"} justifyContent={"center"} flex={1}>
      <Text fontSize={"4xl"} color={"blue.400"} fontWeight={"extrabold"}>
        Sign Up
      </Text>
      <FormControl w="75%" maxW="300px">
        <FormControl.Label>Name</FormControl.Label>
        <Input placeholder="Enter your Name" variant={"outline"} />
        <FormControl.Label>Email</FormControl.Label>
        <Input placeholder="Enter your mail=ID" variant={"outline"} />
        <FormControl.Label color={"blue.400"}>Enter Password</FormControl.Label>
        <Input placeholder="Enter password" />
        <FormControl.Label color={"blue.400"}>
          Confirm Password
        </FormControl.Label>
        <Input placeholder="Re-Enter password" />
      </FormControl>
      <Button my={5} size={"md"} onPress={() => setShowModal(true)}>
        <Text fontSize={"2xl"} color={"white"}>
          Create Account
        </Text>
      </Button>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header></Modal.Header>
          <Modal.Body alignItems={"center"}>
            <Text>Account Created Successfully</Text>
            <Text>Click below to login </Text>
          </Modal.Body>
          <Modal.Footer alignItems={"center"} justifyContent={"center"}>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  setShowModal(false);
                }}
              >
                Cancel
              </Button>
              <Button
                onPress={() => {
                  setShowModal(false);
                  router.navigate("/Login");
                }}
              >
                login
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Box>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
