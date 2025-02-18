import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Link } from "expo-router"; // Assuming you're using Expo Router
import { FontAwesome } from "@expo/vector-icons"; // For icons

const TourCard = ({ item, handleInvalidate }) => {
  return (
    <View style={styles.card}>
      {/* Image */}
      <Image
        source={{
          uri: `http://192.168.1.114:3000/img/tours/${item.imageCover}`,
        }}
        style={styles.image}
      />

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.summary}>{item.summary}</Text>

        {/* Details Grid */}
        <View style={styles.detailsGrid}>
          <View style={styles.detailItem}>
            <FontAwesome name="map-marker" size={20} color="#1B4332" />
            <Text style={[styles.detailText, styles.text]}>
              {item.startLocation.description}
            </Text>
          </View>
          <View style={styles.detailItem}>
            <FontAwesome name="calendar" size={20} color="#1B4332" />
            <Text style={[styles.detailText, styles.text]}>Date</Text>
          </View>
          <View style={styles.detailItem}>
            <FontAwesome name="flag" size={20} color="#1B4332" />
            <Text style={[styles.detailText, styles.text]}>
              {item.locations.length} stops
            </Text>
          </View>
          <View style={styles.detailItem}>
            <FontAwesome name="user" size={20} color="#1B4332" />
            <Text style={[styles.detailText, styles.text]}>
              {item.maxGroupSize} people
            </Text>
          </View>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <View>
          <Text style={[styles.price, styles.text]}>
            ${item.price} per person
          </Text>
          <Text style={[styles.rating, styles.text]}>
            ⭐ {item.ratingsAverage} ({item.ratingsQuantity})
          </Text>
        </View>
        <TouchableOpacity
          style={styles.detailsButton}
          onPress={handleInvalidate}
        >
          <Link href={`tours/${item._id}`} asChild>
            <Text style={styles.detailsButtonText}>Details</Text>
          </Link>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: Dimensions.get("window").width * 0.9, // 90% of screen width
    backgroundColor: "white",
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 10,
    elevation: 5, // Shadow for Android
    shadowColor: "#000", // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: "100%",
    height: 200,
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontFamily: "PoppinsBold",
    color: "#2D6A4F",
  },
  summary: {
    marginTop: 8,
    fontSize: 16,
    fontFamily: "PoppinsItalic",
    color: "#666",
  },
  detailsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 16,
    gap: 16,
  },
  detailItem: {
    flexDirection: "row",
    alignItems: "center",
    width: "48%", // Two columns
  },
  detailText: {
    marginLeft: 8,
    fontSize: 14,
    color: "#666",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#D8F3DC",
  },
  price: {
    fontSize: 18,
    // fontWeight: "bold",

    color: "#333",
  },
  rating: {
    fontSize: 14,
    color: "#666",
  },
  detailsButton: {
    backgroundColor: "#FFD166",
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  detailsButtonText: {
    fontSize: 16,
    fontFamily: "PoppinsBold",
    color: "black",
  },
  text: {
    fontFamily: "PoppinsRegular",
  },
});

export default TourCard;
