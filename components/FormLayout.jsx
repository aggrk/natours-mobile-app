import { StyleSheet, View } from "react-native";

export default function FormLayout({ children }) {
  return (
    <View style={styles.container}>
      <View style={styles.form}>{children}</View>
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
    justifyContent: "center",
    elevation: 5,
  },
});
