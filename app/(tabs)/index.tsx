import { Image, StyleSheet, Platform } from "react-native";
import { Center, Box, HStack, Icon, Pressable, Text } from "native-base";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Entypo from "@expo/vector-icons/Entypo";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();
  return (
    <Box flex={1} alignItems="center" justifyContent="center">
      <HStack flex={3} width={"full"} p={1.5} space={1.5}>
        <Pressable
          flex={3}
          bg="primary.50"
          borderRadius={"2xl"}
          shadow={"9"}
          justifyContent={"center"}
          alignItems={"center"}
          onPress={() => router.navigate("/PO")}
        >
          <Icon
            as={<MaterialCommunityIcons name="cash-100" />}
            color="blue.500"
            size={70}
          />
          <Text>Purchase Order</Text>
        </Pressable>

        <Pressable
          flex={3}
          bg="primary.50"
          borderRadius={"2xl"}
          shadow={"9"}
          justifyContent={"center"}
          alignItems={"center"}
          onPress={() => router.navigate("/Invoice")}
        >
          <Icon
            as={<FontAwesome5 name="file-invoice" />}
            color="blue.500"
            size={70}
            ml={5}
          />
          <Text mt={2}>Invoice</Text>
        </Pressable>
      </HStack>
      <HStack flex={3} width={"full"} p={1.5} space={1.5}>
        <Pressable
          flex={3}
          bg="primary.50"
          borderRadius={"2xl"}
          shadow={"9"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Icon
            as={<MaterialIcons name="approval" />}
            color="blue.500"
            size={70}
          />
          <Text mt={2}>Approval Flows</Text>
        </Pressable>
        <Pressable
          flex={3}
          bg="primary.50"
          borderRadius={"2xl"}
          shadow={"9"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Icon
            as={<MaterialIcons name="analytics" size={24} />}
            color="blue.500"
            size={70}
          />
          <Text>Analytics and Insight</Text>
        </Pressable>
      </HStack>
      <HStack flex={3} width={"full"} p={1.5} space={1.5}>
        <Pressable
          flex={3}
          bg="primary.50"
          borderRadius={"2xl"}
          shadow={"9"}
          justifyContent={"center"}
          alignItems={"center"}
          onPress={() => router.navigate("/Payment")}
        >
          <Icon
            as={<MaterialIcons name="payment" />}
            color="blue.500"
            size={70}
          />
          <Text>Payments</Text>
        </Pressable>
        <Pressable
          flex={3}
          bg="primary.50"
          borderRadius={"2xl"}
          shadow={"9"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Icon
            as={<MaterialCommunityIcons name="file-compare" />}
            color="blue.500"
            size={70}
          />
          <Text mt={2}>PO Matching</Text>
        </Pressable>
      </HStack>
    </Box>
  );
}

const styles = StyleSheet.create({});
