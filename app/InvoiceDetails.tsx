import React from "react";
import {
  Box,
  Text,
  Heading,
  VStack,
  HStack,
  Divider,
  Button,
} from "native-base";
import { useLocalSearchParams, useRouter } from "expo-router";

const InvoiceDetails: React.FC = () => {
  const { invoice } = useLocalSearchParams();
  const invoiceDetails = JSON.parse(invoice as string);
  const router = useRouter();
  return (
    <Box safeArea p={4} flex={1}>
      <Box bg="white" p={6} rounded="lg" shadow={3} flex={1}>
        <Box flex={1} alignItems={"flex-start"} justifyContent={"space-evenly"}>
          <Heading size="lg" color={"blue.400"}>
            Invoice #{invoiceDetails.bill_no}
          </Heading>
          <Text fontSize="sm" color="gray.500">
            LEGAL CONSULTING
          </Text>
        </Box>

        <VStack flex={2} justifyContent={"space-evenly"}>
          <HStack justifyContent="space-between">
            <Text>Issued On:</Text>
            <Text>{invoiceDetails.bill_date}</Text>
          </HStack>
          <HStack justifyContent="space-between">
            <Text>Due On:</Text>
            <Text>{invoiceDetails.due_date}</Text>
          </HStack>
          <Divider />
          <Box flexDirection={"row"} justifyContent={"space-between"}>
            <VStack>
              <Text>Bill From</Text>
              <Text bold>{invoiceDetails.supplier_name}</Text>
              <Text>supplier address</Text>
            </VStack>
            <VStack>
              <Text>Bill To</Text>
              <Text bold>xxx xxx xxxx</Text>
              <Text>xxxx xxxx</Text>
            </VStack>
          </Box>
        </VStack>

        <Box flex={3} justifyContent={"center"}>
          <VStack space={4}>
            <HStack justifyContent="space-between">
              <Text bold>Description</Text>
              <Text bold>Qty</Text>
              <Text bold>Price</Text>
              <Text bold>Total Price</Text>
            </HStack>
            <HStack justifyContent="space-between">
              <Text>xxxxx</Text>
              <Text>5</Text>
              <Text>100$</Text>
              <Text>200 INR</Text>
            </HStack>
            <HStack justifyContent="space-between">
              <Text>xxxxx</Text>
              <Text>5</Text>
              <Text>100$</Text>
              <Text>200 INR</Text>
            </HStack>
            <HStack justifyContent="space-between">
              <Text>xxxxx</Text>
              <Text>5</Text>
              <Text>100$</Text>
              <Text>200 INR</Text>
            </HStack>
            <HStack justifyContent="space-between">
              <Text>xxxxx</Text>
              <Text>5</Text>
              <Text>100$</Text>
              <Text>200 INR</Text>
            </HStack>
            <HStack justifyContent="space-between">
              <Text bold>Total Amount</Text>
              <Text bold>
                {invoiceDetails.net_total} {invoiceDetails.currency}
              </Text>
            </HStack>
          </VStack>
        </Box>

        <Box flex={4} justifyContent={"space-evenly"} alignItems={"center"}>
          <Text
            fontSize={{
              base: "md",
              sm: "sm",
              md: "md",
              lg: "lg",
            }}
            textAlign={"left"}
            color="gray.500"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ab
            repellendus reprehenderit suscipit perspiciatis et doloribus
            accusantium ex tempore, tenetur aperiam. Ut voluptatum placeat
            dolores! Corrupti animi magnam inventore suscipit error libero velit
            fugit cum! In optio laborum quidem atque adipisci praesentium esse?
            Ducimus modi quae assumenda magnam? Illo, dolores?
          </Text>

          <HStack space={3}>
            <Button
              colorScheme="red"
              flex={1}
              size={"lg"}
              onPress={() => router.back()}
            >
              Close
            </Button>
            <Button flex={1} size={"lg"}>
              Send
            </Button>
          </HStack>
        </Box>
      </Box>
    </Box>
  );
};

export default InvoiceDetails;
