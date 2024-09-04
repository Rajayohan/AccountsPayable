import { StyleSheet, FlatList, ListRenderItem } from "react-native";
import React, { useState, useEffect } from "react";
import {
  Box,
  Icon,
  Text,
  Heading,
  VStack,
  Button,
  Modal,
  Spinner,
  HStack,
} from "native-base";
import axios from "axios";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import * as ImagePicker from "expo-image-picker";

interface Invoice {
  name: string;
  bill_no: string;
  bill_date: string;
  supplier_name: string;
  net_total: number;
  currency: string;
  due_date: string;
  status: string;
}

const Invoice: React.FC = () => {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();
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
        setInvoices(response.data.data); // Assuming the response has a "data" property that holds the array
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch data");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      console.log(result.assets[0].uri);
    } else console.log("error uploading image");
  };
  if (loading) {
    return (
      <Box flex={1} justifyContent="center" alignItems="center">
        <Spinner size="lg" />
      </Box>
    );
  }

  if (error) {
    return (
      <Box flex={1} justifyContent="center" alignItems="center">
        <Text color="red.500">{error}</Text>
      </Box>
    );
  }

  const renderItem: ListRenderItem<Invoice> = ({ item }) => (
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
      <HStack space={4}>
        <Button
          size={"md"}
          onPress={() =>
            router.push({
              pathname: "/InvoiceDetails",
              params: { invoice: JSON.stringify(item) },
            })
          }
        >
          View Details
        </Button>
        <Button
          size={"md"}
          onPress={() =>
            router.navigate({
              pathname: "/PaymentGateway",
              params: { invoice: JSON.stringify(item) },
            })
          }
        >
          Pay
        </Button>
      </HStack>
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
        ></Button>

        <Heading>Invoice</Heading>
        <VStack flexDirection={"row"}>
          <Button
            leftIcon={<Icon as={MaterialIcons} name="create" size="sm" />}
            onPress={() => router.navigate("/CreateInvoice")}
            mr={"1"}
          >
            Create
          </Button>
          <Button
            leftIcon={
              <Icon as={Ionicons} name="cloud-upload-outline" size="sm" />
            }
            onPress={() => setShowModal(true)}
          >
            Upload
          </Button>
        </VStack>
      </VStack>
      <Box flex={9} px={2}>
        <FlatList
          data={invoices}
          keyExtractor={(item) => item.name}
          ItemSeparatorComponent={() => <Box height={"2"}></Box>}
          renderItem={renderItem}
        />
      </Box>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px" maxHeight="5/6" h={"1/3"}>
          <Box flex={1}>
            <Box
              flex={1}
              alignItems={"center"}
              flexDirection={"row"}
              justifyContent={"flex-end"}
            >
              <Modal.CloseButton />
            </Box>
            <Box flex={9} justifyContent={"center"} alignItems={"center"}>
              <Button
                leftIcon={
                  <Icon as={Ionicons} name="cloud-upload-outline" size="lg" />
                }
                mb={"10"}
                size={"lg"}
                onPress={pickImage}
              >
                Upload from Device
              </Button>
              <Button
                leftIcon={<Icon as={AntDesign} name="scan1" size="lg" />}
                size={"lg"}
                onPress={() => router.navigate("/Camera")}
              >
                Scan from Camera
              </Button>
            </Box>
          </Box>
        </Modal.Content>
      </Modal>
    </Box>
  );
};

export default Invoice;

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
