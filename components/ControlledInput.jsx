import { Controller } from "react-hook-form";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function ControlledInput({
  name,
  placeholder,
  control,
  errors,
}) {
  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onChangeText={onChange}
            value={value}
            onBlur={onBlur}
            placeholder={placeholder}
            style={[styles.input, errors[name] && styles.inputError]}
            secureTextEntry={name === "password" || name === "confirmPassword"}
          />
        )}
      />
      {errors[name] && <Text style={styles.error}>{errors[name].message}</Text>}
    </>
  );
}

const styles = StyleSheet.create({
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
  error: {
    fontFamily: "PoppinsRegular",
    fontSize: 14,
    color: "red",
    alignSelf: "flex-start",
    marginBottom: 10,
  },
});
