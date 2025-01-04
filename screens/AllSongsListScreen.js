import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Platform,
  StyleSheet,
  FlatList,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { AllsongsList } from "../ScreenSongs/AllSongs";

const AllSongsListScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => navigation.navigate('AllSongsPlayScreen')}
      activeOpacity={1}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={[styles.imageContainer, styles.shadowProp]}>
          <Image source={item.artwork} style={styles.image} />
        </View>
        <View style={{ paddingLeft: 10, paddingRight: 10 }}>
          <Text
            style={{ color: "white", fontSize: 15, width: "100%" }}
            adjustsFontSizeToFit={true}
            numberOfLines={1}
          >
            {item.title}
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 5,
            }}
          >
            <Text style={styles.artistText}>{item.artist}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <LinearGradient colors={["#b88c08", "#60045f"]} style={styles.gradient}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={{ flexDirection: "row" }}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={require("../images/back-white.webp")}
            style={styles.backImage}
          />
        </TouchableOpacity>

        <Text style={styles.headerText}>Medistoris.cat</Text>
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Àudios</Text>
      </View>

      <FlatList
        data={AllsongsList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    paddingBottom: 20,
  },
  headerContainer: {
    flexDirection: "row",
    marginTop: Platform.OS === "ios" ? 50 : 50,
    paddingHorizontal: 10,
    borderBottomWidth: 0.2,
    paddingBottom: 10,
  },
  backImage: {
    height: 50,
    width: 50,
    marginRight: 6,
  },
  headerText: {
    fontSize: 18,
    color: "#ffffff",
    fontWeight: "500",
    marginLeft: "20%",
    marginTop: 10,
  },
  titleContainer: {
    flexDirection: "row",
    paddingLeft: 20,
    marginTop: 20,
  },
  title: {
    color: "white",
    fontSize: 24,
    marginLeft: 5,
  },
  itemContainer: {
    width: "100%",
    height: 100,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 10,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    width: 100,
    height: 100,
    paddingBottom: 3,
  },
  image: {
    aspectRatio: 1,
    flex: 1,
    height: "100%",
    borderRadius: 10,
  },
  shadowProp: {
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    backgroundColor: "rgba(0,0,0,0)",
    elevation: 2,
  },
  artistText: {
    color: "white",
    fontSize: 13,
    verticalAlign: "middle",
  },
});

export default AllSongsListScreen;