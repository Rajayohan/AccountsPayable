import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Image, Platform } from "react-native";
import { Box, Text } from "native-base";

export default function TabTwoScreen() {
  return (
    <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
      <Text>second screen</Text>
    </Box>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
