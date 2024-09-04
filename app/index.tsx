import { StyleSheet } from "react-native";
import React from "react";
import { Box, Button, Center, Container, Heading, Text } from "native-base";
import { useRouter } from "expo-router";
type Props = {};

const index = (props: Props) => {
  const router = useRouter();
  return (
    <Box alignItems={"center"} justifyContent={"center"} flex={1}>
      <Heading
        size={"4xl"}
        textAlign={"center"}
        fontStyle={"italic"}
        color={"blue.400"}
      >
        Accounts Payable
      </Heading>
      {/* <Button
        size={"lg"}
        variant={"solid"}
        marginTop={"16"}
        onPress={() => router.navigate("/SignUp")}
      >
        <Text color={"white"} fontSize={"2xl"}>
          Create Account
        </Text>
      </Button> */}
      <Button
        size={"lg"}
        variant={"outline"}
        marginTop={"5"}
        onPress={() => router.navigate("/Login")}
      >
        <Text color={"blue.900"} fontSize={"2xl"}>
          Log in
        </Text>
      </Button>
    </Box>
  );
};

export default index;

const styles = StyleSheet.create({});
