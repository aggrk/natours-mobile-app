import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.formText}>Sign In</Text>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Enter email"
              style={[styles.input, errors.email && styles.inputError]}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
            />
          )}
        />
        {errors.email && (
          <Text style={styles.error}>{errors.email.message}</Text>
        )}

        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value, onBlur } }) => (
            <TextInput
              placeholder="Enter password"
              style={[styles.input, errors.password && styles.inputError]}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
            />
          )}
        />
        {errors.password && (
          <Text style={styles.error}>{errors.password.message}</Text>
        )}
        <Pressable style={styles.button} onPress={handleSubmit(onSubmit)}>
          <Text style={styles.buttonText}>Signin</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#D3D3D3",
  },
  form: {
    backgroundColor: "#D8F3DC",
    width: "90%",
    padding: 20,
    borderRadius: 10,
    height: "auto",
    alignItems: "center",
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
  },
  formText: {
    paddingBottom: 10,
    fontFamily: "PoppinsRegular",
    fontSize: 20,
    color: "#1B4332",
  },
  input: {
    width: "100%",
    borderColor: "#1B4332",
    borderWidth: 2,
    paddingHorizontal: 12,
    paddingVertical: 14,
    fontSize: 16,
    marginBottom: 10,
    borderRadius: 5,
    fontFamily: "PoppinsRegular",
  },
  inputError: {
    borderColor: "red",
  },

  button: {
    backgroundColor: "#FFD166",
    width: "100%",
    paddingVertical: 16,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 20,
    fontFamily: "PoppinsRegular",
    color: "#1B4332",
  },
  error: {
    fontFamily: "PoppinsRegular",
    fontSize: 14,
    color: "red",
    alignSelf: "flex-start",
  },
});
