import { StyleSheet } from "react-native";
import React from "react";
import {
  Box,
  Text,
  FormControl,
  Input,
  WarningOutlineIcon,
  Heading,
  Select,
  CheckIcon,
  ScrollView,
  Divider,
  Button,
} from "native-base";
type Props = {};

const CreateInvoice = (props: Props) => {
  return (
    <Box alignItems="center" justifyContent={"center"} safeArea py={10}>
      <Heading size={"2xl"} textAlign={"center"} color={"blue.400"}>
        Fill the details of your Invoice
      </Heading>
      <ScrollView w={"5/6"} h={"5/6"}>
        <FormControl w="100%" maxW="400px">
          <FormControl.Label>Company Name</FormControl.Label>
          <Input placeholder="Enter company name" />
          <Divider my={5} />
          <FormControl.Label>Bill no</FormControl.Label>
          <Input placeholder="Enter Bill no" /> <Divider my={2} />
          <FormControl.Label>Bill Date</FormControl.Label>
          <Input placeholder="Enter Bill Date" /> <Divider my={2} />
          <FormControl.Label>Supplier Name</FormControl.Label>
          <Input placeholder="Enter Supplier name" /> <Divider my={2} />
          <FormControl.Label>Net total</FormControl.Label>
          <Input placeholder="Enter Net total" /> <Divider my={2} />
          <FormControl.Label>Net total</FormControl.Label>
          <Input placeholder="Enter Net total" /> <Divider my={2} />
          <FormControl.Label>Currency</FormControl.Label>
          <Select
            minWidth="200"
            placeholder="Choose Currency"
            _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size={5} />,
            }}
            mt="1"
          >
            <Select.Item label="Dollar" value="Dollar $" />
            <Select.Item label="INR" value="INR " />
          </Select>{" "}
          <Divider my={5} />
          <FormControl.Label>Due Date</FormControl.Label>
          <Input placeholder="Due Date" />
          <FormControl.Label>Status</FormControl.Label> <Divider my={2} />
          <Select
            minWidth="200"
            placeholder="Choose Status"
            _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size={5} />,
            }}
            mt="1"
          >
            <Select.Item label="Approved" value="Approved" />
            <Select.Item label="Rejected" value="Rejected" />
            <Select.Item label="Pending" value="Pending" />
          </Select>
        </FormControl>
      </ScrollView>
      <Button mt={5} size={"lg"}>
        Submit
      </Button>
    </Box>
  );
};

export default CreateInvoice;

const styles = StyleSheet.create({});
