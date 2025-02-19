import { StyleSheet, Text } from "react-native";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import FormLayout from "../components/FormLayout";
import ControlledInput from "../components/ControlledInput";
import CustomButton from "../components/CustomButton";
import { useForm } from "react-hook-form";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(8, "Password should have atleast 8 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});

export default function signup() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <FormLayout>
      <Text style={styles.formText}>Sign Up</Text>
      <ControlledInput
        name="name"
        placeholder="Enter your name"
        errors={errors}
        control={control}
      />
      <ControlledInput
        name="email"
        placeholder="Enter your email"
        errors={errors}
        control={control}
      />
      <ControlledInput
        name="password"
        placeholder="Enter password"
        errors={errors}
        control={control}
      />
      <ControlledInput
        name="confirmPassword"
        placeholder="Confirm password"
        errors={errors}
        control={control}
      />
      <CustomButton buttonName="Sign up" onPress={handleSubmit(onSubmit)} />
    </FormLayout>
  );
}

const styles = StyleSheet.create({
  formText: {
    paddingBottom: 10,
    fontFamily: "PoppinsRegular",
    fontSize: 20,
    color: "#1B4332",
  },
});
