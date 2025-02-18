import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  ActivityIndicator,
  FlatList,
} from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link } from "expo-router";
import natoursSplash from "@/assets/images/natours-splash.png";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import TourCard from "./TourCard";

async function fetchTours() {
  try {
    const res = await axios.get("http://192.168.1.114:3000/api/v1/tours", {
      withCredentials: true,
    });
    return res.data;
  } catch (err) {
    const errMessage = err?.response?.data?.message;
    console.log(errMessage);
    throw new Error(errMessage);
  }
}

export default function App() {
  const { isPending, data: tours } = useQuery({
    queryKey: ["tours"],
    queryFn: fetchTours,
  });

  if (isPending) return <ActivityIndicator />;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={natoursSplash}
          style={styles.image}
          resizeMode="contain"
        />
        <View style={styles.auth}>
          <Link href="/signin">
            <Ionicons name="log-in-outline" size={30} color="#1B4332" />
          </Link>
          <Ionicons name="person-add-outline" size={30} color="#1B4332" />
        </View>
      </View>
      <FlatList
        data={tours.data.data}
        keyExtractor={(tour) => tour._id}
        renderItem={({ item: tour }) => <TourCard item={tour} />}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#D3D3D3",
    justifyContent: "center",
  },
  header: {
    height: 70,
    backgroundColor: "#D8F3DC",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    width: 150,
    height: 50,
    marginLeft: 10,
  },
  auth: {
    flexDirection: "row",
    gap: 15,
    marginRight: 10,
    alignItems: "center",
  },
  linkButton: {
    textAlign: "center",
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    borderRadius: 20,
    padding: 10,
  },
  text: {
    fontSize: 42,
    fontFamily: "PoppinsRegular",
  },
  listContent: {
    alignItems: "center",
    paddingVertical: 20,
  },
});
