import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ControlledInput from "../components/ControlledInput";
import CustomButton from "../components/CustomButton";
import FormLayout from "../components/FormLayout";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password must be filled"),
});

export default function signin() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log("Input data", data);
  };

  return (
    <FormLayout>
      <Text style={styles.formText}>Sign In</Text>

      <ControlledInput
        name="email"
        control={control}
        placeholder="Enter email"
        errors={errors}
      />
      <ControlledInput
        name="password"
        control={control}
        placeholder="Enter password"
        errors={errors}
      />
      <CustomButton buttonName="Sign in" onPress={handleSubmit(onSubmit)} />
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
