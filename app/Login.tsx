import { StyleSheet } from "react-native";
import React from "react";
import { Box, Heading, FormControl, Input, Button, Text } from "native-base";
import { useRouter } from "expo-router";
type Props = {};

const Login = (props: Props) => {
  const router = useRouter();
  return (
    <Box flex={1} justifyContent={"center"} alignItems={"center"} safeArea>
      <Heading size={"3xl"} color={"blue.400"} my={5}>
        Welcome
      </Heading>
      <FormControl w="75%" maxW="300px">
        <FormControl.Label color={"blue.400"}>UserName</FormControl.Label>
        <Input placeholder="Enter your Name" variant={"outline"} />
        <FormControl.Label color={"blue.400"}>Password</FormControl.Label>
        <Input placeholder="Enter password" />
        <Button my={5} size={"md"} onPress={() => router.navigate("/(tabs)")}>
          <Text fontSize={"2xl"} color={"white"}>
            Login
          </Text>
        </Button>
      </FormControl>
    </Box>
  );
};

export default Login;

const styles = StyleSheet.create({});
