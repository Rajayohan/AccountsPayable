import React, { useState } from "react";
import {
  Box,
  VStack,
  HStack,
  Input,
  Button,
  Icon,
  Text,
  Radio,
  Select,
  CheckIcon,
  Heading,
} from "native-base";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import InvoiceDetails from "./InvoiceDetails";

const PaymentGateway: React.FC = () => {
  const { invoice } = useLocalSearchParams();
  const invoiceDetails = JSON.parse(invoice as string);
  const router = useRouter();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("upi");

  return (
    <Box flex={1} p={4} bg="white" safeArea>
      {/* Header */}
      <HStack alignItems="center" mb={4} variant="unstyled">
        <Button
          onPress={() => router.back()}
          bgColor={"white"}
          leftIcon={
            <Icon
              as={<MaterialIcons name="arrow-back" />}
              size={5}
              color={"black"}
            />
          }
        ></Button>

        <Text fontSize="xl" fontWeight="bold" mx="auto">
          Payment Gateway
        </Text>
        <Icon as={<FontAwesome name="rupee" />} size={6} />
      </HStack>

      {/* Invoice Details */}
      <VStack space={2} mb={6}>
        <Heading size={"xl"} bold>
          Invoice Details
        </Heading>
        <Text bold fontSize={"lg"}>
          {invoiceDetails.supplier_name}
        </Text>

        <Text bold>
          Issue Date:{" "}
          <Text fontStyle={"normal"}>{invoiceDetails.bill_date}</Text>
        </Text>
        <Text bold>
          Due Date:
          <Text fontStyle={"normal"}>{invoiceDetails.due_date}</Text>
        </Text>
        <Text bold>
          Total Amount:{" "}
          <Text fontStyle={"normal"}>{invoiceDetails.amount}</Text>
        </Text>
      </VStack>

      {/* Payment Method Selection */}
      <VStack space={4} mb={6}>
        <Text fontSize="md" fontWeight="bold">
          Select Payment Method
        </Text>
        <Radio.Group
          name="paymentMethodGroup"
          value={selectedPaymentMethod}
          onChange={(nextValue) => setSelectedPaymentMethod(nextValue)}
        >
          <Radio
            value="upi"
            my={1}
            icon={<Icon as={MaterialIcons} name="compare-arrows" />}
          >
            UPI
          </Radio>
          <Radio
            value="card"
            my={1}
            icon={<Icon as={MaterialIcons} name="credit-card" />}
          >
            Credit/Debit Card
          </Radio>
          <Radio
            value="netbanking"
            my={1}
            icon={<Icon as={MaterialIcons} name="account-balance" />}
          >
            Internet Banking
          </Radio>
        </Radio.Group>
      </VStack>

      {/* UPI Payment */}
      {selectedPaymentMethod === "upi" && (
        <VStack space={4} mb={6}>
          <Text fontSize="md" fontWeight="bold">
            UPI Payment
          </Text>
          <Input
            placeholder="Enter UPI ID"
            variant="outline"
            InputLeftElement={
              <Icon
                as={<MaterialIcons name="compare-arrows" />}
                size={5}
                ml={2}
              />
            }
          />
          <Button
            colorScheme="blue"
            leftIcon={
              <Icon as={MaterialIcons} name="account-balance-wallet" size={5} />
            }
          >
            Pay via UPI
          </Button>
        </VStack>
      )}

      {/* Credit/Debit Card Payment */}
      {selectedPaymentMethod === "card" && (
        <VStack space={4} mb={6}>
          <Text fontSize="md" fontWeight="bold">
            Credit/Debit Card Payment
          </Text>
          <Input
            placeholder="Card Number"
            variant="outline"
            InputLeftElement={
              <Icon as={<MaterialIcons name="credit-card" />} size={5} ml={2} />
            }
          />
          <HStack space={4}>
            <Input
              placeholder="Expiry Date"
              variant="outline"
              flex={1}
              InputLeftElement={
                <Icon as={<MaterialIcons name="event" />} size={5} ml={2} />
              }
            />
            <Input
              placeholder="CVV"
              variant="outline"
              flex={1}
              InputLeftElement={
                <Icon as={<MaterialIcons name="lock" />} size={5} ml={2} />
              }
            />
          </HStack>
          <Input
            placeholder="Cardholder Name"
            variant="outline"
            InputLeftElement={
              <Icon as={<MaterialIcons name="person" />} size={5} ml={2} />
            }
          />
          <Button
            colorScheme="blue"
            leftIcon={
              <Icon as={MaterialIcons} name="account-balance-wallet" size={5} />
            }
          >
            Pay via Credit/Debit Card
          </Button>
        </VStack>
      )}

      {/* Internet Banking */}
      {selectedPaymentMethod === "netbanking" && (
        <VStack space={4} mb={6}>
          <Text fontSize="md" fontWeight="bold">
            Internet Banking
          </Text>
          <Select
            placeholder="Select your bank"
            _selectedItem={{
              bg: "purple.600",
              endIcon: <CheckIcon size={5} />,
            }}
          >
            <Select.Item label="ABC Bank" value="abc" />
            <Select.Item label="XYZ Bank" value="xyz" />
            <Select.Item label="PQR Bank" value="pqr" />
          </Select>
          <Button
            colorScheme="purple"
            leftIcon={
              <Icon as={MaterialIcons} name="account-balance" size={5} />
            }
          >
            Pay via Internet Banking
          </Button>
        </VStack>
      )}

      {/* Proceed Payment Button */}
      <Button colorScheme="purple" size="lg" mt={4}>
        Proceed Payment
      </Button>
    </Box>
  );
};

export default PaymentGateway;
