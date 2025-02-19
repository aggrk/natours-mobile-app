import { Pressable, StyleSheet, Text } from "react-native";

export default function CustomButton({ buttonName, onPress }) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{buttonName}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
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
});
