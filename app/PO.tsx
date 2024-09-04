import { StyleSheet, FlatList, ListRenderItem } from "react-native";
import React, { useState, useEffect } from "react";
import {
  Box,
  useDisclose,
  Icon,
  Actionsheet,
  Text,
  Heading,
  VStack,
  HStack,
  ScrollView,
  Button,
  Divider,
} from "native-base";
import axios from "axios";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
interface PO {
  name: string;
  bill_no: string;
  bill_date: string;
  supplier_name: string;
  net_total: number;
  currency: string;
  due_date: string;
  status: string;
}

const PO: React.FC = () => {
  const [PO, setPO] = useState<PO[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedPO, setSelectedPO] = useState<PO | null>(null);
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclose();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://103.174.10.132:443/api/resource/Purchase Invoice",
          {
            headers: {
              Authorization: "Token 0710a08136f953d:903ac3fbeade207",
            },
            params: {
              fields:
                '["name","bill_no","bill_date","supplier_name","net_total","currency","due_date","status"]',
              filters: '[["Purchase Invoice","status","=","paid"]]',
            },
          }
        );
        setPO(response.data.data); // Assuming the response has a "data" property that holds the array
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch data");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  const renderItem: ListRenderItem<PO> = ({ item }) => (
    <Box
      h={"180px"}
      alignItems={"flex-start"}
      justifyContent={"space-evenly"}
      backgroundColor={"gray.200"}
      borderRadius={"3xl"}
      p={"4"}
    >
      <Heading color={"blue.400"}>{item.supplier_name}</Heading>
      <Text fontSize={"md"}>Bill Date: {item.bill_date}</Text>
      <Button
        size={"md"}
        onPress={() => {
          setSelectedPO(item);
          onOpen();
        }}
      >
        View Details
      </Button>
    </Box>
  );

  return (
    <Box safeArea flex={1}>
      <VStack
        flex={1}
        flexDirection={"row"}
        justifyContent={"space-evenly"}
        alignItems={"center"}
      >
        <Button
          leftIcon={<Icon as={AntDesign} name="left" size="sm" />}
          onPress={() => router.back()}
        >
          Back
        </Button>

        <Heading>Purchase Order</Heading>

        <Button
          leftIcon={
            <Icon as={Ionicons} name="cloud-upload-outline" size="sm" />
          }
        >
          Upload
        </Button>
      </VStack>
      <Box flex={9} px={2}>
        <FlatList
          data={PO}
          keyExtractor={(item) => item.name}
          ItemSeparatorComponent={() => <Box height={"1.5"}></Box>}
          renderItem={renderItem}
        />
      </Box>
      {/* Actionsheet to display invoice details */}
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          {selectedPO && (
            <ScrollView w="100%">
              <Heading size="md" mb={4}>
                Purchase Order Details{selectedPO.bill_no}
              </Heading>

              <VStack space={4} mb={6}>
                <HStack justifyContent="space-between">
                  <Text>Issued On:</Text>
                  <Text>{selectedPO.bill_date}</Text>
                </HStack>
                <HStack justifyContent="space-between">
                  <Text>Due On:</Text>
                  <Text>{selectedPO.due_date}</Text>
                </HStack>
                <VStack space={2}>
                  <Text>Bill From</Text>
                  <Text bold fontSize="lg">
                    {selectedPO.supplier_name}
                  </Text>
                </VStack>
                <Divider />
                <VStack space={2} mb={4}>
                  <HStack justifyContent="space-between">
                    <Text bold>Total Amount</Text>
                    <Text bold>
                      {selectedPO.net_total} {selectedPO.currency}
                    </Text>
                  </HStack>
                </VStack>
                <Text fontSize="lg" color="success.400" mb={4}>
                  Status: {selectedPO.status}
                </Text>
              </VStack>
              <HStack justifyContent={"center"} space={4}>
                <Button onPress={onClose} colorScheme={"success"} size={"lg"}>
                  Approve
                </Button>
                <Button onPress={onClose} colorScheme={"danger"} size={"lg"}>
                  Reject
                </Button>
                <Button onPress={onClose} colorScheme={"warning"} size={"lg"}>
                  Pending
                </Button>
              </HStack>
            </ScrollView>
          )}
        </Actionsheet.Content>
      </Actionsheet>
    </Box>
  );
};

export default PO;

const styles = StyleSheet.create({
  invoiceItem: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
