// import React, { useState } from "react";
// import {
//   Box,
//   VStack,
//   HStack,
//   Input,
//   Button,
//   Icon,
//   Text,
//   Modal,
//   ScrollView,
// } from "native-base";
// import { MaterialIcons } from "@expo/vector-icons";
// import { useLocalSearchParams, useRouter } from "expo-router";

// const PaymentGateway = () => {
//   const router = useRouter();
//   const [showModal, setShowModal] = useState(false);
//   const [modalContent, setModalContent] = useState<"bank" | "payment" | null>(
//     null
//   );

//   const openModal = (content: "bank" | "payment") => {
//     setModalContent(content);
//     setShowModal(true);
//   };

//   return (
//     <Box flex={1} p={4} bg="white" safeArea>
//       {/* Payment Details Header */}
//       <Text fontSize="xl" fontWeight="bold" mb={4}>
//         Payment Details
//       </Text>

//       {/* Invoice Number and Payee Name Input Fields */}
//       <VStack space={4} mb={6}>
//         <Input
//           placeholder="Invoice Number"
//           variant="outline"
//           InputLeftElement={
//             <Icon as={<MaterialIcons name="receipt" />} size={5} ml={2} />
//           }
//         />
//         <Input
//           placeholder="Payee Name"
//           variant="outline"
//           InputLeftElement={
//             <Icon as={<MaterialIcons name="person" />} size={5} ml={2} />
//           }
//         />
//       </VStack>
//       <ScrollView>
//         {/* Bank Details Section */}
//         <Box p={4} bg="gray.100" borderRadius="md" mb={4}>
//           <Text fontSize="md" fontWeight="bold" mb={2}>
//             Bank Details
//           </Text>
//           <Text mb={1}>Name: John Doe</Text>
//           <Text>Account No: 123456789, Bank: ABC Bank</Text>
//           <Button
//             variant="outline"
//             mt={4}
//             alignSelf="flex-start"
//             onPress={() => openModal("bank")}
//           >
//             Edit
//           </Button>
//         </Box>

//         {/* Payment Details Section */}
//         <Box p={4} bg="gray.100" borderRadius="md" mb={4}>
//           <Text fontSize="md" fontWeight="bold" mb={2}>
//             Payment Details
//           </Text>
//           <Text mb={1}>Amount: $500.00, Method: Credit Card</Text>
//           <Text>Transaction ID: 987654321, Fee: $5.00</Text>
//           <Button
//             variant="outline"
//             mt={4}
//             alignSelf="flex-start"
//             onPress={() => openModal("payment")}
//           >
//             Edit
//           </Button>
//         </Box>
//         {/* Bank Details Section */}
//         <Box p={4} bg="gray.100" borderRadius="md" mb={4}>
//           <Text fontSize="md" fontWeight="bold" mb={2}>
//             Bank Details
//           </Text>
//           <Text mb={1}>Name: John Doe</Text>
//           <Text>Account No: 123456789, Bank: ABC Bank</Text>
//           <Button
//             variant="outline"
//             mt={4}
//             alignSelf="flex-start"
//             onPress={() => openModal("bank")}
//           >
//             Edit
//           </Button>
//         </Box>

//         {/* Payment Details Section */}
//         <Box p={4} bg="gray.100" borderRadius="md" mb={4}>
//           <Text fontSize="md" fontWeight="bold" mb={2}>
//             Payment Details
//           </Text>
//           <Text mb={1}>Amount: $500.00, Method: Credit Card</Text>
//           <Text>Transaction ID: 987654321, Fee: $5.00</Text>
//           <Button
//             variant="outline"
//             mt={4}
//             alignSelf="flex-start"
//             onPress={() => openModal("payment")}
//           >
//             Edit
//           </Button>
//         </Box>
//       </ScrollView>
//       {/* Modal */}
//       <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
//         <Modal.Content maxWidth="400px">
//           <Modal.CloseButton />
//           <Modal.Header>
//             {modalContent === "bank"
//               ? "Edit Bank Details"
//               : "Edit Payment Details"}
//           </Modal.Header>
//           <Modal.Body>
//             {modalContent === "bank" ? (
//               <VStack space={4}>
//                 <Input placeholder="Name" defaultValue="John Doe" />
//                 <Input placeholder="Account No" defaultValue="123456789" />
//                 <Input placeholder="Bank" defaultValue="ABC Bank" />
//               </VStack>
//             ) : (
//               <VStack space={4}>
//                 <Input placeholder="Amount" defaultValue="$500.00" />
//                 <Input placeholder="Method" defaultValue="Credit Card" />
//                 <Input placeholder="Transaction ID" defaultValue="987654321" />
//                 <Input placeholder="Fee" defaultValue="$5.00" />
//               </VStack>
//             )}
//           </Modal.Body>
//           <Modal.Footer>
//             <Button onPress={() => setShowModal(false)}>Save</Button>
//           </Modal.Footer>
//         </Modal.Content>
//       </Modal>
//     </Box>
//   );
// };

// export default PaymentGateway;

import React from "react";
import {
  Box,
  VStack,
  HStack,
  FormControl,
  Input,
  Select,
  CheckIcon,
  Button,
  Heading,
} from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
const Payment = () => {
  return (
    <Box flex={1} p={4} bg="white" safeArea>
      <VStack space={3}>
        <Heading size="md">Type of Payment</Heading>
        <FormControl>
          <FormControl.Label>Series</FormControl.Label>
          <Input variant="filled" placeholder="ACC-PAY-.YYYY.-" isDisabled />
        </FormControl>

        <HStack space={4}>
          <FormControl flex={1}>
            <FormControl.Label>Posting Date</FormControl.Label>
            <Input variant="filled" placeholder="03-09-2024" isDisabled />
          </FormControl>
          <FormControl flex={1}>
            <FormControl.Label>Company</FormControl.Label>
            <Input variant="filled" placeholder="DO I T" isDisabled />
          </FormControl>
        </HStack>

        <FormControl>
          <FormControl.Label>Payment Type</FormControl.Label>
          <Select
            placeholder="Receive"
            _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size={5} />,
            }}
          >
            <Select.Item label="Receive" value="receive" />
            <Select.Item label="Pay" value="pay" />
            <Select.Item label="Internal Transfer" value="Internal Transfer" />
          </Select>
        </FormControl>

        <FormControl>
          <FormControl.Label>Mode of Payment</FormControl.Label>
          <Input variant="filled" placeholder="" />
        </FormControl>

        <Heading size="md">Payment From / To</Heading>
        <FormControl>
          <FormControl.Label>Party Type</FormControl.Label>
          <Input variant="filled" placeholder="" />
        </FormControl>

        <Heading size="md">Accounts</Heading>
        <FormControl>
          <FormControl.Label>Account Paid To</FormControl.Label>
          <Input variant="filled" placeholder="" />
        </FormControl>

        <Heading size="md">Accounting Dimensions</Heading>
        <HStack space={4}>
          <FormControl flex={1}>
            <FormControl.Label>Project</FormControl.Label>
            <Input variant="filled" placeholder="" />
          </FormControl>
          <FormControl flex={1}>
            <FormControl.Label>Cost Center</FormControl.Label>
            <Input variant="filled" placeholder="" />
          </FormControl>
        </HStack>

        <Button
          leftIcon={<Ionicons name="save-sharp" size={24} color="white" />}
        >
          Save
        </Button>
      </VStack>
    </Box>
  );
};

export default Payment;
